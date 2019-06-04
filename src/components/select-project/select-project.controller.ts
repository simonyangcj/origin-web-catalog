import * as angular from 'angular';
import * as _ from 'lodash';

export class SelectProjectController implements angular.IController {
  static $inject = [
    '$filter',
    '$scope',
    'AuthService',
    'AuthorizationService',
    'KeywordService',
    'Logger',
    'ProjectsService',
    'RecentlyViewedProjectsService',
    'gettextCatalog'
  ];

  static readonly LARGE_PROJECT_LIST_SIZE = 500;

  public ctrl: any = this;

  private $filter: any;
  private $scope: any;
  private ProjectsService: any;
  private Logger: any;
  private AuthService: any;
  private AuthorizationService: any;
  private KeywordService: any;
  private RecentlyViewedProjectsService: any;

  private projects: any;
  private largeProjectList: boolean;
  private lastSearch: string;
  private lastResults: any;
  private gettextCatalog: any;

  constructor($filter: any,
              $scope: any,
              AuthService: any,
              AuthorizationService: any,
              KeywordService: any,
              Logger: any,
              ProjectsService: any,
              RecentlyViewedProjectsService: any,
              gettextCatalog: any) {
    this.$filter = $filter;
    this.$scope = $scope;
    this.AuthService = AuthService;
    this.AuthorizationService = AuthorizationService;
    this.KeywordService = KeywordService;
    this.Logger = Logger;
    this.ProjectsService = ProjectsService;
    this.RecentlyViewedProjectsService = RecentlyViewedProjectsService;
    this.gettextCatalog = gettextCatalog;

    this.largeProjectList = false;
    this.lastSearch = "";
    this.lastResults = [];
  }

  public $onInit() {
    this.ctrl.noProjectsCantCreate = false;

    this.ctrl.noProjectsConfig = {
      title: this.gettextCatalog.getString('No Projects Found'),
      info: this.gettextCatalog.getString("Services cannot be provisioned without a project.")
    };

    if (this.ctrl.showDivider === undefined) {
      this.ctrl.showDivider = true;
    }

    if (this.ctrl.skipCanAddValidation === undefined) {
      this.ctrl.skipCanAddValidation = false;
    }

    if (this.ctrl.isRequired === undefined) {
        this.ctrl.isRequired = true;
    }

    this.ProjectsService.canCreate().then(() => {
      this.ctrl.canCreate = true;
    }, (result) => {
      this.ctrl.canCreate = false;
      // 403 Forbidden indicates the user doesn't have authority.
      // Any other failure status is an unexpected error.
      if (result.status !== 403) {
        var msg = this.gettextCatalog.getString('Failed to determine create project permission');
        if (result.status !== 0) {
          msg += " (" + result.status + ")";
        }
        this.Logger.warn(msg);
      }

      var data = result.data || {};

      if (data.details) {
        var messages = [];
        _.forEach(data.details.causes || [], function (cause: any) {
          if (cause.message) {
            messages.push(cause.message);
          }
        });
        if (messages.length > 0) {
          this.ctrl.noProjectsCantCreateMessage = messages.join("\n");
        }
      }
    }).finally(() => {
      this.listProjects();
    });
  }

  public $onChanges(onChangesObj: angular.IOnChangesObject) {
    if (onChangesObj.nameTaken && !onChangesObj.nameTaken.isFirstChange()) {
      this.ctrl.forms.createProjectForm.name.$setValidity('nameTaken', !this.ctrl.nameTaken);
    }
    if (onChangesObj.availableProjects && !onChangesObj.availableProjects.isFirstChange()) {
      this.updateProjects(this.ctrl.availableProjects);
    }
  }

  public onSelectProjectChange () {
    if (!this.ctrl.skipCanAddValidation) {
        this.canIAddToProject();
    }
    if (angular.isFunction(this.ctrl.onProjectSelected)) {
      this.ctrl.onProjectSelected(this.ctrl.selectedProject);
    }
  }

  public onOpenClose (isOpen: boolean) {
    if (isOpen && _.isFunction(this.ctrl.onOpen)) {
      this.ctrl.onOpen();
    }
  }

  public onNewProjectNameChange() {
    this.ctrl.forms.createProjectForm.name.$setValidity('nameTaken', true);
  }

  public isNewProject(): boolean {
    return this.projects && this.ctrl.selectedProject && !_.has(this.ctrl.selectedProject, 'metadata.uid');
  }

  public canOnlyCreateProject(): boolean {
    return this.ctrl.numProjectChoices === 1 && !this.ctrl.hideCreateProject && this.ctrl.canCreate;
  }

  public getProjectChoices = () => {
    if (this.ctrl.matchingProjects) {
      return this.ctrl.matchingProjects;
    }

    // Make the user start typing a name for extremely large project lists.
    if (this.largeProjectList) {
      return [];
    }

    return this.projects;
  };

  public groupChoicesBy = (item: any) => {
    // No grouping for large lists since you're only searching existing projects.
    if (this.largeProjectList) {
      return "";
    }

    // An item without an UID is the "Create Project" choice.
    if (!item.metadata.uid) {
      return "";
    }

    if (this.RecentlyViewedProjectsService.isRecentlyViewed(item.metadata.uid)) {
      return this.gettextCatalog.getString("Recently Viewed");
    }

    return this.gettextCatalog.getString("Other Projects");
  };

  public refreshChoices = (search: string) => {
    let candidates;
    if (this.lastSearch && search.startsWith(this.lastSearch)) {
      // Search within the previous results.
      candidates = this.lastResults;
    } else {
      candidates = this.projects;
    }

    // Remember the previous search so we can search within results rather than
    // the entire list when refining searches.
    this.lastSearch = search;

    // Save the full list of matches before limiting the number.
    this.lastResults = this.filterProjects(search, candidates);
    this.ctrl.matchingProjects = _.take(this.lastResults, SelectProjectController.LARGE_PROJECT_LIST_SIZE);
  };

  private filterProjects(search: string, candidates: any) {
    if (!search) {
      return this.largeProjectList ? [] : candidates;
    }

    // Use KeywordService to perform a case-insensitive search on name and display name.
    let searchFields = [
      'metadata.name',
      'metadata.annotations["openshift.io/display-name"]'
    ];
    let keywords = this.KeywordService.generateKeywords(search);
    return this.KeywordService.filterForKeywords(candidates, searchFields, keywords);
  };

  private canIAddToProject = () => {
    let canIAddToProject: boolean = true;

    var projectName = _.get(this.ctrl.selectedProject, 'metadata.name');

    if (!this.isNewProject()) {
      this.AuthorizationService.getProjectRules(projectName).then( () => {
        canIAddToProject = this.AuthorizationService.canIAddToProject(projectName);
        if (this.ctrl.forms) {
          this.ctrl.forms.selectProjectForm.selectProject.$setValidity('cannotAddToProject', canIAddToProject);
        }
      });
    }

    if (this.ctrl.forms) {
      this.ctrl.forms.selectProjectForm.selectProject.$setValidity('cannotAddToProject', canIAddToProject);
    }
  };

  private updateProjects(projects: any) {
    this.largeProjectList = _.size(projects) >= SelectProjectController.LARGE_PROJECT_LIST_SIZE;
    if (this.largeProjectList) {
      this.ctrl.placeholder = this.gettextCatalog.getString('Filter projects by name');
      this.ctrl.searchEnabled = true;
      this.ctrl.refreshDelay = 500;
      this.projects = projects;
      this.ctrl.numProjectChoices = _.size(this.projects);

      // Don't do any additional filtering or processing on very large project lists.
      return;
    }

    this.ctrl.placeholder = this.gettextCatalog.getString('Select project');

    // 'Create Project' placeholder obj in the dropdown
    let createProject = {
      "metadata": {
        "annotations": {
          "openshift.io/display-name": this.gettextCatalog.getString("Create Project"),
          "new-display-name": ""
        }
      }
    };

    let filteredProjects = _.reject(projects, 'metadata.deletionTimestamp');
    this.projects = this.RecentlyViewedProjectsService.orderByMostRecentlyViewed(filteredProjects);
    this.ctrl.searchEnabled = !_.isEmpty(filteredProjects);
    this.ctrl.refreshDelay = 0;

    // Don't let users create a project with an existing name. Make sure we
    // use the unfiltered list or we don't show the error for projects that
    // exist, but are being deleted.
    this.ctrl.existingProjectNames = _.map(projects, 'metadata.name');

    this.preselectProject();

    if (this.ctrl.canCreate && !this.ctrl.hideCreateProject) {
      this.ctrl.placeholder = this.gettextCatalog.getString('Select or create project');
      this.projects.unshift(createProject);
      if (_.size(this.projects) === 1) {
        this.ctrl.selectedProject = createProject;
        this.onSelectProjectChange();
      }
    } else if (_.size(this.projects) === 0) {
      this.ctrl.noProjectsCantCreate = true;
      this.AuthService
        .withUser()
        .then((resp: any) => {
          this.ctrl.user = resp;
        });
      this.$scope.$emit('no-projects-cannot-create');
    }

    this.ctrl.numProjectChoices = _.size(this.projects);
  }

  private preselectProject() {

    if (this.ctrl.selectedProject) {
      return;
    }

    // if one project, default to it, else default to selected project by name (if available)
    if (_.size(this.projects) === 1) {
      this.ctrl.selectedProject = this.projects[0];
    } else if (this.ctrl.preselectProjectName) {
      this.ctrl.selectedProject = _.find(this.projects, {
        metadata: {
          name: this.ctrl.preselectProjectName
        }
      });
    }

    if (this.ctrl.selectedProject) {
      this.onSelectProjectChange();
    }
  }

  private listProjects() {
    if (this.ctrl.availableProjects) {
      this.updateProjects(this.ctrl.availableProjects);
    } else {
      this.ProjectsService.list().then((response: any) => {
        this.updateProjects(response.by('metadata.name'));
      });
    }
  }
}
