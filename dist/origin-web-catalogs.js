webpackJsonp([ 0, 1 ], [ function(e, t) {
    e.exports = _;
}, function(e, t) {
    e.exports = angular;
}, function(e, t) {
    e.exports = $;
}, function(e, t) {}, function(e, t) {
    e.exports = '<a href="" class="catalog-search-match" ng-if="match.model.id !== \'viewAll\' && match.model.id !== \'viewNone\'" ng-class="{\'catalog-search-summary\': match.model.id === \'viewNone\' || match.model.id === \'viewAll\'}">\n  <span class="catalog-search-match-icon" ng-if="match.model.id !== \'viewAll\' && match.model.id !== \'viewNone\'">\n    <span ng-if="match.model.imageUrl"><img ng-src="{{match.model.imageUrl}}"></span>\n    <span ng-if="!match.model.imageUrl && match.model.iconClass" ng-class="match.model.iconClass" class="icon"></span>\n  </span>\n  <div class="catalog-search-match-info" ng-if="match.model.id !== \'viewAll\' && match.model.id !== \'viewNone\'">\n    <div class="catalog-search-match-label">\n      {{match.label}}\n    </div>\n    <div class="catalog-search-match-description">\n      <span ng-repeat="tag in (match.model.tags || match.model.resource.tags)" class="tag small text-muted">\n        {{tag}}\n      </span>\n    </div>\n  </div>\n</a>\n<a ng-if="match.model.id === \'viewAll\'" href="" class="catalog-search-show-all">{{match.model.text}}  <span class="fa fa-angle-right" aria-hidden="true"></span></a>\n<div ng-if="match.model.id === \'viewNone\'" class="catalog-search-show-none">{{match.model.text}}</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <bind-application-form application-name="$ctrl.name"\n                         form-name="$ctrl.bindForm"\n                         allow-no-binding="true"\n                         service-instances="$ctrl.serviceInstances"\n                         service-classes="$ctrl.serviceClasses"\n                         service-to-bind="$ctrl.serviceToBind">\n  </bind-application-form>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.builderForm" class="config-form">\n      <select-project ng-if="!$ctrl.addToProject" selected-project="$ctrl.selectedProject"\n                      name-taken="$ctrl.projectNameTaken"></select-project>\n      <span ng-if="!$ctrl.noProjectsCantCreate">\n        <div class="form-group">\n          <label class="control-label" for="version" translate>Version</label>\n          <ui-select ng-model="$ctrl.istag" required search-enabled="false">\n            <ui-select-match>\n              <span>\n                {{$select.selected.name}}\n                <small ng-repeat="otherTag in $ctrl.referencedBy[$select.selected.name]">\n                  <span ng-if="$first"> &mdash; </span>{{otherTag}}<span ng-if="!$last">,</span>\n                </small>\n              </span>\n            </ui-select-match>\n            <ui-select-choices repeat="tag in $ctrl.versions track by tag.name">\n              {{tag.name}}\n              <small ng-repeat="otherTag in $ctrl.referencedBy[tag.name]">\n                <span ng-if="$first"> &mdash; </span>{{otherTag}}<span ng-if="!$last">,</span>\n              </small>\n            </ui-select-choices>\n          </ui-select>\n        </div>\n        <div class="form-group">\n          <label class="control-label required" for="app-name" translate>Application Name</label>\n          <div ng-class="{ \'has-error\': $ctrl.builderForm.name.$dirty && $ctrl.builderForm.name.$touched && $ctrl.builderForm.name.$invalid }">\n            <input\n              class="form-control"\n              type="text"\n              id="app-name"\n              required\n              minlength="2"\n              ng-maxlength="$ctrl.nameMaxLength"\n              ng-pattern="$ctrl.namePattern"\n              ng-model="$ctrl.name"\n              name="name"\n              autocorrect="off"\n              autocapitalize="none"\n              spellcheck="false">\n            \x3c!--\n              Wait until users leave the field to avoid flashing errors as they\n              type. Check $dirty touched to avoid a usability problem where the\n              "Try Sample Repository" link moves from under the mouse cursor\n              when clicked since the error message appears.\n            --\x3e\n            <div ng-if="$ctrl.builderForm.name.$dirty && $ctrl.builderForm.name.$touched">\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.required">\n                <span class="help-block" translate>\n                  Application name is required.\n                </span>\n              </div>\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.pattern">\n                <span class="help-block">\n                  <translate>Application name consists of lower-case letters, numbers, and dashes. It must start with a letter and can\'t end with a \'-\' .</translate>\n                </span>\n              </div>\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.minlength">\n                <span class="help-block" translate>\n                  Application name must be at least 2 characters.\n                </span>\n              </div>\n              <div class="has-error" ng-show="$ctrl.builderForm.name.$error.maxlength">\n                <span class="help-block" translate>\n                  Application name can\'t be more than 24 characters.\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label class="control-label required" for="repository" translate>Git Repository</label>\n          <div ng-class="{ \'has-error\': $ctrl.builderForm.repository.$touched && $ctrl.builderForm.repository.$error.$required }">\n            <input class="form-control"\n              type="text"\n              id="repository"\n              name="repository"\n              required\n              ng-model="$ctrl.repository"\n              ng-change="$ctrl.onRepositoryChanged()"\n              autocorrect="off"\n              autocapitalize="off"\n              spellcheck="false">\n            <div ng-if="$ctrl.istag.annotations.sampleRepo" class="help-block">\n              <a href="" ng-click="$ctrl.fillSampleRepo()"><translate>Try Sample Repository</translate>\n                <i class="fa fa-level-up" aria-hidden="true"></i></a>\n            </div>\n            <div class="has-error" ng-if="$ctrl.builderForm.repository.$touched && $ctrl.builderForm.repository.$error.$required">\n              <span class="help-block" translate>\n                Git repository is required.\n              </span>\n            </div>\n            <div class="has-warning" ng-if="$ctrl.builderForm.repository.$touched && $ctrl.repository && !$ctrl.repositoryPattern.test($ctrl.repository)">\n              <span class="help-block" translate>\n                This might not be a valid Git URL. Check that it is the correct URL to a remote Git repository.\n              </span>\n            </div>\n          </div>\n        </div>\n\n        \x3c!--\n          Only show the link for existing projects. It will be broken for new\n          projects.  Use class `invisible` when the project list is still loading\n          so the dialog doesn\'t resize.\n        --\x3e\n        <div ng-hide="$ctrl.selectedProject && !$ctrl.selectedProject.metadata.uid"\n             ng-class="{ invisible: !$ctrl.selectedProject || !$ctrl.istag }"\n             class="form-group">\n             <translate>If you have a private Git repository or need to change application defaults, view</translate>\n          <a href="" ng-click="$ctrl.navigateToAdvancedForm()" translate>advanced options</a>.\n        </div>\n      </span>\n    </form>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-details">\n  <div class="order-service-details-top" ng-class="{\'order-service-details-top-icon-top\': $ctrl.imageStream.vendor || $ctrl.documentationUrl || $ctrl.supportUrl}">\n    <div class="service-icon">\n      <span ng-if="!$ctrl.imageStream.imageUrl" class="icon {{$ctrl.imageStream.iconClass}}" aria-hidden="true"></span>\n      <span ng-if="$ctrl.imageStream.imageUrl" class="image"><img ng-src="{{$ctrl.imageStream.imageUrl}}" alt=""></span>\n    </div>\n    <div class="service-title-area">\n      <div class="service-title">\n        {{$ctrl.imageStream.name}}\n      </div>\n      <div ng-if="$ctrl.imageStream.vendor" class="service-vendor">\n        {{$ctrl.imageStream.vendor}}\n      </div>\n      <div class="order-service-tags">\n        <span ng-repeat="tag in $ctrl.istag.annotations.tags.split(\',\')" class="tag">\n          {{tag}}\n        </span>\n      </div>\n      <ul ng-if="$ctrl.documentationUrl || $ctrl.supportUrl" class="list-inline order-service-documentation-url">\n        <li ng-if="$ctrl.documentationUrl">\n          <a ng-href="{{$ctrl.documentationUrl}}" target="_blank" class="learn-more-link"><translate>View Documentation</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n        <li ng-if="$ctrl.supportUrl">\n          <a ng-href="{{$ctrl.supportUrl}}" target="_blank" class="learn-more-link"><translate>Get Support</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="order-service-description-block">\n    <p ng-bind-html="($ctrl.istag.annotations.description | linky : \'_blank\') || \'No description provided.\'" class="description"></p>\n    <p ng-if="$ctrl.istag.annotations.sampleRepo">\n      <translate>Sample Repository:</translate>\n      \x3c!-- TODO: Use Git link filter, needs to be added to origin-web-common --\x3e\n      <span ng-bind-html="$ctrl.istag.annotations.sampleRepo | linky : \'_blank\'"></span>\n    </p>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div ng-if="!$ctrl.success && !$ctrl.error">\n    <div class="results-status">\n      <span class="fa fa-clock-o text-muted" aria-hidden="true"></span>\n      <span class="sr-only" translate>Pending</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.name}}</strong> <translate>is being created in</translate> <strong>{{$ctrl.selectedProject | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.success">\n    <div class="results-status">\n      <span class="pficon pficon-ok" aria-hidden="true"></span>\n      <span class="sr-only" translate>Success</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.name}}</strong> <translate>has been created successfully in</translate> <strong>{{$ctrl.selectedProject | displayName}}</strong>\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.success && $ctrl.binding">\n    <bind-results error="$ctrl.bindError"\n                  binding="$ctrl.binding"\n                  service-to-bind="$ctrl.serviceToBind.metadata.name"\n                  bind-type="application"\n                  application-to-bind="$ctrl.name"\n                  show-pod-presets="$ctrl.showPodPresets">\n    </bind-results>\n  </div>\n  <div ng-if="$ctrl.success">\n    <p ng-if="!$ctrl.serviceToBind || $ctrl.bindComplete">\n      <a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}" ng-click="$ctrl.closePanel()" translate>Continue to the project overview</a> <translate>to check the status of your application as it builds and deploys.</translate>\n    </p>\n  </div>\n  <div class="results-failure" ng-if="$ctrl.error">\n    <div class="results-status">\n      <span class="pficon pficon-error-circle-o text-danger" aria-hidden="true"></span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.name}}</strong> <translate>failed to create in</translate> <strong>{{$ctrl.selectedProject | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n    <div class="sub-title">\n      <span ng-if="$ctrl.error.data.message">\n        {{$ctrl.error.data.message | upperFirst}}\n      </span>\n      <span ng-if="!$ctrl.error.data.message" translate>\n        An error occurred creating the application.\n      </span>\n    </div>\n    \x3c!-- TODO: Improve error message presentation --\x3e\n    <ul ng-if="$ctrl.error.failure.length" class="failure-messages">\n      <li ng-repeat="failure in $ctrl.error.failure">\n        {{failure.data.message}}\n      </li>\n    </ul>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.forms.bindParametersForm" class="config-form">\n      <catalog-parameters\n        ng-if="$ctrl.bindParameterSchema.properties"\n        model="$ctrl.bindParameterData"\n        parameter-schema="$ctrl.bindParameterSchema"\n        parameter-form-definition="$ctrl.bindParameterFormDefinition">\n      </catalog-parameters>\n    </form>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <bind-service-form service-class="$ctrl.serviceClass.resource"\n                     show-pod-presets="$ctrl.showPodPresets"\n                     applications="$ctrl.applications"\n                     form-name="$ctrl.forms.bindForm"\n                     allow-no-binding="true"\n                     project-name="$ctrl.projectDisplayName"\n                     bind-type="$ctrl.bindType"\n                     app-to-bind="$ctrl.appToBind">\n  </bind-service-form>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.forms.orderConfigureForm" class="config-form">\n      <select-project ng-if="!$ctrl.addToProject"\n                      selected-project="$ctrl.selectedProject"\n                      name-taken="$ctrl.projectNameTaken"\n                      show-divider="$ctrl.parameterSchema.properties | size"></select-project>\n      <catalog-parameters\n        ng-if="$ctrl.parameterSchema.properties && !$ctrl.noProjectsCantCreate"\n        model="$ctrl.parameterData"\n        parameter-schema="$ctrl.parameterSchema"\n        parameter-form-definition="$ctrl.parameterFormDefinition">\n      </catalog-parameters>\n    </form>\n    <div ng-if="$ctrl.error" class="has-error">\n      <span class="help-block">{{$ctrl.error}}</span>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-details">\n  <div class="order-service-details-top" ng-class="{\'order-service-details-top-icon-top\': $ctrl.serviceClass.vendor || $ctrl.docUrl || $ctrl.supportUrl}">\n    <div class="service-icon">\n      <span ng-if="!$ctrl.imageUrl" class="icon {{$ctrl.iconClass}}" aria-hidden="true"></span>\n      <span ng-if="$ctrl.imageUrl" class="image"><img ng-src="{{$ctrl.imageUrl}}" alt=""></span>\n    </div>\n    <div class="service-title-area">\n      <div class="service-title">\n        {{$ctrl.serviceName}}\n      </div>\n      <div ng-if="$ctrl.serviceClass.vendor" class="service-vendor">\n        {{$ctrl.serviceClass.vendor}}\n      </div>\n      <div ng-if="$ctrl.serviceClass.tags" class="order-service-tags">\n        <span ng-repeat="tag in $ctrl.serviceClass.tags" class="tag">\n          {{tag}}\n        </span>\n      </div>\n      <ul ng-if="$ctrl.docUrl || $ctrl.supportUrl" class="list-inline order-service-documentation-url">\n        <li ng-if="$ctrl.docUrl" >\n          <a ng-href="{{$ctrl.docUrl}}" target="_blank" class="learn-more-link"><translate>View Documentation</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n        <li ng-if="$ctrl.supportUrl" >\n          <a ng-href="{{$ctrl.supportUrl}}" target="_blank" class="learn-more-link"><translate>Get Support</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="order-service-description-block">\n    <p ng-if="!$ctrl.multipleServicePlans && ($ctrl.selectedPlan.spec.externalMetadata.displayName || $ctrl.selectedPlan.spec.description)">\n      <span ng-if="$ctrl.selectedPlan.spec.externalMetadata.displayName">\n        Plan {{$ctrl.selectedPlan.spec.externalMetadata.displayName}}\n        <span ng-if="$ctrl.selectedPlan.spec.description">&ndash;</span>\n      </span>\n      <span ng-if="$ctrl.selectedPlan.spec.description">{{$ctrl.selectedPlan.spec.description}}</span>\n    </p>\n    <p ng-if="!$ctrl.description && !$ctrl.longDescription" class="description" translate>No description provided.</p>\n    <p ng-if="$ctrl.description" ng-bind-html="($ctrl.description | linky : \'_blank\')" class="description"></p>\n    <p ng-if="$ctrl.longDescription" ng-bind-html="$ctrl.longDescription | linky : \'_blank\'" class="description"></p>\n    <div ng-if="$ctrl.imageDependencies.length">\n      <div class="order-service-subheading" translate>Image Dependencies</div>\n      <div ng-repeat="imageName in $ctrl.imageDependencies" class="order-service-dependent-image">\n        <span class="pficon pficon-image" aria-hidden="true"></span>\n        <span class="sr-only" translate>Image</span>\n        {{imageName}}\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <select-plan available-plans="$ctrl.orderedPlans" selected-plan="$ctrl.selectedPlan" on-plan-select="$ctrl.selectPlan"></select-plan>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div ng-if="!$ctrl.error">\n    <div ng-if="!$ctrl.orderComplete">\n      <div class="results-status">\n        <span class="fa fa-clock-o text-muted" aria-hidden="true"></span>\n        <span class="sr-only" translate>Pending</span>\n        <div class="results-message">\n          <h3>\n            <strong>{{$ctrl.serviceClass.name}}</strong> <translate>is being provisioned in</translate> <strong>{{$ctrl.projectDisplayName}}</strong>.\n          </h3>\n          <p class="results-message-details">\n            <span ng-if="$ctrl.binding" translate>The binding will be created after the service has been provisioned.</span>\n            <translate> This may take several minutes.</translate>\n          </p>\n        </div>\n      </div>\n      <p>\n        <a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}" ng-click="$ctrl.closePanel()" translate>Continue to the project overview</a> <translate>to check the status of your service.</translate>\n      </p>\n    </div>\n  </div>\n  <div class="results-failure" ng-if="$ctrl.error">\n    <div class="results-status">\n      <span class="pficon pficon-error-circle-o text-danger" aria-hidden="true"></span>\n      <span class="sr-only" translate>Error</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.serviceClass.name}}</strong> <translate>failed to provision in</translate> <strong>{{$ctrl.projectDisplayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n    <div class="sub-title">\n      <span ng-if="$ctrl.error.message" class="error-message">{{$ctrl.error.message}}</span>\n      <span ng-if="!$ctrl.error.message" class="error-message" translate>An error occurred provisioning the service.</span>\n    </div>\n  </div>\n  <div ng-if="$ctrl.orderComplete">\n    <div class="results-status">\n      <span class="pficon pficon-ok" aria-hidden="true"></span>\n      <span class="sr-only" translate>Success</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.serviceClass.name}}</strong> <translate>has been added successfully to</translate> <strong>{{$ctrl.projectDisplayName}}</strong>\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.orderComplete && $ctrl.binding">\n    <bind-results error="$ctrl.bindError"\n                  binding="$ctrl.binding"\n                  secret-href="$ctrl.selectedProject | secretUrl : $ctrl.baseProjectUrl : $ctrl.binding.spec.secretName"\n                  service-to-bind="$ctrl.serviceInstance.metadata.name"\n                  bind-type="{{$ctrl.bindType}}"\n                  application-to-bind="$ctrl.appToBind.metadata.name"\n                  show-pod-presets="$ctrl.showPodPresets">\n    </bind-results>\n    <p><a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}" translate>Continue to the project overview</a>.</p>\n  </div>\n  <div ng-if="$ctrl.orderComplete && $ctrl.bindType === \'none\'">\n    <p><a ng-href="{{$ctrl.selectedProject | projectUrl : $ctrl.baseProjectUrl}}"><translate>Continue to the project overview</translate></a><translate>to bind this service to your application. Binding this service creates a secret containing the information necessary for your application to use the service.</translate></p>\n  </div>\n  <div ng-if="$ctrl.serviceClass.resource.externalMetadata.documentationUrl || $ctrl.serviceClass.resource.externalMetadata.supportUrl || (!$ctrl.error && $ctrl.serviceInstance.status.dashboardURL)">\n    <p class="or" ng-if="!$ctrl.error" translate>- or -</p>\n    <p translate>Browse resources for {{$ctrl.serviceClass.name}}:</p>\n    <ul class="list-inline">\n      <li ng-if="$ctrl.serviceClass.resource.externalMetadata.documentationUrl">\n        <a ng-href="{{$ctrl.serviceClass.resource.externalMetadata.documentationUrl}}" target="_blank"><translate>Documentation</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n      </li>\n      <li ng-if="$ctrl.serviceClass.resource.externalMetadata.supportUrl">\n        <a ng-href="{{$ctrl.serviceClass.resource.externalMetadata.supportUrl}}" target="_blank"><translate>Support</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n      </li>\n      <li ng-if="!$ctrl.error && $ctrl.serviceInstance.status.dashboardURL">\n        <a ng-href="{{$ctrl.serviceInstance.status.dashboardURL}}" target="_blank"><translate>Service Dashboard</translate> <i class="fa fa-external-link" aria-hidden="true"></i></a>\n      </li>\n    </ul>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <form name="$ctrl.forms.orderConfigureForm" class="config-form">\n      <catalog-parameters\n        ng-if="$ctrl.parameterSchema.properties"\n        model="$ctrl.parameterData"\n        parameter-schema="$ctrl.parameterSchema"\n        parameter-form-definition="$ctrl.parameterFormDefinition">\n      </catalog-parameters>\n    </form>\n    <div ng-if="$ctrl.error" class="has-error">\n      <span class="help-block">{{$ctrl.error}}</span>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div class="config-top">\n    <select-plan available-plans="$ctrl.orderedPlans" selected-plan="$ctrl.selectedPlan" on-plan-select="$ctrl.selectPlan"></select-plan>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service-config">\n  <div ng-if="!$ctrl.error && !$ctrl.orderComplete">\n    <div class="results-status">\n      <span class="fa fa-clock-o text-muted" aria-hidden="true"></span>\n      <span class="sr-only" translate>Updating</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.displayName}}</strong> <translate>is being updated in</translate> <strong>{{$ctrl.project | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class="results-failure" ng-if="$ctrl.error">\n    <div class="results-status">\n      <span class="pficon pficon-error-circle-o text-danger" aria-hidden="true"></span>\n      <span class="sr-only" translate>Error</span>\n      <div class="results-message">\n        <h3>\n          Failed to update <strong>{{$ctrl.displayName}}</strong> in <strong>{{$ctrl.project | displayName}}</strong>.\n        </h3>\n      </div>\n    </div>\n    <div class="sub-title">\n      <span ng-if="$ctrl.error.message">\n        {{$ctrl.error.message}}\n      </span>\n      <span ng-if="!$ctrl.error.message" translate>\n        An error occurred updating the service.\n      </span>\n    </div>\n  </div>\n  <div ng-if="$ctrl.orderComplete">\n    <div class="results-status">\n      <span class="pficon pficon-ok" aria-hidden="true"></span>\n      <span class="sr-only" translate>Success</span>\n      <div class="results-message">\n        <h3>\n          <strong>{{$ctrl.displayName}}</strong> <translate>has been updated successfully in</translate> <strong>{{$ctrl.project | displayName}}</strong>\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div  class="schema-form-array {{form.htmlClass}}"\n      sf-field-model="sf-new-array"\n      sf-new-array>\n  <label class="control-label" ng-show="showTitle()">{{ form.title }}</label>\n  <ol class="list-group" sf-field-model ui-sortable="form.sortOptions">\n    <li class="list-group-item {{form.fieldHtmlClass}}"\n        schema-form-array-items\n        sf-field-model="ng-repeat"\n        ng-repeat="item in $$value$$ track by $index">\n      <button ng-hide="form.readonly || form.remove === null"\n              ng-click="deleteFromArray($index)"\n              ng-disabled="form.schema.minItems >= modelArray.length"\n              style="position: absolute; z-index: 20; right: 0; top: 12px; font-size: 20px;"\n              type="button" class="close">\n              <span aria-hidden="true">&times;</span><span class="sr-only" translate>Close</span>\n      </button>\n    </li>\n  </ol>\n  <div class="clearfix" style="padding: 15px;" ng-model="modelArray" schema-validate="form">\n    <div class="help-block"\n         ng-show="(hasError() && errorMessage(schemaError())) || form.description"\n         ng-bind-html="(hasError() && errorMessage(schemaError())) || form.description"></div>\n\n    <button ng-hide="form.readonly || form.add === null"\n            ng-click="appendToArray()"\n            ng-disabled="form.schema.maxItems <= modelArray.length"\n            type="button"\n            class="btn {{ form.style.add || \'btn-default\' }} pull-right" translate>\n      {{ form.add || \'Add\'}}\n    </button>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="form-group">\n  <div class="checkbox schema-form-checkbox {{form.htmlClass}}"\n       ng-class="{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}">\n    <label class="{{form.checkboxLabelHtmlClass}}">\n      <input type="checkbox"\n             sf-changed="form"\n             ng-disabled="form.readonly"\n             sf-field-model\n             schema-validate="form"\n             class="{{form.fieldHtmlClass}}"\n             name="{{form.key.slice(-1)[0]}}">\n      <span ng-bind-html="form.title"></span>\n    </label>\n    <div class="help-block {{form.checkboxHelpHtmlClass}}" sf-message="form.description"></div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div sf-field-model="sf-new-array"\n     sf-new-array\n     class="form-group schema-form-checkboxes {{form.htmlClass}}"\n     ng-class="{\'has-error\': form.disableErrorState !== true &&  hasError(), \'has-success\': form.disableSuccessState !== true &&  hasSuccess()}">\n  <label class="control-label {{form.labelHtmlClass}}"\n         sf-field-model\n         schema-validate="form"\n         ng-show="showTitle()">{{form.title}}</label>\n\n  <div class="{{form.fieldWrapperHtmlClass}}">\n    <div class="checkbox" ng-repeat="val in titleMapValues track by $index" >\n      <label>\n        <input type="checkbox"\n               ng-disabled="form.readonly"\n               sf-changed="form"\n               class="{{form.fieldHtmlClass}}"\n               ng-model="titleMapValues[$index]"\n               name="{{form.key.slice(-1)[0]}}">\n        <span ng-bind-html="form.titleMap[$index].name"></span>\n      </label>\n    </div>\n  </div>\n  <div class="help-block" sf-message="form.description"></div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div>\n  <div class="form-group schema-form-{{form.type}} {{form.htmlClass}}"\n       ng-class="{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }">\n    <label class="control-label {{form.labelHtmlClass}}" ng-class="{required: form.required, \'sr-only\': !showTitle()}" for="{{form.key.slice(-1)[0]}}">{{form.title}}</label>\n\n    <div class="{{form.fieldWrapperHtmlClass}}">\n      <input ng-if="!form.fieldAddonLeft && !form.fieldAddonRight"\n             ng-show="form.key"\n             type="{{form.type}}"\n             step="any"\n             sf-changed="form"\n             placeholder="{{form.placeholder}}"\n             class="form-control {{form.fieldHtmlClass}}"\n             id="{{form.key.slice(-1)[0]}}"\n             sf-field-model\n             ng-disabled="form.readonly"\n             ng-required="form.required"\n             schema-validate="form"\n             name="{{form.key.slice(-1)[0]}}"\n             aria-describedby="{{form.key.slice(-1)[0] + \'Status\'}}">\n\n      <div ng-if="form.fieldAddonLeft || form.fieldAddonRight"\n           ng-class="{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}">\n        <span ng-if="form.fieldAddonLeft"\n              class="input-group-addon"\n              ng-bind-html="form.fieldAddonLeft"></span>\n        <input ng-show="form.key"\n               type="{{form.type}}"\n               step="any"\n               sf-changed="form"\n               placeholder="{{form.placeholder}}"\n               class="form-control {{form.fieldHtmlClass}}"\n               id="{{form.key.slice(-1)[0]}}"\n               sf-field-model\n               ng-disabled="form.readonly"\n               schema-validate="form"\n               name="{{form.key.slice(-1)[0]}}"\n               aria-describedby="{{form.key.slice(-1)[0] + \'Status\'}}">\n\n        <span ng-if="form.fieldAddonRight"\n              class="input-group-addon"\n              ng-bind-html="form.fieldAddonRight"></span>\n      </div>\n\n      <span ng-if="form.feedback !== false"\n            class="form-control-feedback"\n            ng-class="evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }"\n            aria-hidden="true"></span>\n\n      <span ng-if="hasError() || hasSuccess()"\n            id="{{form.key.slice(-1)[0] + \'Status\'}}"\n            class="sr-only">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n\n      <div class="help-block" sf-message="form.description"></div>\n    </div>\n  </div>\n  <div ng-if="form.type === \'password\'" class="form-group {{form.htmlClass}}">\n    <label class="control-label {{form.labelHtmlClass}}" ng-class="{required: form.required, \'sr-only\': !showTitle()}" for="retype-{{form.key.slice(-1)[0]}}"><translate>Retype</translate> {{form.title}}</label>\n    <input type="password"\n           id="retype-{{form.key.slice(-1)[0]}}"\n           name="retype-{{form.key.slice(-1)[0]}}"\n           ng-blur="retypePasswordBlurred = true"\n           ng-model="retypePassword"\n           ng-required="ngModel.$modelValue && !form.readonly && !ngModel.$pristine"\n           ng-disabled="form.readonly || ngModel.$pristine"\n           ng-pattern="ngModel.$modelValue | escapeRegExp"\n           class="form-control {{form.fieldHtmlClass}}">\n    <div class="has-error" ng-if="retypePasswordBlurred && !form.readonly && !ngModel.$pristine && (retypePassword || \'\') !== (ngModel.$modelValue || \'\')">\n      <span class="help-block">{{form.title}} <translate>values don\'t match.</translate></span>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="form-group {{form.htmlClass}} schema-form-select"\n     ng-class="{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false}">\n   <label class="control-label {{form.labelHtmlClass}}" ng-class="{ required: form.required }" ng-show="showTitle()">\n    {{form.title}}\n  </label>\n  <div class="{{form.fieldWrapperHtmlClass}}">\n    <ui-select sf-field-model\n            ng-disabled="form.readonly"\n            ng-required="form.required"\n            sf-changed="form"\n            schema-validate="form">\n      <ui-select-match>\n        {{$select.selected.name}}\n      </ui-select-match>\n      <ui-select-choices repeat="item.value as item in form.titleMap | filter : $select.search">\n        <span ng-bind-html="item.name | highlightKeywords : $select.search"></span>\n      </ui-select-choices>\n    </ui-select>\n    <div class="help-block" sf-message="form.description"></div>\n  </div>\n</div>\n';
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(56);
    t.catalogFilter = {
        bindings: {
            config: "<",
            vendors: "<",
            filterOnKeyword: "<",
            applyFilters: "&"
        },
        controller: n.CatalogFilterController,
        template: r(43)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(57);
    t.catalogParameters = {
        bindings: {
            parameterSchema: "<",
            parameterFormDefinition: "<",
            isHorizontal: "<?",
            readOnly: "<?",
            opaqueKeys: "<?",
            hideValues: "<?",
            model: "="
        },
        controller: n.CatalogParametersController,
        template: r(44)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(58);
    t.catalogSearch = {
        bindings: {
            baseProjectUrl: "@",
            catalogItems: "<",
            toggleAtMobile: "<?",
            searchToggleCallback: "<?"
        },
        controller: n.CatalogSearchController,
        template: r(45)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(59);
    t.createFromBuilder = {
        bindings: {
            baseProjectUrl: "@",
            imageStream: "<",
            handleClose: "<",
            addToProject: "<?"
        },
        controller: n.CreateFromBuilderController,
        template: r(46)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(60);
    t.landingPage = {
        bindings: {
            baseProjectUrl: "@",
            onTemplateSelected: "&"
        },
        controller: n.LandingPageController,
        template: r(47),
        transclude: {
            landingsearch: "landingsearch",
            landingheader: "landingheader",
            landingbody: "landingbody",
            landingside: "landingside"
        }
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(61);
    t.orderService = {
        bindings: {
            baseProjectUrl: "@",
            serviceClass: "<",
            servicePlans: "<",
            handleClose: "<",
            addToProject: "<?"
        },
        controller: n.OrderServiceController,
        template: r(48)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(62);
    t.overlayPanel = {
        bindings: {
            showClose: "<",
            showPanel: "<",
            handleClose: "<"
        },
        controller: n.OverlayPanelController,
        template: r(49),
        transclude: !0
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(63);
    t.projectsSummary = {
        bindings: {
            baseProjectUrl: "@",
            catalogItems: "<",
            projectsUrl: "@",
            viewEditMembership: "&",
            startTour: "&"
        },
        controller: n.ProjectsSummaryController,
        template: r(50)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(64);
    t.saasList = {
        bindings: {
            saasTitle: "<?",
            saasOfferings: "<"
        },
        controller: n.SaasListController,
        template: r(51)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(65);
    t.selectPlan = {
        bindings: {
            availablePlans: "<",
            selectedPlan: "<",
            onPlanSelect: "<"
        },
        controller: n.SelectPlanController,
        template: r(52)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(66);
    t.selectProject = {
        bindings: {
            selectedProject: "=?",
            preselectProjectName: "@?",
            nameTaken: "<",
            onProjectSelected: "<?",
            onOpen: "<?",
            availableProjects: "<?",
            showDivider: "<?",
            skipCanAddValidation: "<?",
            hideCreateProject: "<?",
            hideLabel: "<?",
            isRequired: "<?"
        },
        controller: n.SelectProjectController,
        template: r(53)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(67);
    t.servicesView = {
        bindings: {
            sectionTitle: "@?",
            baseProjectUrl: "@",
            catalogItems: "<",
            servicePlans: "<",
            keywordFilter: "<?",
            onDeployImageSelected: "<",
            onFromFileSelected: "<",
            onCreateFromProject: "<"
        },
        controller: n.ServicesViewController,
        template: r(54)
    };
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(68);
    t.updateService = {
        bindings: {
            displayName: "<",
            project: "<",
            baseProjectUrl: "@",
            serviceInstance: "<",
            serviceClass: "<",
            servicePlans: "<",
            handleClose: "<"
        },
        controller: n.UpdateServiceController,
        template: r(55)
    };
}, function(e, t, r) {
    "use strict";
    (function(e) {
        t.__esModule = !0;
        var n = r(0);
        n.set(window, "OPENSHIFT_CONSTANTS.HELP_BASE_URL", "https://docs.openshift.org/latest/");
        var a = {
            new_app: "dev_guide/application_lifecycle/new_app.html",
            application_health: "dev_guide/application_health.html",
            authorization: "architecture/additional_concepts/authorization.html",
            deployments: "dev_guide/deployments/how_deployments_work.html",
            default: "welcome/index.html"
        };
        n.set(window, "OPENSHIFT_CONSTANTS.HELP", a);
        var i = [ {
            id: 1,
            title: "Microservices Application",
            icon: "fa fa-cubes",
            url: "https://www.redhat.com/en/technologies/virtualization",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }, {
            id: 2,
            title: "Mobile Application",
            icon: "fa fa-user",
            url: "https://www.redhat.com/en/technologies/mobile",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }, {
            id: 3,
            title: "Integration Application",
            icon: "fa fa-plug",
            url: "https://www.redhat.com/en/technologies/cloud-computing",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        }, {
            id: 4,
            title: "Business Process Application",
            icon: "fa fa-cubes",
            url: "https://www.redhat.com/en/technologies/management",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.  This is way too long! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
        } ], s = [ {
            id: "languages",
            label: "Languages",
            subCategories: [ {
                id: "java",
                label: "Java",
                tags: [ "java" ],
                icon: "icon-openjdk"
            }, {
                id: "javascript",
                tags: [ "javascript", "nodejs", "js" ],
                label: "JavaScript",
                icon: "icon-js"
            }, {
                id: "dotnet",
                label: ".NET",
                tags: [ "dotnet" ],
                icon: "icon-dotnet"
            }, {
                id: "perl",
                label: "Perl",
                tags: [ "perl" ],
                icon: "icon-perl"
            }, {
                id: "ruby",
                label: "Ruby",
                tags: [ "ruby" ],
                icon: "icon-ruby"
            }, {
                id: "php",
                label: "PHP",
                tags: [ "php" ],
                icon: "icon-php"
            }, {
                id: "python",
                label: "Python",
                tags: [ "python" ],
                icon: "icon-python"
            }, {
                id: "golang",
                label: "Go",
                tags: [ "golang", "go" ],
                icon: "icon-go-gopher"
            } ]
        }, {
            id: "databases",
            label: "Databases",
            subCategories: [ {
                id: "mongodb",
                label: "Mongo",
                tags: [ "mongodb" ],
                icon: "icon-mongodb"
            }, {
                id: "mysql",
                label: "MySQL",
                tags: [ "mysql" ],
                icon: "icon-mysql-database"
            }, {
                id: "postgresql",
                label: "Postgres",
                tags: [ "postgresql" ],
                icon: "icon-postgresql"
            }, {
                id: "mariadb",
                label: "MariaDB",
                tags: [ "mariadb" ],
                icon: "icon-mariadb"
            } ]
        }, {
            id: "middleware",
            label: "Middleware",
            subCategories: [ {
                id: "integration",
                label: "Integration",
                tags: [ "amq", "fuse", "jboss-fuse", "sso", "3scale" ]
            }, {
                id: "process-automation",
                label: "Process Automation",
                tags: [ "decisionserver", "processserver" ]
            }, {
                id: "analytics-data",
                label: "Analytics & Data",
                tags: [ "datagrid", "datavirt" ]
            }, {
                id: "runtimes",
                label: "Runtimes & Frameworks",
                tags: [ "eap", "httpd", "tomcat" ]
            } ]
        }, {
            id: "cicd",
            label: "CI/CD",
            subCategories: [ {
                id: "jenkins",
                label: "Jenkins",
                tags: [ "jenkins" ],
                icon: "icon-jenkins"
            }, {
                id: "pipelines",
                label: "Pipelines",
                tags: [ "pipelines" ],
                icon: "fa fa-clone"
            } ]
        }, {
            id: "virtualization",
            label: "Virtualization",
            subCategories: [ {
                id: "vms",
                label: "Virtual Machines",
                tags: [ "virtualmachine" ]
            } ]
        } ];
        n.set(window, "OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES", s), n.set(window, "OPENSHIFT_CONSTANTS.SAAS_OFFERINGS", i);
        var l = {
            pod_presets: !1
        };
        n.set(window, "OPENSHIFT_CONSTANTS.ENABLE_TECH_PREVIEW_FEATURE", l);
        var o = {
            links: [ {
                title: "Documentation",
                help: ""
            }, {
                title: "Interactive Learning Portal",
                href: "https://learn.openshift.com"
            }, {
                title: "Local Development ",
                href: "https://www.openshift.org/minishift"
            }, {
                title: "YouTube",
                href: "https://www.youtube.com/user/rhopenshift"
            }, {
                title: "Blog",
                href: "https://blog.openshift.com"
            } ]
        };
        n.set(window, "OPENSHIFT_CONSTANTS.CATALOG_HELP_RESOURCES", o);
        var c = function() {
            e("body").find(".services-view-container .nav-tabs a")[0].click();
        }, d = function() {
            e(e("body").find(".services-view-container .nav-tabs li")[1]).find("a")[0].click(), 
            setTimeout(function() {
                e("body").find(".services-sub-category-tab")[1].click();
            });
        }, p = {
            id: "getting-started-tour",
            steps: [ {
                title: "Create Project",
                content: "Projects allow you to organize and manage your content. Projects require a unique name, and optionally can include a display name, and description",
                target: ".catalog-projects-summary-panel .create-button",
                targetScrollElement: ".landing-side-bar",
                placement: "left"
            }, {
                title: "Search Catalog",
                content: "Search by name, description, keyword, or label to quickly locate items in the catalog that you want to add to your project.",
                target: ".landing-search-area .landing-search-form",
                placement: "bottom",
                fixedElement: !0
            }, {
                title: "Browse Catalog",
                content: "If you don’t know exactly what you are looking for, you can browse all available catalog items under the first tab in the catalog.",
                target: ".services-view-container h1",
                placement: "bottom",
                xOffset: 20,
                delay: 300,
                preShow: c
            }, {
                title: "Browse by Category",
                content: "A secondary level of categorization is available to further narrow your search.",
                target: ".services-view-container .nav-tabs li:nth-child(2)",
                placement: "right",
                delay: 200,
                preShow: d
            }, {
                title: "Configure a Resource",
                content: "Clicking on a catalog item will open a panel allowing you to configure and create within a project.",
                target: ".services-sub-category.active .services-items .services-item",
                placement: "right"
            }, {
                title: "Additional Help",
                content: "Additional resources can be found here or you can always access the help icon in the top banner for more information.",
                target: ".resources-panel",
                targetScrollElement: ".landing-side-bar",
                placement: "left"
            } ]
        }, h = {
            landing_page_tour: {
                enabled: !0,
                auto_launch: !1,
                steps: p
            }
        };
        n.set(window, "OPENSHIFT_CONSTANTS.GUIDED_TOURS", h), n.set(window, "OPENSHIFT_CONSTANTS.PUBLISHER_SYNONYMS", {}), 
        n.set(window, "OPENSHIFT_CONSTANTS.CATALOG_SEARCH_FIELDS", [ {
            path: "name",
            weight: 10
        }, {
            path: "tags",
            weight: 5
        }, {
            path: "description",
            weight: 3
        } ]);
    }).call(t, r(2));
}, function(e, t, r) {
    "use strict";
    function n() {
        return a.escapeRegExp;
    }
    t.__esModule = !0;
    var a = r(0);
    t.escapeRegExpFilter = n;
}, function(e, t, r) {
    "use strict";
    function n() {
        return function(e, t) {
            var r, n = t || "project/";
            return r = a.isString(e) ? e : a.get(e, "metadata.name", ""), n.endsWith("/") || (n += "/"), 
            n + r + "/overview";
        };
    }
    t.__esModule = !0;
    var a = r(0);
    t.projectUrlFilter = n;
}, function(e, t, r) {
    "use strict";
    function n() {
        return function(e, t, r) {
            var n, i = t || "project/";
            return n = a.isString(e) ? e : a.get(e, "metadata.name", ""), i.endsWith("/") || (i += "/"), 
            i + n + "/browse/secrets/" + r;
        };
    }
    t.__esModule = !0;
    var a = r(0);
    t.secretUrlFilter = n;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e() {}
        return e.prototype.makeAPIObjects = function(e) {
            var t = this.getPorts(e.imageStreamTag), r = n.head(t), a = [ this.makeImageStream(e), this.makeBuildConfig(e), this.makeDeploymentConfig(e, t) ];
            return r && (a = a.concat(this.makeService(e, r), this.makeRoute(e, r))), a;
        }, e.prototype.getPorts = function(e) {
            var t = e.image, r = n.get(t, "dockerImageMetadata.Config.ExposedPorts") || n.get(t, "dockerImageMetadata.ContainerConfig.ExposedPorts", []);
            return this.parsePortsFromSpec(r);
        }, e.prototype.generateSecret = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return e() + e() + e() + e();
        }, e.prototype.parsePortsFromSpec = function(e) {
            var t = [];
            return n.each(e, function(e, r) {
                var n = r.split("/");
                1 === n.length && n.push("tcp");
                var a = parseInt(n[0], 10);
                isNaN(a) ? this.Logger.warn("Container port " + n[0] + " is not a number") : t.push({
                    containerPort: a,
                    protocol: n[1].toUpperCase()
                });
            }), t;
        }, e.prototype.getAnnotations = function() {
            return {
                "openshift.io/generated-by": "OpenShiftWebConsole"
            };
        }, e.prototype.getLabels = function(e) {
            return {
                app: e.name
            };
        }, e.prototype.getPortName = function(e) {
            return (e.containerPort + "-" + e.protocol).toLowerCase();
        }, e.prototype.makeRoute = function(e, t) {
            return {
                kind: "Route",
                apiVersion: "v1",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    to: {
                        kind: "Service",
                        name: e.name
                    },
                    port: {
                        targetPort: this.getPortName(t)
                    },
                    wildcardPolicy: "None"
                }
            };
        }, e.prototype.makeService = function(e, t) {
            return {
                kind: "Service",
                apiVersion: "v1",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    selector: {
                        deploymentconfig: e.name
                    },
                    ports: [ {
                        port: t.containerPort,
                        targetPort: t.containerPort,
                        protocol: t.protocol,
                        name: this.getPortName(t)
                    } ]
                }
            };
        }, e.prototype.makeDeploymentConfig = function(e, t) {
            return {
                apiVersion: "v1",
                kind: "DeploymentConfig",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    replicas: 1,
                    selector: {
                        deploymentconfig: e.name
                    },
                    triggers: [ {
                        type: "ImageChange",
                        imageChangeParams: {
                            automatic: !0,
                            containerNames: [ e.name ],
                            from: {
                                kind: "ImageStreamTag",
                                name: e.name + ":latest"
                            }
                        }
                    }, {
                        type: "ConfigChange"
                    } ],
                    template: {
                        metadata: {
                            labels: n.assignWith({
                                deploymentconfig: e.name
                            }, this.getLabels(e))
                        },
                        spec: {
                            containers: [ {
                                name: e.name,
                                image: e.name + ":latest",
                                ports: t,
                                env: []
                            } ]
                        }
                    }
                }
            };
        }, e.prototype.makeBuildConfig = function(e) {
            var t = {
                apiVersion: "v1",
                kind: "BuildConfig",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                },
                spec: {
                    output: {
                        to: {
                            kind: "ImageStreamTag",
                            name: e.name + ":latest"
                        }
                    },
                    source: {
                        git: {
                            ref: e.gitRef || "master",
                            uri: e.repository
                        },
                        type: "Git"
                    },
                    strategy: {
                        type: "Source",
                        sourceStrategy: {
                            from: {
                                kind: "ImageStreamTag",
                                name: e.imageStreamTag.metadata.name,
                                namespace: e.imageStreamTag.metadata.namespace
                            },
                            env: []
                        }
                    },
                    triggers: [ {
                        type: "ImageChange",
                        imageChange: {}
                    }, {
                        type: "ConfigChange"
                    }, {
                        generic: {
                            secret: this.generateSecret()
                        },
                        type: "Generic"
                    }, {
                        github: {
                            secret: this.generateSecret()
                        },
                        type: "GitHub"
                    } ]
                }
            };
            return e.contextDir && (t.spec.source.contextDir = e.contextDir), t;
        }, e.prototype.makeImageStream = function(e) {
            return {
                apiVersion: "v1",
                kind: "ImageStream",
                metadata: {
                    name: e.name,
                    labels: this.getLabels(e),
                    annotations: this.getAnnotations()
                }
            };
        }, e;
    }();
    t.BuilderAppService = a;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, n, a, i, s) {
            this.$filter = e, this.$q = t, this.constants = r, this.apiService = n, this.dataService = a, 
            this.logger = i, this.gettextCatalog = s;
        }
        return e.prototype.getCatalogItems = function(e) {
            var t = this, r = this.$q.defer(), n = {}, i = 0, s = 0, l = [], o = function() {
                if (e) {
                    ++i;
                    var a = t.apiService.getPreferredVersion("templates");
                    t.dataService.list(a, {
                        namespace: "openshift"
                    }, null, {
                        partialObjectMetadataList: !0
                    }).then(function(e) {
                        n.templates = e.by("metadata.name");
                    }, function() {
                        l.push("templates");
                    }).finally(function() {
                        t.returnCatalogItems(r, n, ++s, i, l);
                    });
                }
            }, c = this.apiService.getPreferredVersion("clusterserviceclasses");
            this.apiService.apiInfo(c) ? (++i, this.dataService.list(c, {}).then(function(e) {
                n.serviceClasses = a.reject(e.by("metadata.name"), {
                    status: {
                        removedFromBrokerCatalog: !0
                    }
                });
            }, function() {
                l.push("service classes");
            }).finally(function() {
                a.some(n.serviceClasses, {
                    spec: {
                        clusterServiceBrokerName: "template-service-broker"
                    }
                }) || o(), t.returnCatalogItems(r, n, ++s, i, l);
            })) : o(), ++i;
            var d = this.apiService.getPreferredVersion("imagestreams");
            return this.dataService.list(d, {
                namespace: "openshift"
            }).then(function(e) {
                n.imageStreams = e.by("metadata.name");
            }, function() {
                l.push("builder images");
            }).finally(function() {
                t.returnCatalogItems(r, n, ++s, i, l);
            }), r.promise;
        }, e.prototype.getServicePlansForServiceClass = function(e) {
            var t = this.apiService.getPreferredVersion("clusterserviceplans"), r = a.isString(e) ? e : a.get(e, "metadata.name");
            if (r && this.apiService.apiInfo(t)) {
                var n = {
                    http: {
                        params: {
                            fieldSelector: "spec.clusterServiceClassRef.name=" + r
                        }
                    }
                };
                return this.dataService.list(t, {}, a.noop, n);
            }
            return this.$q.when(null);
        }, e.prototype.getServicePlans = function() {
            var e = this.apiService.getPreferredVersion("clusterserviceplans");
            return this.apiService.apiInfo(e) ? this.dataService.list(e, {}) : this.$q.when(null);
        }, e.prototype.groupPlansByServiceClassName = function(e) {
            return a.groupBy(e, "spec.clusterServiceClassRef.name");
        }, e.prototype.getProjectCatalogItems = function(e, t, r, n) {
            var a = this;
            void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === n && (n = !1);
            var i = this.$q.defer(), s = {
                imageStreams: [],
                templates: []
            }, l = 0, o = 0, c = [], d = this.apiService.getPreferredVersion("imagestreams"), p = this.apiService.getPreferredVersion("templates");
            return t && (l++, this.dataService.list(d, {
                namespace: e
            }).then(function(e) {
                s.imageStreams = e.by("metadata.name");
            }, function() {
                c.push("builder images");
            }).finally(function() {
                a.returnCatalogItems(i, s, ++o, l, c);
            })), r && (l++, this.dataService.list(p, {
                namespace: e
            }, null, {
                partialObjectMetadataList: n
            }).then(function(e) {
                s.templates = e.by("metadata.name");
            }, function() {
                c.push("templates");
            }).finally(function() {
                a.returnCatalogItems(i, s, ++o, l, c);
            })), i.promise;
        }, e.prototype.sortCatalogItems = function(e) {
            return e.sort(function(e, t) {
                var r = a.get(e, "name", "").localeCompare(a.get(t, "name", ""), void 0, {
                    sensitivity: "base"
                });
                return 0 === r && (r = a.get(e, "resource.kind", "").localeCompare(a.get(t, "resource.kind", ""), void 0, {
                    sensitivity: "base"
                })), 0 === r && (r = a.get(e, "resource.metadata.name", "").localeCompare(a.get(t, "resource.metadata.name", ""), void 0, {
                    sensitivity: "base"
                })), r;
            });
        }, e.prototype.convertToServiceItems = function(e, t, r) {
            var n = this, i = a.map(e, function(e) {
                return n.getServiceItem(e);
            });
            return i = i.concat(a.map(t, function(e) {
                return n.getImageItem(e);
            })), i = i.concat(a.map(r, function(e) {
                return n.getTemplateItem(e);
            })), i = a.reject(i, "hidden"), i = this.sortCatalogItems(i);
        }, e.prototype.getServiceItem = function(e) {
            return new s(e, this);
        }, e.prototype.getImageItem = function(e) {
            return new l(e, this);
        }, e.prototype.getTemplateItem = function(e) {
            return new o(e, this);
        }, e.prototype.getPublisherSynonym = function(e) {
            return a.get(this.constants, [ "PUBLISHER_SYNONYMS", e ]) || e;
        }, e.prototype.normalizeIconClass = function(e) {
            return this.$filter("normalizeIconClass")(e);
        }, e.prototype.getImageForIconClass = function(e) {
            return this.$filter("imageForIconClass")(e);
        }, e.prototype.categorizeItems = function(e) {
            var t, r, i = this, s = n.copy(this.constants.SERVICE_CATALOG_CATEGORIES), l = {
                Languages: this.gettextCatalog.getString("Languages"),
                Java: this.gettextCatalog.getString("Java"),
                JavaScript: this.gettextCatalog.getString("JavaScript"),
                ".NET": this.gettextCatalog.getString(".NET"),
                Perl: this.gettextCatalog.getString("Perl"),
                Ruby: this.gettextCatalog.getString("Ruby"),
                PHP: this.gettextCatalog.getString("PHP"),
                Python: this.gettextCatalog.getString("Python"),
                Go: this.gettextCatalog.getString("Go"),
                Databases: this.gettextCatalog.getString("Databases"),
                Mongo: this.gettextCatalog.getString("Mongo"),
                MySQL: this.gettextCatalog.getString("MySQL"),
                Postgres: this.gettextCatalog.getString("Postgres"),
                MariaDB: this.gettextCatalog.getString("MariaDB"),
                Middleware: this.gettextCatalog.getString("Middleware"),
                Integration: this.gettextCatalog.getString("Integration"),
                "Process Automation": this.gettextCatalog.getString("Process Automation"),
                "Analytics & Data": this.gettextCatalog.getString("Analytics & Data"),
                "Runtimes & Frameworks": this.gettextCatalog.getString("Runtimes & Frameworks"),
                "CI/CD": this.gettextCatalog.getString("CI/CD"),
                Jenkins: this.gettextCatalog.getString("Jenkins"),
                Pipelines: this.gettextCatalog.getString("Pipelines"),
                Virtualization: this.gettextCatalog.getString("Virtualization"),
                "Virtual Machines": this.gettextCatalog.getString("Virtual Machines")
            };
            a.each(s, function(e) {
                e.label = l[e.label], e.subCategories && a.each(e.subCategories, function(e) {
                    e.label = l[e.label];
                });
            }), this.createAllAndOtherMainCategories(s);
            var o = a.head(s), c = a.get(o, "subCategories[0]"), d = a.last(s), p = a.get(d, "subCategories[0]");
            return a.each(e, function(e) {
                r = !1, a.each(s, function(n) {
                    n.tags ? i.hasMatchingTags(n.tags, e.tags) && (r = i.categorizeItem(e, n, "all"), 
                    t = i.filterSubCatsByTags(n.subCategories, e.tags), a.isEmpty(t) ? i.categorizeItem(e, n, "other") : a.each(t, function(t) {
                        i.categorizeItem(e, n, t);
                    })) : (t = i.filterSubCatsByTags(n.subCategories, e.tags), a.isEmpty(t) || (r = i.categorizeItem(e, n, "all"), 
                    a.each(t, function(t) {
                        i.categorizeItem(e, n, t);
                    })));
                }), r || i.categorizeItem(e, d, p), i.categorizeItem(e, o, c);
            }), s;
        }, e.prototype.getVendors = function(e) {
            var t = {};
            return a.each(e, function(e) {
                e.vendor && (t[e.vendor] = !0);
            }), a.keys(t).sort();
        }, e.prototype.categorizeItem = function(e, t, r) {
            return a.isString(r) && (r = this.getAllOrOtherSubCategory(t, r)), r.items = a.isArray(r.items) ? r.items.concat([ e ]) : [ e ], 
            t.hasItems = r.hasItems = !0;
        }, e.prototype.createAllAndOtherMainCategories = function(e) {
            e.unshift({
                id: "all",
                label: this.gettextCatalog.getString("All"),
                subCategories: [ {
                    id: "all",
                    label: this.gettextCatalog.getString("All")
                } ]
            }), e.push({
                id: "other",
                label: this.gettextCatalog.getString("Other"),
                subCategories: [ {
                    id: "all",
                    label: "all"
                } ]
            });
        }, e.prototype.getAllOrOtherSubCategory = function(e, t) {
            var r = a.find(e.subCategories, {
                id: t
            });
            return r || ("other" === t ? (r = {
                id: "other",
                label: this.gettextCatalog.getString("Other")
            }, e.subCategories.push(r)) : (r = {
                id: "all",
                label: this.gettextCatalog.getString("All")
            }, e.subCategories.unshift(r))), r;
        }, e.prototype.hasMatchingTags = function(e, t) {
            return a.some(e, function(e) {
                var r = e.toLowerCase();
                return a.some(t, function(e) {
                    return r === e.toLowerCase();
                });
            });
        }, e.prototype.filterSubCatsByTags = function(e, t) {
            var r = this;
            return a.filter(e, function(e) {
                return r.hasMatchingTags(e.tags, t);
            });
        }, e.prototype.returnCatalogItems = function(e, t, r, n, i) {
            if (!(r < n)) {
                i = a.size(i) ? this.gettextCatalog.getString("Unable to load all content for the catalog. Error loading ") + this.formatArray(i) : null;
                var s = this.convertToServiceItems(t.serviceClasses, t.imageStreams, t.templates);
                e.resolve([ s, i ]);
            }
        }, e.prototype.formatArray = function(e) {
            var t = "";
            return 1 === e.length ? t = e[0] : 2 === e.length ? t = e.join(" and ") : e.length > 2 && (t = e.slice(0, -1).join(", ") + ", and " + e.slice(-1)), 
            t + ".";
        }, e;
    }();
    i.$inject = [ "$filter", "$q", "Constants", "APIService", "DataService", "Logger", "gettextCatalog" ], 
    t.CatalogService = i;
    var s = function() {
        function e(e, t) {
            this.resource = e, this.catalogSrv = t, this.imageUrl = this.getImage(), this.iconClass = this.getIcon(), 
            this.name = this.getName(), this.description = this.getDescription(), this.longDescription = this.getLongDescription(), 
            this.tags = this.getTags(), this.kind = "ClusterServiceClass", this.vendor = this.getVendor(), 
            this.hidden = a.includes(this.tags, "hidden");
        }
        return e.prototype.getImage = function() {
            var e = a.get(this.resource, "spec.externalMetadata.imageUrl");
            if (e) return e;
            var t = a.get(this.resource, [ "spec", "externalMetadata", "console.openshift.io/iconClass" ]);
            return this.catalogSrv.getImageForIconClass(t);
        }, e.prototype.getIcon = function() {
            var e = a.get(this.resource, [ "spec", "externalMetadata", "console.openshift.io/iconClass" ]) || "fa fa-clone";
            return this.catalogSrv.normalizeIconClass(e);
        }, e.prototype.getName = function() {
            return a.get(this.resource, "spec.externalMetadata.displayName") || a.get(this.resource, "spec.externalName") || this.resource.metadata.name;
        }, e.prototype.getDescription = function() {
            return a.get(this.resource, "spec.description") || "";
        }, e.prototype.getLongDescription = function() {
            return a.get(this.resource, "spec.externalMetadata.longDescription") || "";
        }, e.prototype.getTags = function() {
            return a.get(this.resource, "spec.tags") || [];
        }, e.prototype.getVendor = function() {
            var e = a.get(this.resource, "spec.externalMetadata.providerDisplayName");
            return this.catalogSrv.getPublisherSynonym(e);
        }, e;
    }();
    t.ServiceItem = s;
    var l = function() {
        function e(e, t) {
            this.resource = e, this.catalogSrv = t, this.builderSpecTagName = this.getBuilderSpecTagName(), 
            this.builderSpecTagName ? (this.tags = this.getTags(), this.imageUrl = this.getImage(), 
            this.iconClass = this.getIcon(), this.name = this.getName(), this.description = this.getDescription(), 
            this.longDescription = this.getLongDescription(), this.kind = "ImageStream", this.vendor = this.getVendor(), 
            this.hidden = !1) : this.hidden = !0;
        }
        return e.prototype.getBuilderSpecTagName = function() {
            var e, t = this;
            return this.resource.status ? (this.resource.spec && this.resource.spec.tags && (e = a.find(this.resource.spec.tags, function(e) {
                var r = a.get(e, "annotations.tags");
                if (r && (r = r.split(/\s*,\s*/), a.includes(r, "builder") && !a.includes(r, "hidden"))) return a.some(t.resource.status.tags, function(t) {
                    return t.tag === e.name;
                });
            })), e ? e.name : null) : null;
        }, e.prototype.getTags = function() {
            return this.catalogSrv.$filter("imageStreamTagTags")(this.resource, this.builderSpecTagName);
        }, e.prototype.getImage = function() {
            var e = this.catalogSrv.$filter("imageStreamTagIconClass")(this.resource, this.builderSpecTagName);
            return this.catalogSrv.getImageForIconClass(e);
        }, e.prototype.getIcon = function() {
            var e = this.catalogSrv.$filter("imageStreamTagIconClass")(this.resource, this.builderSpecTagName);
            return this.catalogSrv.normalizeIconClass(e);
        }, e.prototype.getName = function() {
            var e = this.catalogSrv.$filter("displayName")(this.resource);
            return e || (e = this.resource.metadata.name), e;
        }, e.prototype.getVendor = function() {
            var e = a.get(this.resource, [ "metadata", "annotations", "openshift.io/provider-display-name" ], "");
            return this.catalogSrv.getPublisherSynonym(e);
        }, e.prototype.getDescription = function() {
            return null;
        }, e.prototype.getLongDescription = function() {
            return null;
        }, e;
    }();
    t.ImageItem = l;
    var o = function() {
        function e(e, t) {
            this.resource = e, this.catalogSrv = t, this.imageUrl = this.getImage(), this.iconClass = this.getIcon(), 
            this.name = this.getName(), this.description = this.getDescription(), this.longDescription = this.getLongDescription(), 
            this.tags = this.getTags(), this.kind = "Template", this.vendor = this.getVendor(), 
            this.hidden = a.includes(this.tags, "hidden");
        }
        return e.prototype.getImage = function() {
            var e = a.get(this.resource, "metadata.annotations.iconClass");
            return this.catalogSrv.getImageForIconClass(e);
        }, e.prototype.getIcon = function() {
            var e = a.get(this.resource, "metadata.annotations.iconClass", "fa fa-clone");
            return this.catalogSrv.normalizeIconClass(e);
        }, e.prototype.getName = function() {
            return this.catalogSrv.$filter("displayName")(this.resource);
        }, e.prototype.getDescription = function() {
            return a.get(this.resource, "metadata.annotations.description", "");
        }, e.prototype.getLongDescription = function() {
            return a.get(this.resource, [ "metadata", "annotations", "openshift.io/long-description" ], "");
        }, e.prototype.getTags = function() {
            return a.get(this.resource, "metadata.annotations.tags", "").split(/\s*,\s*/);
        }, e.prototype.getVendor = function() {
            var e = a.get(this.resource, [ "metadata", "annotations", "openshift.io/provider-display-name" ]) || "";
            return this.catalogSrv.getPublisherSynonym(e);
        }, e;
    }();
    t.TemplateItem = o;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e(e) {
            this.$rootScope = e;
        }
        return e.prototype.getItems = function() {
            var e = localStorage.getItem("catalog-recently-viewed-services");
            return e ? JSON.parse(e) : [];
        }, e.prototype.addItem = function(e) {
            var t = this.getItems();
            n.remove(t, function(t) {
                return t === e;
            }), t.unshift(e), t = n.take(t, 4), this.setRecentlyViewedItems(t);
        }, e.prototype.setRecentlyViewedItems = function(e) {
            localStorage.setItem("catalog-recently-viewed-services", JSON.stringify(e)), this.$rootScope.$emit("recently-viewed-updated");
        }, e;
    }();
    a.$inject = [ "$rootScope" ], t.RecentlyViewedServiceItems = a;
}, function(e, t) {
    e.exports = '<pf-filter-panel config="$ctrl.config">\n  <div class="filter-panel-container">\n    <input type="text" ng-model="$ctrl.keywordFilter.value"\n           class="keyword-filter form-control"\n           placeholder="{{$ctrl.keywordFilter.placeholder}}"\n           ng-keypress="$ctrl.onKeywordKeyPress($event)"\n           autocorrect="off"\n           autocapitalize="none"\n           spellcheck="false">\n    <div class="category" ng-repeat="filter in $ctrl.filterPanelModel" ng-if="!$first">\n      {{filter.title}}\n      <span\n        class="pficon pficon-info vendor-info-icon"\n        data-toggle="tooltip"\n        aria-hidden="true"\n        data-original-title="{{\'This filter will only apply to items which contain publisher information. Items that do not have a publisher will not be shown in the filter results.\' | translate}">\n      </span>\n      <ul>\n        <li ng-repeat="value in filter.values">\n          <div class="checkbox">\n            <label class="category-option-label">\n              <input type="checkbox"\n                     ng-model="value.selected"\n                     ng-change="$ctrl.filterChanged()">\n              {{value.title}}\n            </label>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</pf-filter-panel>\n';
}, function(e, t) {
    e.exports = '\x3c!-- Use angular-schema-form to show a form based on the parameter JSON schema. --\x3e\n<ng-form class="catalog-parameters" ng-class="{\'readonly\': $ctrl.readOnly}"\n  sf-model="$ctrl.hideValues ? $ctrl.hiddenModel : $ctrl.model"\n  sf-form="$ctrl.parameterForm"\n  sf-schema="$ctrl.readOnly ? $ctrl.readonlyParameterSchema : $ctrl.parameterSchema"\n  sf-options="$ctrl.parameterFormDefaults">\n</ng-form>\n';
}, function(e, t) {
    e.exports = '<div class="catalog-search" ng-class="{\'mobile-shown\': $ctrl.mobileSearchInputShown}">\n  <button\n     ng-if="$ctrl.toggleAtMobile"\n     title="{{\'Catalog Search\' | translate}}"\n     class="catalog-search-toggle visible-xs-inline-block btn btn-link"\n     ng-click="$ctrl.toggleMobileShowSearchInput()">\n    <i class="fa fa-search" aria-hidden="true"></i>\n    <span class="sr-only" translate>Catalog Search</span>\n  </button>\n  <form role="form" class="landing-search-form search-pf has-button" ng-class="{\'hidden-xs\': $ctrl.toggleAtMobile}">\n    <div class="form-group has-clear">\n      <div class="search-pf-input-group">\n        <label for="search-input" class="sr-only" translate>Search Catalog</label>\n        <span class="fa fa-search catalog-search-icon" aria-hidden="true" ng-click="$ctrl.setSearchInputFocus()"></span>\n        <input\n            id="search-input"\n            type="search"\n            autocomplete="off"\n            ng-keypress="$ctrl.onKeyPress($event)"\n            class="form-control catalog-search-input"\n            placeholder="{{\'Search Catalog\' | translate}}"\n            ng-model="$ctrl.searchText"\n            uib-typeahead="item.name for item in $ctrl.search($viewValue)"\n            typeahead-on-select="$ctrl.itemSelected($item)"\n            typeahead-focus-first="false"\n            typeahead-template-url="catalog-search/catalog-search-result.html"\n            autocorrect="off"\n            autocapitalize="off"\n            spellcheck="false">\n        <button\n            type="button"\n            ng-if="$ctrl.searchText"\n            ng-click="$ctrl.searchText = \'\'"\n            class="clear">\n          <span class="sr-only" translate>Clear Search Input</span>\n          <span class="pficon pficon-close" aria-hidden="true"></span>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service">\n  <pf-wizard\n       wizard-title="{{$ctrl.imageStream.name}}"\n       hide-sidebar="true"\n       step-class="order-service-wizard-step"\n       current-step="$ctrl.currentStep"\n       wizard-ready="$ctrl.wizardReady"\n       next-title="$ctrl.nextTitle"\n       on-finish="$ctrl.closePanel()"\n       on-cancel="$ctrl.closePanel()"\n       wizard-done="$ctrl.wizardDone">\n    <pf-wizard-step ng-repeat="step in $ctrl.steps track by $index"\n         step-title="{{step.label}}"\n         wz-disabled="{{step.hidden}}"\n         allow-click-nav="step.allowClickNav"\n         next-enabled="step.valid && !$ctrl.updating"\n         prev-enabled="step.prevEnabled"\n         on-show="step.onShow"\n         step-id="{{step.id}}"\n         step-priority="{{$index}}">\n      <div class="wizard-pf-main-inner-shadow-covers">\n        <div class="order-service-config">\n          <div ng-include="step.view" class="wizard-pf-main-form-contents"></div>\n        </div>\n      </div>\n    </pf-wizard-step>\n  </pf-wizard>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="landing-search-area" ng-transclude="landingsearch"></div>\n<div class="landing">\n  <overlay-panel show-panel="$ctrl.orderingPanelVisible" handle-close="$ctrl.closeOrderingPanel">\n    <order-service\n        ng-if="$ctrl.selectedItem.resource.kind === \'ClusterServiceClass\'"\n        base-project-url="{{$ctrl.baseProjectUrl}}"\n        service-class="$ctrl.selectedItem"\n        service-plans="$ctrl.servicePlansForItem"\n        handle-close="$ctrl.closeOrderingPanel">\n    </order-service>\n    <create-from-builder\n        ng-if="$ctrl.selectedItem.resource.kind === \'ImageStream\'"\n        base-project-url="{{$ctrl.baseProjectUrl}}"\n        image-stream="$ctrl.selectedItem"\n        handle-close="$ctrl.closeOrderingPanel">\n    </create-from-builder>\n  </overlay-panel>\n  <div class="landing-main-area">\n    <div class="landing-header-area" ng-transclude="landingheader"></div>\n    <div class="landing-body-area">\n      <div class="landing-body" ng-transclude="landingbody"></div>\n    </div>\n  </div>\n  <div class="landing-side-bar" ng-transclude="landingside"></div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service">\n  <pf-wizard\n       wizard-title="{{$ctrl.serviceName}}"\n       hide-sidebar="true"\n       step-class="order-service-wizard-step"\n       current-step="$ctrl.currentStep"\n       wizard-ready="$ctrl.wizardReady"\n       next-title="$ctrl.nextTitle"\n       on-finish="$ctrl.closePanel()"\n       on-cancel="$ctrl.closePanel()"\n       wizard-done="$ctrl.wizardDone">\n    <pf-wizard-step ng-repeat="step in $ctrl.steps track by step.id"\n         step-title="{{step.label}}"\n         wz-disabled="{{step.hidden}}"\n         allow-click-nav="step.allowClickNav"\n         next-enabled="step.valid && !$ctrl.updating"\n         prev-enabled="step.prevEnabled"\n         on-show="step.onShow"\n         step-id="{{step.id}}"\n         step-priority="{{$index}}">\n      <div class="wizard-pf-main-inner-shadow-covers">\n        <div ng-include="step.view" class="wizard-pf-main-form-contents"></div>\n      </div>\n    </pf-wizard-step>\n  </pf-wizard>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="catalogs-overlay-modal" role="dialog">\n  <div ng-if="$ctrl.shown" class="modal-backdrop fade in"></div>\n  <div ng-if="$ctrl.shown" class="catalogs-overlay-panel-wrapper">\n    <div class="catalogs-overlay-panel-grow-height">\n      <div class="modal-content catalogs-overlay-panel">\n        <a ng-if="$ctrl.showClose" ng-click="$ctrl.closePanel()">\n          <span class="catalogs-overlay-panel-close pficon pficon-close"></span>\n        </a>\n        <div class="catalogs-overlay-panel-body" ng-transclude>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div ng-if="$ctrl.loading" class="catalog-projects-spinner-container">\n  <div class="spinner spinner-inverse spinner-xl"></div>\n</div>\n<div class="catalog-projects-summary-panel" ng-show="!$ctrl.loading">\n  <button ng-if="$ctrl.canCreate" class="create-button btn btn-primary" ng-click="$ctrl.openNewProjectPanel($event)">\n    <span class="fa fa-plus"></span>\n    <span class="create-button-text" translate>Create Project</span>\n  </button>\n  <origin-modal-popup class="catalog-create-project" modal-title="{{\'Create Project\' | translate}}" shown="$ctrl.newProjectPanelShown" on-close="$ctrl.closeNewProjectPanel" reference-element="$ctrl.modalPopupElement">\n    <create-project is-dialog="true" redirect-action="$ctrl.onNewProject" on-cancel="$ctrl.closeNewProjectPanel"></create-project>\n  </origin-modal-popup>\n  <h2 class="summary-title secondary" ng-if="!$ctrl.projects || !$ctrl.projects.length" translate>Getting Started</h2>\n  <h2 class="summary-title secondary" ng-if="$ctrl.projects && $ctrl.projects.length">\n    <a href="{{$ctrl.projectsUrl}}" translate>My Projects</a>\n  </h2>\n  <div ng-if="!$ctrl.canCreate">\n    <span ng-if="!$ctrl.newProjectMessage">\n      <translate>A cluster admin can create a project for you by running the command:</translate>\n      <div class="code-block">\n        <code class="projects-instructions-link">oc adm <span class="command-arg">new-project</span> &lt;projectname&gt; <span class="command-arg">--admin={{$ctrl.user.metadata.name || \'&lt;YourUsername&gt;\'}}</span></code>\n      </div>\n    </span>\n    <span ng-if="$ctrl.newProjectMessage" ng-bind-html="$ctrl.newProjectMessage | linky : \'_blank\'"></span>\n  </div>\n  <div ng-if="$ctrl.isProjectListIncomplete">\n    <p class="text-muted" translate>\n      The complete list of your projects could not be loaded. Type a project name to go to that project.\n    </p>\n    <form>\n      <div class="form-group">\n        <label for="typed-project-name" translate>Project Name</label>\n        <div class="input-group">\n          <input\n            class="form-control"\n            type="text"\n            id="typed-project-name"\n            required\n            minlength="2"\n            ng-model="$ctrl.typedProjectName"\n            autocorrect="off"\n            autocapitalize="none"\n            spellcheck="false">\n          <span class="input-group-btn">\n            <button class="btn btn-default go-to-project-button"\n                    type="submit"\n                    ng-disabled="!$ctrl.typedProjectName"\n                    ng-click="$ctrl.goToProject($ctrl.typedProjectName)">\n              <i class="fa fa-arrow-right" aria-hidden="true"></i>\n              <span class="sr-only" translate>Go to Project</span>\n            </button>\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div ng-if="$ctrl.projects && $ctrl.projects.length" class="catalog-project-summary-list">\n    <div class="projects-count">\n      <strong>{{$ctrl.projects.length}}</strong>\n      of\n      <strong>{{$ctrl.totalProjects}}</strong>\n      Projects\n      <a href="{{$ctrl.projectsUrl}}" class="projects-view-all" translate>View All</a>\n    </div>\n    <div id="catalog-projects-summary-list">\n      <div ng-repeat="project in $ctrl.projects track by (project | uid)" class="project-tile tile-click">\n        <div class="dropdown  dropdown-kebab-pf" uib-dropdown="">\n          <button class="btn btn-link uib-dropdown-toggle" type="button" id="dropdownKebab" aria-haspopup="true" aria-expanded="true" uib-dropdown-toggle>\n            <span class="fa fa-ellipsis-v"></span>\n          </button>\n          <ul class="uib-dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebab">\n            <li><a href="" ng-click="$ctrl.onViewMemebership(project)" translate>View Membership</a></li>\n            <li><a href="" ng-click="$ctrl.editProject(project)" translate>Edit Project</a></li>\n            <li>\n              <delete-project\n                  label="{{\'Delete Project\' | translate}}"\n                  project="project"\n                  type-name-to-confirm="true"\n                  stay-on-current-page="true"\n                  success="$ctrl.onDeleteProject">\n              </delete-project>\n            </li>\n          </ul>\n        </div>\n        <h3 class="project-tile-header">\n          <a href="{{project | projectUrl : $ctrl.baseProjectUrl}}" class="project-title tile-target">{{project | displayName}}</a>\n          <span ng-if="project.status.phase != \'Active\'"\n            data-toggle="popover"\n            data-trigger="hover"\n            data-content="This project has been marked for deletion."\n            class="pficon pficon-warning-triangle-o"></span>\n        </h3>\n        <p class="project-date">\n          <span ng-if="project | displayName : true"><span class="word-break" ng-bind-html="project.metadata.name"></span> &ndash;</span>\n          <translate>created</translate>\n          <span ng-if="project | annotation : \'openshift.io/requester\'"><translate>by</translate> <span class="word-break" ng-bind-html="project | annotation : \'openshift.io/requester\'"></span></span>\n          <span am-time-ago="project.metadata.creationTimestamp"></span>\n        </p>\n        <div class="project-description" ng-if="project | description">\n          <truncate-long-text content="project | description" use-word-boundary="true" limit="120"></truncate-long-text>\n        </div>\n        <origin-modal-popup class="catalog-edit-project" modal-title="{{\'Edit Project\' | translate}}" shown="$ctrl.editProjectPanelShown && $ctrl.edittingProject === project" on-close="$ctrl.closeEditProjectPanel">\n          <edit-project project="$ctrl.edittingProject" is-dialog="true" redirect-action="$ctrl.onEditProject" on-cancel="$ctrl.closeEditProjectPanel"></edit-project>\n        </origin-modal-popup>\n      </div>\n    </div>\n  </div>\n  <div ng-if="$ctrl.showGetStarted">\n    <div class="getting-started-panel">\n      <h2 class="secondary" ng-if="$ctrl.projects && $ctrl.projects.length > 0" translate>Getting Started</h2>\n      <button ng-if="$ctrl.startTour()" class="getting-started-button btn btn-default hidden-xs" ng-class="{\'with-projects\': $ctrl.projects && $ctrl.projects.length}" ng-click="$ctrl.handleGettingStartedClick()">\n        <span class="fa fa-info-circle fa-2"></span>\n        <span class="getting-started-button-text" translate>Take Home Page Tour</span>\n      </button>\n    </div>\n    <div class="resources-panel">\n      <ul>\n        <li ng-repeat="resource in $ctrl.resourceLinks">\n          <a href="{{resource.href}}" target="_blank" title="{{resource.href}}">{{resource.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div ng-if="$ctrl.recentlyViewedItems.length">\n    <h2 class="secondary" translate>Recently Viewed</h2>\n    <div class="services-view">\n      <a href="" class="services-item" ng-repeat="item in $ctrl.recentlyViewedItems track by (item.resource | uid)"\n           ng-click="$ctrl.orderService(item)">\n        <div ng-if="!item.imageUrl" class="services-item-icon">\n          <span class="{{item.iconClass}}"></span>\n        </div>\n        <div ng-if="item.imageUrl" class="services-item-icon services-item-img">\n          <img ng-src="{{item.imageUrl}}">\n        </div>\n        <div class="services-item-name" title="{{item.name}}" aria-hidden="true">{{item.name}}</div>\n      </a>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<span ng-if="$ctrl.hasSaasOfferings()" class="saas-offerings-container">\n  <h1 ng-if="$ctrl.saasTitle">{{$ctrl.saasTitle}}</h1>\n  <div class="saas-list" ng-class="{\'expanded\': $ctrl.sassListExpanded, \'items-overflow\': $ctrl.itemsOverflow}" items="$ctrl.saasOfferings">\n    <div class="card" ng-repeat="item in $ctrl.saasOfferings">\n      <a ng-href="{{item.url}}" target="_blank" class="card-content">\n        <div class="card-icon">\n          <img ng-if="item.image" ng-src="{{item.image}}" alt="">\n          <span ng-if="!item.image" class="icon {{item.icon}}" aria-hidden="true"></span>\n        </div>\n        <div class="card-title">{{item.title}}</div>\n        <truncate-long-text\n                class="card-description hidden-xs"\n                content="item.description"\n                limit="120"\n                use-word-boundary="true">\n        </truncate-long-text>\n      </a>\n    </div>\n  </div>\n  <div ng-if="$ctrl.itemsOverflow" class="sass-list-expander-container">\n    <a href="" class="sass-list-expander" ng-class="{\'expanded\': $ctrl.sassListExpanded}" ng-click="$ctrl.toggleListExpand()">\n      <span translate>Show</span> <span class="more" translate>More</span><span class="less" translate>Less</span>\n    </a>\n  </div>\n</span>\n';
}, function(e, t) {
    e.exports = '<div class="select-plans">\n  <h3 ng-if="$ctrl.availablePlans.length > 1" translate>Select a Plan</h3>\n  <div ng-if="$ctrl.availablePlans.length" ng-repeat="plan in $ctrl.availablePlans track by plan.metadata.uid" ng-class="{\'radio\': $ctrl.availablePlans.length > 1}">\n    <label>\n      <input ng-if="$ctrl.availablePlans.length > 1"\n             type="radio"\n             ng-model="$ctrl.planIndex"\n             ng-change="$ctrl.onPlanSelect(plan)"\n             value="{{$index}}">\n      <span class="plan-name">{{plan.spec.externalMetadata.displayName || plan.spec.externalName}}</span>\n      <div class="plan-description" ng-if="plan.spec.description" ng-bind-html="plan.spec.description | linkify : \'_blank\'"></div>\n    </label>\n  </div>\n  <div ng-if="!$ctrl.availablePlans.length" class="blank-slate-pf">\n    <div class="blank-slate-pf-icon">\n      <span class="pficon pficon-info"></span>\n    </div>\n    <h1 translate>\n      No Plans Available\n    </h1>\n    <p translate>\n      There are no plans currently available for this service.\n    </p>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<span ng-if="$ctrl.noProjectsCantCreate" class="no-projects-cant-create">\n  <pf-empty-state config="$ctrl.noProjectsConfig"></pf-empty-state>\n  <p ng-if="!$ctrl.noProjectsCantCreateMessage">\n    <translate>A cluster admin can create a project for you by running the command:</translate>\n    <div class="code-block">\n      <code>oc adm <span class="command-arg">new-project</span> &lt;projectname&gt; <span class="command-arg">--admin={{$ctrl.user.metadata.name || \'&lt;YourUsername&gt;\'}}</span></code>\n    </div>\n  </p>\n  <div ng-if="$ctrl.noProjectsCantCreateMessage" ng-bind-html="$ctrl.noProjectsCantCreateMessage | linky : \'_blank\'"></div>\n</span>\n\n\x3c!-- Use `ng-show` instead of `ng-if` so that the form exists and the `canI` works when projects load. --\x3e\n<ng-form name="$ctrl.forms.selectProjectForm" ng-show="$ctrl.numProjectChoices >= 1">\n  <div class="form-group" ng-class="{\'has-error\' : $ctrl.forms.selectProjectForm.selectProject.$error.cannotAddToProject ||\n                                                   ($ctrl.forms.selectProjectForm.selectProject.$touched &&\n                                                    $ctrl.forms.selectProjectForm.selectProject.$invalid)}">\n    <h3 ng-if="$ctrl.canOnlyCreateProject()" translate>Create Project</h3>\n    <label ng-if="!$ctrl.canOnlyCreateProject() && !$ctrl.hideLabel" class="control-label required" translate>Add to Project</label>\n    <ui-select\n        ng-if="!$ctrl.canOnlyCreateProject()"\n        ng-disabled="$ctrl.numProjectChoices === 1"\n        name="selectProject"\n        ng-model="$ctrl.selectedProject"\n        ng-change="$ctrl.onSelectProjectChange()"\n        ng-required="$ctrl.isRequired"\n        search-enabled="$ctrl.searchEnabled"\n        uis-open-close="$ctrl.onOpenClose(isOpen)">\n      <ui-select-match placeholder="{{$ctrl.placeholder}}">\n        {{$select.selected | displayName}}\n      </ui-select-match>\n      \x3c!-- refresh-delay must be set using ng-attr-refresh-delay to work as a dynamic value --\x3e\n      <ui-select-choices\n          repeat="project in $ctrl.getProjectChoices() track by (project | uid)"\n          refresh="$ctrl.refreshChoices($select.search)"\n          ng-attr-refresh-delay="{{$ctrl.refreshDelay}}"\n          group-by="$ctrl.groupChoicesBy">\n        <span ng-bind-html="project | displayName | highlightKeywords : $select.search"></span>\n        <span ng-if="project | displayName : true" class="small text-muted">\n          <span ng-if="project.metadata.name">&ndash;</span>\n          <span ng-bind-html="project.metadata.name | highlightKeywords : $select.search"></span>\n        </span>\n      </ui-select-choices>\n    </ui-select>\n    <div ng-if="$ctrl.forms.selectProjectForm.selectProject.$error.cannotAddToProject">\n        <span class="help-block" translate>\n          You are not authorized to add to this project.\n        </span>\n    </div>\n    <div class="has-error" ng-if="$ctrl.forms.selectProjectForm.selectProject.$error.required &&\n                                  $ctrl.forms.selectProjectForm.selectProject.$touched">\n      <span class="help-block">\n        <span translate>Please select</span> <span ng-if="$ctrl.canCreate && !$ctrl.hideCreateProject"><span translate>or create</span></span> <span translate>a project.</span>\n      </span>\n    </div>\n  </div>\n</ng-form>\n\n<ng-form name="$ctrl.forms.createProjectForm"\n    ng-if="$ctrl.isNewProject()">\n  <div class="form-group">\n    <label for="name" class="control-label required" translate>Project Name</label>\n    <div ng-class="{\'has-error\': ($ctrl.forms.createProjectForm.name.$error.pattern && $ctrl.forms.createProjectForm.name.$touched) ||\n                                 $ctrl.nameTaken || $ctrl.forms.createProjectForm.name.$error.oscUnique}">\n      <input class="form-control"\n          name="name"\n          id="name"\n          placeholder="my-project"\n          type="text"\n          required\n          take-focus\n          minlength="2"\n          maxlength="63"\n          pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?"\n          aria-describedby="nameHelp"\n          ng-model="$ctrl.selectedProject.metadata.name"\n          osc-unique="$ctrl.existingProjectNames"\n          ng-model-options="{ updateOn: \'default blur\' }"\n          ng-change="$ctrl.onNewProjectNameChange()"\n          autocorrect="off"\n          autocapitalize="off"\n          spellcheck="false">\n    </div>\n    <div class="help-block" translate>A unique name for the project.</div>\n    <div class="has-error" ng-if="$ctrl.forms.createProjectForm.name.$error.minlength && $ctrl.forms.createProjectForm.name.$touched">\n      <span id="nameHelp" class="help-block" translate>\n        Name must have at least two characters.\n      </span>\n    </div>\n    <div class="has-error" ng-if="$ctrl.forms.createProjectForm.name.$error.pattern && $ctrl.forms.createProjectForm.name.$touched">\n      <span id="nameHelp" class="help-block" translate>\n        Project names may only contain lower-case letters, numbers, and dashes.\n        They may not start or end with a dash.\n      </span>\n    </div>\n    <div class="has-error" ng-if="$ctrl.nameTaken || $ctrl.forms.createProjectForm.name.$error.oscUnique">\n      <span class="help-block" translate>\n        This name is already in use. Please choose a different name.\n      </span>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <label for="displayName" class="control-label" translate>Project Display Name</label>\n    <input class="form-control"\n      name="displayName"\n      id="displayName"\n      placeholder="My Project"\n      type="text"\n      ng-model="$ctrl.selectedProject.metadata.annotations[\'new-display-name\']">\n  </div>\n\n  <div class="form-group">\n    <label for="description" class="control-label" translate>Project Description</label>\n    <textarea class="form-control"\n      name="description"\n      id="description"\n      placeholder="A short description."\n      ng-model="$ctrl.selectedProject.metadata.annotations[\'openshift.io/description\']"></textarea>\n  </div>\n</ng-form>\n<div ng-if="!$ctrl.noProjectsCantCreate && $ctrl.showDivider" class="select-project-divider"></div>\n\n';
}, function(e, t) {
    e.exports = '<div class="services-view" ng-style="$ctrl.viewStyle">\n  <div ng-if="!$ctrl.loaded" class="spinner-container">\n    <div class="spinner spinner-xl"></div>\n  </div>\n  <div ng-if="$ctrl.loaded" class="services-view-container mobile-{{$ctrl.mobileView}}-view">\n    <div class="add-methods">\n      <h1>{{$ctrl.sectionTitle}}</h1>\n      <div ng-if="$ctrl.onDeployImageSelected || $ctrl.onFromFileSelected || $ctrl.onCreateFromProject">\n        <ul class="add-other hidden-md hidden-lg">\n          <li uib-dropdown="" class="dropdown">\n            <a uib-dropdown-toggle="" class="dropdown-toggle" id="add-methods-dropdown" href="" aria-haspopup="true" aria-expanded="false">\n              <translate>Custom Add</translate>\n              <span class="caret" aria-hidden="true"></span>\n            </a>\n            <ul class="uib-dropdown-menu dropdown-menu pull-right" aria-labelledby="add-methods-dropdown">\n              \x3c!-- note these are duplicated below --\x3e\n              <li ng-if="$ctrl.onDeployImageSelected">\n                <a href="" ng-click="$ctrl.onDeployImageSelected()" translate>Deploy Image</a>\n              </li>\n              <li ng-if="$ctrl.onFromFileSelected">\n                <a href="" ng-click="$ctrl.onFromFileSelected()" translate>Import YAML / JSON</a>\n              </li>\n              <li ng-if="$ctrl.onCreateFromProject">\n                <a href="" ng-click="$ctrl.onCreateFromProject()" translate>Select from Project</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n        <ul class="add-other hidden-xs hidden-sm">\n          \x3c!-- note these are duplicated above --\x3e\n          <li ng-if="$ctrl.onDeployImageSelected">\n            <a href="" ng-click="$ctrl.onDeployImageSelected()" translate>Deploy Image</a>\n          </li>\n          <li ng-if="$ctrl.onFromFileSelected">\n            <a href="" ng-click="$ctrl.onFromFileSelected()" translate>Import YAML / JSON</a>\n          </li>\n          <li ng-if="$ctrl.onCreateFromProject">\n            <a href="" ng-click="$ctrl.onCreateFromProject()" translate>Select from Project</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <ul class="nav nav-tabs nav-tabs-pf services-categories">\n      <li ng-repeat="category in $ctrl.categories"\n          ng-if="category.hasItems"\n          ng-class="{ active: $ctrl.currentFilter === category.id }">\n        <a href="" id="{{\'category-\'+category.id}}" class="services-category-heading" ng-click="$ctrl.selectCategory(category.id)">{{category.label}}</a>\n        <a ng-click="$ctrl.mobileView = \'categories\'" class="services-back-link" href="" translate>Back</a>\n      </li>\n    </ul>\n\n    <div class="services-inner-container">\n      \x3c!-- Do not show sub-category items for \'All\' or \'Other\' main categories --\x3e\n      <ul class="services-sub-categories"\n          ng-if="$ctrl.currentFilter !== \'other\' && $ctrl.currentFilter !== \'all\'">\n        <li ng-repeat="subCategory in $ctrl.subCategories track by subCategory.id"\n             ng-if="subCategory.hasItems"\n             ng-attr-id="{{subCategory.id}}"\n             class="services-sub-category"\n             ng-class="{ active: $ctrl.currentSubFilter === subCategory.id }">\n          <a href="" id="{{\'services-sub-category-\'+subCategory.id}}"\n             class="services-sub-category-tab" ng-click="$ctrl.selectSubCategory(subCategory.id)">\n            <div class="services-sub-category-tab-image" ng-if="imageUrl = (subCategory.imageUrl || (subCategory.icon | imageForIconClass))">\n              <img ng-src="{{imageUrl}}" alt="">\n            </div>\n            <div class="services-sub-category-tab-icon {{subCategory.icon | normalizeIconClass}}"\n                ng-if="subCategory.icon && !subCategory.imageUrl && !(subCategory.icon | imageForIconClass)"></div>\n            <div class="services-sub-category-tab-name">{{subCategory.label}}</div>\n          </a>\n         <a ng-click="$ctrl.mobileView = \'subcategories\'" class="services-back-link" href="" translate>Back</a>\n          <div ng-if="$ctrl.currentSubFilter === subCategory.id" class="services-items">\n            <catalog-filter class="services-items-filter"\n                            config="$ctrl.filterConfig"\n                            vendors="$ctrl.vendors"\n                            filter-on-keyword="$ctrl.keywordFilterValue"\n                            apply-filters="$ctrl.applyFilters($event)">\n            </catalog-filter>\n            <div class="pf-empty-state" ng-if="$ctrl.filterConfig.appliedFilters.length > 0 && $ctrl.filterConfig.resultsCount === 0">\n              <pf-empty-state config="$ctrl.emptyFilterConfig"></pf-empty-state>\n            </div>\n            <a href="" class="services-item" ng-repeat="item in $ctrl.filteredItems track by item.resource.metadata.uid" ng-click="$ctrl.serviceViewItemClicked(item)">\n              <div ng-if="!item.imageUrl" class="services-item-icon">\n                <span class="{{item.iconClass}}"></span>\n              </div>\n              <div ng-if="item.imageUrl" class="services-item-icon">\n                <img ng-src="{{item.imageUrl}}" alt="">\n              </div>\n              <div class="services-item-name" title="{{item.name}}">\n                {{item.name}}\n              </div>\n            </a>\n          </div>\n        </li>\n      </ul>\n\n      \x3c!-- Show catalog item for \'All\' and \'Other\' main categories --\x3e\n      <div ng-if="$ctrl.currentFilter === \'other\' || $ctrl.currentFilter === \'all\'" class="services-no-sub-categories">\n        <div class="services-items" ng-class="{\'no-items-available\': $ctrl.isEmpty}">\n          <div ng-if="$ctrl.isEmpty">\n            <div class="pf-empty-state">\n              <pf-empty-state config="$ctrl.noItemsConfig"></pf-empty-state>\n            </div>\n          </div>\n          <catalog-filter ng-if="!$ctrl.isEmpty"\n                          class="services-items-filter"\n                          config="$ctrl.filterConfig"\n                          vendors="$ctrl.vendors"\n                          filter-on-keyword="$ctrl.keywordFilterValue"\n                          apply-filters="$ctrl.applyFilters($event)">\n          </catalog-filter>\n          <div class="pf-empty-state" ng-if="$ctrl.filterConfig.appliedFilters.length > 0 && $ctrl.filterConfig.resultsCount === 0">\n            <pf-empty-state config="$ctrl.emptyFilterConfig"></pf-empty-state>\n          </div>\n          <a href="" class="services-item" ng-repeat="item in $ctrl.filteredItems track by item.resource.metadata.uid" ng-click="$ctrl.serviceViewItemClicked(item)">\n            <div ng-if="!item.imageUrl" class="services-item-icon">\n              <span class="{{item.iconClass}}"></span>\n            </div>\n            <div ng-if="item.imageUrl" class="services-item-icon">\n              <img ng-src="{{item.imageUrl}}" alt="">\n            </div>\n            <div class="services-item-name" title="{{item.name}}">\n              {{item.name}}\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
}, function(e, t) {
    e.exports = '<div class="order-service">\n  <pf-wizard wizard-title="{{$ctrl.displayName}}"\n             hide-sidebar="true"\n             step-class="order-service-wizard-step"\n             wizard-ready="$ctrl.wizardReady"\n             next-title="$ctrl.nextTitle"\n             on-finish="$ctrl.closePanel()"\n             on-cancel="$ctrl.closePanel()"\n             wizard-done="$ctrl.wizardDone"\n             hide-back-button="{{$ctrl.hideBackButton}}">\n    <pf-wizard-step ng-repeat="step in $ctrl.steps track by step.id"\n                    step-title="{{step.label}}"\n                    wz-disabled="{{step.hidden}}"\n                    allow-click-nav="step.allowClickNav"\n                    next-enabled="step.valid && !$ctrl.updating"\n                    prev-enabled="step.prevEnabled"\n                    on-show="step.onShow"\n                    step-id="{{step.id}}"\n                    step-priority="{{$index}}">\n      <div class="wizard-pf-main-inner-shadow-covers">\n        <div ng-include="step.view" class="wizard-pf-main-form-contents"></div>\n      </div>\n    </pf-wizard-step>\n  </pf-wizard>\n</div>\n';
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, i, s) {
            var l = this;
            this.ctrl = this, this.onKeywordKeyPress = function(e) {
                if (13 === e.which && l.ctrl.keywordFilter.value.length > 0) {
                    var t = l.ctrl.keywordFilter.value;
                    l.keywordFilterExists(t) ? l.highlightKeywordFilter(t) : (l.ctrl.keywordFilter.values.push(t), 
                    l.constructFiltersFromModel()), delete l.ctrl.keywordFilter.value;
                }
            }, this.filterChanged = function() {
                l.constructFiltersFromModel();
            }, this.keywordFilterExists = function(e) {
                return a.some(l.ctrl.keywordFilter.values, function(t) {
                    return e.toLowerCase() === t.toLowerCase();
                });
            }, this.highlightKeywordFilter = function(e) {
                var t = document.querySelectorAll("pf-filter-panel-results .label-info"), r = a.find(t, function(t) {
                    return t.innerText.trim() === "Keyword:" + e.toLowerCase();
                });
                r && (l.$timeout(function() {
                    r.classList.add("flash-filter-tag");
                }, 100), l.$timeout(function() {
                    r.classList.remove("flash-filter-tag");
                }, 300));
            }, this.onFilterChange = function(e, t, r) {
                n.isDefined(t) && n.isDefined(r) ? l.updateFilterPanelModel(t, r) : l.resetFilterPanelModel(), 
                l.constructFiltersFromModel();
            }, this.$scope = e, this.$timeout = t, this.Catalog = r, this.gettext = i, this.gettextCatalog = s, 
            this.ctrl.filterPanelModel = [], this.ctrl.keywordFilter = {
                id: "keyword",
                title: this.gettextCatalog.getString("Keyword"),
                placeholder: this.gettextCatalog.getString("Filter by Keyword"),
                filterType: "text",
                values: []
            }, this.ctrl.filterPanelModel.push(this.ctrl.keywordFilter);
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.filterOnKeyword && (this.ctrl.keywordFilter.values = [ this.ctrl.filterOnKeyword ], 
            this.constructFiltersFromModel()), this.ctrl.config.onFilterChange = this.onFilterChange, 
            this.removeClearFilterListener = this.$scope.$on("clear-filters", function() {
                e.resetFilterPanelModel(), e.constructFiltersFromModel();
            });
        }, e.prototype.$onChanges = function(e) {
            e.filterOnKeyword && e.filterOnKeyword.currentValue && this.ctrl.keywordFilter && (this.resetFilterPanelModel(), 
            this.ctrl.keywordFilter.values = [ this.ctrl.filterOnKeyword ], this.constructFiltersFromModel()), 
            e.vendors && e.vendors.currentValue && (a.isEmpty(this.ctrl.vendors) || (this.ctrl.VendorFilter ? this.ctrl.VendorFilter.values = this.getVendorValues(this.ctrl.vendors) : (this.ctrl.VendorFilter = {
                id: "vendors",
                title: this.gettextCatalog.getString("Publisher"),
                filterType: "checkbox",
                values: this.getVendorValues(this.ctrl.vendors)
            }, this.ctrl.filterPanelModel.push(this.ctrl.VendorFilter))));
        }, e.prototype.$onDestroy = function() {
            this.removeClearFilterListener();
        }, e.prototype.getVendorValues = function(e) {
            return a.map(e, function(e) {
                return {
                    id: e,
                    title: e,
                    value: e,
                    selected: !1
                };
            });
        }, e.prototype.createAppliedFilter = function(e, t) {
            return {
                id: e.id,
                title: e.title,
                filterType: e.filterType,
                values: t
            };
        }, e.prototype.constructFiltersFromModel = function() {
            var e = this, t = [];
            a.each(this.ctrl.filterPanelModel, function(r) {
                if (!a.isEmpty(r.values)) if ("checkbox" === r.filterType) {
                    var n = [];
                    a.each(r.values, function(e) {
                        e.selected && n.push(e.value);
                    }), a.isEmpty(n) || t.push(e.createAppliedFilter(r, n));
                } else a.each(r.values, function(n) {
                    t.push(e.createAppliedFilter(r, [ n ]));
                });
            }), this.ctrl.config.appliedFilters = t, this.ctrl.applyFilters && this.ctrl.applyFilters({
                $event: {
                    appliedFilters: this.ctrl.config.appliedFilters
                }
            });
        }, e.prototype.updateFilterPanelModel = function(e, t) {
            var r = a.find(this.ctrl.filterPanelModel, {
                id: e
            });
            switch (r.filterType) {
              case "text":
                a.remove(r.values, function(e) {
                    return e === t;
                });
                break;

              case "checkbox":
                a.find(r.values, {
                    value: t
                }).selected = !1;
            }
        }, e.prototype.resetFilterPanelModel = function() {
            a.each(this.ctrl.filterPanelModel, function(e) {
                if (!a.isEmpty(e.values)) switch (e.filterType) {
                  case "text":
                    e.values = [];
                    break;

                  case "checkbox":
                    a.each(e.values, function(e) {
                        e.selected = !1;
                    });
                }
            });
        }, e;
    }();
    i.$inject = [ "$scope", "$timeout", "Catalog", "gettext", "gettextCatalog" ], t.CatalogFilterController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = r(1), i = function() {
        function e() {
            this.ctrl = this;
        }
        return e.prototype.$onInit = function() {
            this.setupFormDefaults(), this.ctrl.parameterForm = this.cloneParameterForm(this.ctrl.parameterFormDefinition) || [ "*" ], 
            this.updateHiddenModel(), this.setupReadonlySchema();
        }, e.prototype.$onChanges = function(e) {
            (e.parameterFormDefinition && !e.parameterFormDefinition.isFirstChange() || e.hideValues && !e.hideValues.isFirstChange() || e.readOnly && !e.readOnly.isFirstChange()) && (this.ctrl.parameterForm = this.cloneParameterForm(this.ctrl.parameterFormDefinition) || [ "*" ]), 
            e.isHorizontal && !e.isHorizontal.isFirstChange() && this.setupFormDefaults(), (e.hideValues && !e.hideValues.isFirstChange() || e.model && !e.model.isFirstChange()) && this.updateHiddenModel(), 
            (e.parameterSchema && !e.parameterSchema.isFirstChange() || e.readOnly && !e.readOnly.isFirstChange()) && this.setupReadonlySchema();
        }, e.prototype.setupFormDefaults = function() {
            this.ctrl.parameterFormDefaults = {
                formDefaults: {
                    disableSuccessState: !0,
                    feedback: !1
                },
                pristine: {
                    errors: !1,
                    success: !0
                }
            }, this.ctrl.isHorizontal && a.extend(this.ctrl.parameterFormDefaults.formDefaults, {
                htmlClass: "row",
                labelHtmlClass: "col-sm-4",
                fieldWrapperHtmlClass: "col-sm-8",
                checkboxLabelHtmlClass: "col-sm-8 col-sm-offset-4",
                checkboxHelpHtmlClass: "col-sm-8 col-sm-offset-4"
            });
        }, e.prototype.setupReadonlySchema = function() {
            var e = this;
            this.ctrl.parameterSchema && this.ctrl.readOnly && (this.ctrl.readonlyParameterSchema = a.copy(this.ctrl.parameterSchema), 
            n.set(this.ctrl.readonlyParameterSchema, "readonly", !0), n.set(this.ctrl.readonlyParameterSchema, "required", []), 
            n.each(n.get(this.ctrl.readonlyParameterSchema, "properties"), function(t) {
                e.updateReadonlyProperty(t);
            }));
        }, e.prototype.updateReadonlyProperty = function(e) {
            var t = this;
            e.title && (e.title = e.title + ":"), "object" === e.type ? n.each(n.get(e, "properties"), function(e) {
                t.updateReadonlyProperty(e);
            }) : "array" === e.type ? this.updateReadonlyProperty(n.get(e, "items")) : (e.description = void 0, 
            e.enum = void 0, "array" !== e.type && "number" !== e.type && "integer" !== e.type && "boolean" !== e.type || (e.type = "string"));
        }, e.prototype.updateValueToHidden = function(e) {
            var t = this;
            return n.isObject(e) || n.isArray(e) ? n.mapValues(e, function(e, r) {
                return n.includes(t.ctrl.opaqueKeys, r) ? e : t.updateValueToHidden(e);
            }) : n.isArray(e) ? n.map(e, function(e) {
                return t.updateValueToHidden(e);
            }) : "*****";
        }, e.prototype.updateHiddenModel = function() {
            var e = this;
            this.ctrl.hideValues && (this.ctrl.hiddenModel = n.mapValues(this.ctrl.model, function(t, r) {
                return n.includes(e.ctrl.opaqueKeys, r) ? t : e.updateValueToHidden(t);
            }));
        }, e.prototype.cloneParameterForm = function(t) {
            if (n.isString(t)) return !0 === this.ctrl.readOnly ? {
                key: t,
                type: this.ctrl.hideValues ? "password" : "string"
            } : t;
            if (n.isArray(t)) return n.map(t, n.bind(this.cloneParameterForm, this));
            if (n.isObject(t)) {
                var r = {};
                if (t.key && (r.key = t.key), e.ALLOWED_FORM_INPUT_TYPES[t.type] && (r.type = t.type), 
                "fieldset" === r.type && n.isArray(t.items)) t.title && (r.title = t.title), r.items = this.cloneParameterForm(t.items); else {
                    if (!r.key && !r.type) return null;
                    this.ctrl.readOnly && (r.type = this.ctrl.hideValues ? "password" : "string");
                }
                return r;
            }
        }, e;
    }();
    i.ALLOWED_FORM_INPUT_TYPES = {
        fieldset: !0,
        text: !0,
        textarea: !0,
        password: !0,
        checkbox: !0,
        select: !0
    }, t.CatalogParametersController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = r(2), i = function() {
        function e(e, t, r, n, a, i, s, l) {
            var o = this;
            this.ctrl = this, this.loaded = !1, this.maxResultsToShow = 5, this.onKeyPress = function(e) {
                13 === e.which && o.ctrl.searchText && (o.$rootScope.$emit("filter-catalog-items", {
                    searchText: o.ctrl.searchText
                }), o.ctrl.searchText = "");
            }, this.$rootScope = e, this.$scope = t, this.$timeout = r, this.$q = n, this.Catalog = a, 
            this.Constants = i, this.KeywordService = s, this.gettextCatalog = l;
        }
        return e.prototype.$onInit = function() {
            this.ctrl.searchText = "";
        }, e.prototype.$onChanges = function(e) {
            if (e.catalogItems && this.ctrl.catalogItems && (this.loaded = !0, this.searchDeferred)) {
                var t = this.weightedSearch(this.ctrl.searchText);
                this.searchDeferred.resolve(t), this.searchDeferred = null;
            }
        }, e.prototype.itemSelected = function(e) {
            "viewAll" === e.id ? this.$rootScope.$emit("filter-catalog-items", {
                searchText: this.ctrl.searchText
            }) : "viewNone" !== e.id && this.$scope.$emit("open-overlay-panel", e), this.ctrl.searchText = "", 
            this.ctrl.mobileSearchInputShown = !1, n.isFunction(this.ctrl.searchToggleCallback) && this.ctrl.searchToggleCallback(this.ctrl.mobileSearchInputShown);
        }, e.prototype.search = function(e) {
            return e ? this.loaded ? this.weightedSearch(e) : (this.searchDeferred = this.$q.defer(), 
            this.searchDeferred.promise) : [];
        }, e.prototype.toggleMobileShowSearchInput = function() {
            this.ctrl.mobileSearchInputShown = !this.ctrl.mobileSearchInputShown, this.ctrl.searchText = "", 
            n.isFunction(this.ctrl.searchToggleCallback) && this.ctrl.searchToggleCallback(this.ctrl.mobileSearchInputShown), 
            this.ctrl.mobileSearchInputShown && this.setSearchInputFocus(0);
        }, e.prototype.setSearchInputFocus = function(e) {
            var t = this, r = a(".catalog-search-input");
            r.is(":visible") ? r.focus() : e < 5 && this.$timeout(function() {
                t.setSearchInputFocus(e + 1);
            }, 100);
        }, e.prototype.weightedSearch = function(e) {
            var t = this.KeywordService.generateKeywords(e), r = this.KeywordService.weightedSearch(this.ctrl.catalogItems, this.Constants.CATALOG_SEARCH_FIELDS, t), a = n.size(r), i = n.take(r, this.maxResultsToShow);
            return 0 === a ? i.push({
                id: "viewNone",
                text: this.gettextCatalog.getString("No results found for Keyword: ") + e,
                name: e
            }) : 1 === a ? i.push({
                id: "viewAll",
                text: this.gettextCatalog.getString("View the result for Keyword: ") + e,
                name: e
            }) : a > 1 && i.push({
                id: "viewAll",
                text: this.gettextCatalog.getString("View all ") + a + this.gettextCatalog.getString(" results for Keyword: ") + e,
                name: e
            }), i;
        }, e;
    }();
    i.$inject = [ "$rootScope", "$scope", "$timeout", "$q", "Catalog", "Constants", "KeywordService", "gettextCatalog" ], 
    t.CatalogSearchController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = r(69), s = function() {
        function e(e, t, r, n, i, s, l, o, c, d, p, h, g) {
            var m = this;
            this.ctrl = this, this.watches = [], this.clearValidityWatcher = function() {
                m.validityWatcher && (m.validityWatcher(), m.validityWatcher = void 0);
            }, this.showInfo = function() {
                m.clearValidityWatcher(), m.ctrl.nextTitle = m.gettextCatalog.getString("Next >");
            }, this.showConfig = function() {
                m.ctrl.currentStep = m.gettextCatalog.getString("Configuration"), m.clearValidityWatcher(), 
                m.ctrl.nextTitle = m.bindStep.hidden ? m.gettextCatalog.getString("Create") : m.gettextCatalog.getString("Next >"), 
                m.reviewStep.allowed = m.bindStep.hidden && m.configStep.valid, m.validityWatcher = m.$scope.$watch("$ctrl.builderForm.$valid", function(e, t) {
                    m.configStep.valid = e, !0 === m.ctrl.noProjectsCantCreate && (m.configStep.valid = !1);
                });
            }, this.showBind = function() {
                m.clearValidityWatcher(), m.ctrl.nextTitle = m.gettextCatalog.getString("Create"), 
                m.reviewStep.allowed = !0;
            }, this.showResults = function() {
                m.clearValidityWatcher(), m.ctrl.nextTitle = m.gettextCatalog.getString("Close"), 
                m.ctrl.wizardDone = !0, m.ctrl.currentStep = m.gettextCatalog.getString("Results"), 
                m.createApp();
            }, this.onProjectUpdate = function() {
                if (!m.instancesSupported || m.isNewProject()) m.ctrl.serviceInstances = [], m.updateBindability(); else if (m.ctrl.showPodPresets) {
                    m.ctrl.updating = !0;
                    var e = m.APIService.getPreferredVersion("serviceinstances");
                    m.DataService.list(e, {
                        namespace: m.ctrl.selectedProject.metadata.name
                    }, null, {
                        errorNotification: !1
                    }).then(function(e) {
                        m.ctrl.serviceInstances = a.filter(a.toArray(e.by("metadata.name")), m.isServiceBindable), 
                        m.sortServiceInstances(), m.ctrl.updating = !1, m.updateBindability();
                    }, function(e) {
                        m.Logger.warn(m.gettextCatalog.getString("Failed to list instances in namespace ") + m.ctrl.selectedProject.metadata.name, e), 
                        m.ctrl.updating = !1, m.ctrl.serviceInstances = [], m.updateBindability();
                    });
                }
            }, this.isServiceBindable = function(e) {
                var t, r = m.BindingService.getServiceClassForInstance(e, m.ctrl.serviceClasses), n = a.get(e, "spec.clusterServicePlanRef.name");
                return n && (t = m.ctrl.servicePlans[n]), m.BindingService.isServiceBindable(e, r, t);
            }, this.$scope = n, this.$filter = e, this.$location = t, this.$q = r, this.BuilderAppService = l, 
            this.ProjectsService = p, this.DataService = c, this.APIService = i, this.BindingService = s, 
            this.Logger = d, this.VersionsService = h, this.ctrl.serviceToBind = null, this.ctrl.showPodPresets = a.get(o, [ "ENABLE_TECH_PREVIEW_FEATURE", "pod_presets" ], !1), 
            this.gitRef = "", this.contextDir = "", this.gettextCatalog = g;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.selectedProject = this.ctrl.addToProject, this.infoStep = {
                label: this.gettextCatalog.getString("Information"),
                id: "info",
                view: "create-from-builder/create-from-builder-info.html",
                valid: !0,
                allowed: !0,
                hidden: !1,
                allowClickNav: !0,
                onShow: this.showInfo
            }, this.configStep = {
                label: this.gettextCatalog.getString("Configuration"),
                id: "configure",
                view: "create-from-builder/create-from-builder-configure.html",
                valid: !1,
                allowed: !0,
                hidden: !1,
                allowClickNav: !0,
                onShow: this.showConfig
            }, this.bindStep = {
                label: this.gettextCatalog.getString("Binding"),
                id: "bind",
                view: "create-from-builder/create-from-builder-bind.html",
                valid: !0,
                allowed: !1,
                hidden: !this.ctrl.showPodPresets,
                allowClickNav: !0,
                onShow: this.showBind
            }, this.reviewStep = {
                label: this.gettextCatalog.getString("Results"),
                id: "results",
                view: "create-from-builder/create-from-builder-results.html",
                valid: !0,
                allowed: !1,
                hidden: !1,
                prevEnabled: !1,
                allowClickNav: !1,
                onShow: this.showResults
            }, this.ctrl.steps = [ this.infoStep, this.configStep, this.bindStep, this.reviewStep ], 
            this.ctrl.currentStep = this.gettextCatalog.getString("Information"), this.ctrl.versions = this.getVersions(), 
            this.ctrl.istag = a.head(this.ctrl.versions), this.ctrl.nameMaxLength = 24, this.ctrl.namePattern = /^[a-z]([-a-z0-9]*[a-z0-9])?$/, 
            this.ctrl.repositoryPattern = /^[a-z][a-z0-9+.-@]*:(\/\/)?[0-9a-z_-]+/, this.ctrl.wizardDone = !1, 
            this.ctrl.serviceToBind = null, this.ctrl.updating = !1, this.ctrl.noProjectsCantCreate = !1;
            var t = this.$filter("annotation");
            this.ctrl.documentationUrl = t(this.ctrl.imageStream.resource, "openshift.io/documentation-url"), 
            this.ctrl.supportUrl = t(this.ctrl.imageStream.resource, "openshift.io/support-url"), 
            this.ctrl.serviceInstances = [], this.selectedProjectWatch = this.$scope.$watch(function() {
                return e.ctrl.selectedProject;
            }, this.onProjectUpdate), this.$scope.$watch("$ctrl.selectedProject.metadata.name", function() {
                e.ctrl.projectNameTaken = !1;
            }), this.ctrl.showPodPresets ? (this.getServiceClassesAndPlans(), this.instancesSupported = !!this.APIService.apiInfo(this.APIService.getPreferredVersion("serviceinstances"))) : this.instancesSupported = !1, 
            this.noProjectsCantCreateWatch = this.$scope.$on("no-projects-cannot-create", function() {
                e.ctrl.noProjectsCantCreate = !0;
            });
        }, e.prototype.closePanel = function() {
            n.isFunction(this.ctrl.handleClose) && this.ctrl.handleClose();
        }, e.prototype.$onDestroy = function() {
            this.DataService.unwatchAll(this.watches), this.selectedProjectWatch(), this.noProjectsCantCreateWatch(), 
            this.clearValidityWatcher();
        }, e.prototype.fillSampleRepo = function() {
            if (this.ctrl.repository = a.get(this, "ctrl.istag.annotations.sampleRepo"), this.gitRef = a.get(this, "ctrl.istag.annotations.sampleRef", ""), 
            this.contextDir = a.get(this, "ctrl.istag.annotations.sampleContextDir", ""), !this.ctrl.name && this.ctrl.repository) {
                var e = this.ctrl.repository.substr(this.ctrl.repository.lastIndexOf("/") + 1);
                e = e.replace(/\.git$/, ""), e = a.truncate(e, this.ctrl.nameMaxLength), e = a.kebabCase(e), 
                this.ctrl.namePattern.test(e) && (this.ctrl.name = e);
            }
        }, e.prototype.onRepositoryChanged = function() {
            this.gitRef = "", this.contextDir = "";
        }, e.prototype.navigateToAdvancedForm = function() {
            var e = "project/{project}/create/fromimage?imageStream={imageStream}&imageTag={imageTag}&namespace={namespace}&displayName={displayName}&name={name}&sourceURI={sourceURI}&sourceRef={sourceRef}&contextDir={contextDir}&advanced=true", t = i.expand(e, {
                project: this.ctrl.selectedProject.metadata.name,
                imageStream: this.ctrl.imageStream.resource.metadata.name,
                imageTag: this.ctrl.istag.name,
                namespace: this.ctrl.imageStream.resource.metadata.namespace,
                displayName: this.ctrl.imageStream.name,
                name: this.ctrl.name || "",
                sourceURI: this.ctrl.repository || "",
                sourceRef: this.gitRef || "",
                contextDir: this.contextDir || ""
            }).toString();
            this.$location.url(t), this.closePanel();
        }, e.prototype.getTagReference = function(e) {
            if (!e.from || "ImageStreamTag" !== e.from.kind) return null;
            var t = a.get(this, "ctrl.imageStream.resource.metadata.namespace");
            if (e.from.namespace && e.from.namespace !== t) return null;
            if (-1 === e.from.name.indexOf(":")) return e.from.name;
            var r = a.get(this, "ctrl.imageStream.resource.metadata.name"), n = e.from.name.split(":");
            return n[0] !== r ? null : n[1];
        }, e.prototype.getVersions = function() {
            var e = this;
            this.ctrl.referencedBy = {};
            var t = {}, r = {}, n = a.get(this, "ctrl.imageStream.resource.spec.tags", []);
            a.each(n, function(n) {
                var i = e.getTagReference(n);
                if (i) return t[n.name] = i, e.ctrl.referencedBy[i] = e.ctrl.referencedBy[i] || [], 
                void e.ctrl.referencedBy[i].push(n.name);
                var s = a.get(n, "annotations.tags", ""), l = s.split(/\s*,\s*/);
                a.includes(l, "builder") && !a.includes(l, "hidden") && (r[n.name] = n);
            });
            var i = [], s = a.get(this, "ctrl.imageStream.resource.status.tags", []);
            return a.each(s, function(e) {
                var t = r[e.tag];
                t && i.push(t);
            }), i.sort(function(t, r) {
                return e.VersionsService.rcompare(t.name, r.name);
            }), i;
        }, e.prototype.getImageStreamTag = function() {
            var e = this.APIService.getPreferredVersion("imagestreamtags"), t = this.ctrl.imageStream.resource.metadata.name + ":" + this.ctrl.istag.name, r = this.ctrl.imageStream.resource.metadata.namespace;
            return this.DataService.get(e, t, {
                namespace: r
            });
        }, e.prototype.sortServiceInstances = function() {
            if (this.ctrl.serviceInstances) {
                var e = a.toArray(this.ctrl.serviceInstances), t = this.$filter("statusCondition");
                e.sort(function(e, r) {
                    var n = "True" === a.get(t(e, "Ready"), "status");
                    if (n === ("True" === a.get(t(r, "Ready"), "status"))) {
                        var i = a.get(e, "metadata.creationTimestamp");
                        return a.get(r, "metadata.creationTimestamp").localeCompare(i);
                    }
                    return n ? -1 : 1;
                }), this.ctrl.serviceInstances = e;
            }
        }, e.prototype.updateBindability = function() {
            !this.ctrl.wizardDone && this.ctrl.showPodPresets && (this.bindStep.hidden = a.size(this.ctrl.serviceInstances) < 1, 
            this.ctrl.serviceToBind = null, this.bindStep.hidden ? this.ctrl.nextTitle = this.gettextCatalog.getString("Create") : this.ctrl.nextTitle = this.gettextCatalog.getString("Next >"));
        }, e.prototype.isNewProject = function() {
            return !a.has(this.ctrl.selectedProject, "metadata.uid");
        }, e.prototype.createApp = function() {
            var e = this;
            this.createProjectIfNecessary().then(function(t) {
                e.ctrl.selectedProject = t, e.getImageStreamTag().then(function(t) {
                    var r = e.BuilderAppService.makeAPIObjects({
                        name: e.ctrl.name,
                        repository: e.ctrl.repository,
                        gitRef: e.gitRef,
                        contextDir: e.contextDir,
                        namespace: e.ctrl.selectedProject.metadata.name,
                        imageStreamTag: t
                    });
                    e.createAPIObjects(r), e.ctrl.serviceToBind && e.bindService(a.find(r, {
                        kind: "DeploymentConfig"
                    }));
                }, function(t) {
                    e.ctrl.error = t;
                });
            }, function(t) {
                "AlreadyExists" === t.data.reason ? (e.ctrl.projectNameTaken = !0, e.ctrl.wizardDone = !1, 
                e.ctrl.currentStep = e.gettextCatalog.getString("Configuration")) : e.ctrl.error = t;
            });
        }, e.prototype.createProjectIfNecessary = function() {
            if (!this.isNewProject()) return this.$q.when(this.ctrl.selectedProject);
            var e = this.ctrl.selectedProject.metadata.name, t = this.ctrl.selectedProject.metadata.annotations["new-display-name"], r = this.$filter("description")(this.ctrl.selectedProject);
            return this.ProjectsService.create(e, t, r);
        }, e.prototype.createAPIObjects = function(e) {
            var t = this;
            this.DataService.batch(e, {
                namespace: this.ctrl.selectedProject.metadata.name
            }).then(function(e) {
                e.failure.length ? t.ctrl.error = e : t.ctrl.success = !0;
            }, function(e) {
                t.ctrl.error = e;
            });
        }, e.prototype.bindService = function(e) {
            var t = this;
            this.ctrl.bindError = !1;
            var r = {
                namespace: a.get(this.ctrl.selectedProject, "metadata.name")
            }, n = this.BindingService.getServiceClassForInstance(this.ctrl.serviceToBind, this.ctrl.serviceClasses);
            this.BindingService.bindService(this.ctrl.serviceToBind, e, n).then(function(e) {
                t.ctrl.binding = e, t.watches.push(t.DataService.watchObject(t.BindingService.bindingResource, a.get(t.ctrl.binding, "metadata.name"), r, function(e) {
                    t.ctrl.binding = e;
                }));
            }, function(e) {
                t.ctrl.bindComplete = !0, t.ctrl.bindError = e;
            });
        }, e.prototype.getServiceClassesAndPlans = function() {
            var e = this, t = this.APIService.getPreferredVersion("clusterserviceclasses"), r = this.APIService.getPreferredVersion("clusterserviceplans");
            if (this.APIService.apiInfo(t) && this.APIService.apiInfo(r)) {
                this.ctrl.updating = !0;
                var n = [];
                n.push(this.DataService.list(t, {}).then(function(t) {
                    e.ctrl.serviceClasses = t.by("metadata.name");
                })), n.push(this.DataService.list(r, {}).then(function(t) {
                    e.ctrl.servicePlans = t.by("metadata.name");
                })), this.$q.all(n).finally(function() {
                    e.ctrl.updating = !1;
                });
            }
        }, e;
    }();
    s.$inject = [ "$filter", "$location", "$q", "$scope", "APIService", "BindingService", "BuilderAppService", "Constants", "DataService", "Logger", "ProjectsService", "VersionsService", "gettextCatalog" ], 
    t.CreateFromBuilderController = s;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e(e, t, r) {
            var n = this;
            this.ctrl = this, this.closeOrderingPanel = function() {
                n.RecentlyViewed.addItem(n.ctrl.selectedItem.resource.metadata.uid), n.ctrl.orderingPanelVisible = !1;
            }, this.$scope = e, this.Catalog = t, this.RecentlyViewed = r, this.plansByServiceClassName = {};
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.searchText = "", this.ctrl.orderingPanelVisible = !1, this.Catalog.getServicePlans().then(function(t) {
                t && (t = n.reject(t.by("metadata.name"), {
                    status: {
                        removedFromBrokerCatalog: !0
                    }
                }), e.plansByServiceClassName = e.Catalog.groupPlansByServiceClassName(t));
            }), this.$scope.$on("open-overlay-panel", function(t, r) {
                if (e.ctrl.servicePlansForItem = null, "Template" === r.kind) {
                    var n = e.ctrl.onTemplateSelected();
                    return void (n && n(r.resource));
                }
                "ClusterServiceClass" === r.kind && (e.ctrl.servicePlansForItem = e.plansByServiceClassName[r.resource.metadata.name]), 
                e.ctrl.selectedItem = r, e.ctrl.orderingPanelVisible = !0;
            });
        }, e.prototype.$onDestroy = function() {
            this.ctrl.orderingPanelVisible && this.closeOrderingPanel();
        }, e;
    }();
    a.$inject = [ "$scope", "Catalog", "RecentlyViewedServiceItems" ], t.LandingPageController = a;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, n, i, s, l, o, c, d, p) {
            var h = this;
            this.ctrl = this, this.watches = [], this.clearValidityWatcher = function() {
                h.validityWatcher && (h.validityWatcher(), h.validityWatcher = void 0), h.ctrl.reviewStep.allowed = !1;
            }, this.showInfo = function() {
                h.clearValidityWatcher(), h.ctrl.configPageShown = !1, h.ctrl.nextTitle = h.gettextCatalog.getString("Next >");
            }, this.showPlan = function() {
                h.clearValidityWatcher(), h.ctrl.configPageShown = !1, h.ctrl.nextTitle = h.gettextCatalog.getString("Next >");
            }, this.showConfig = function() {
                h.ctrl.currentStep = h.gettextCatalog.getString("Configuration"), h.clearValidityWatcher(), 
                h.ctrl.configPageShown = !0, h.reviewStep.allowed = h.bindStep.hidden && h.configStep.valid, 
                h.updateBindability(), h.validityWatcher = h.$scope.$watch("$ctrl.forms.orderConfigureForm.$valid", function(e, t) {
                    h.configStep.valid = e && !h.ctrl.noProjectsCantCreate, h.bindStep.allowed = h.configStep.valid, 
                    h.reviewStep.allowed = h.bindStep.hidden && h.configStep.valid;
                });
            }, this.showBind = function() {
                h.clearValidityWatcher(), h.ctrl.configPageShown = !1, h.ctrl.nextTitle = h.bindParametersStep.hidden ? h.gettextCatalog.getString("Create") : h.gettextCatalog.getString("Next >"), 
                h.reviewStep.allowed = h.bindParametersStep.hidden && h.bindStep.valid, h.isNewProject() ? h.ctrl.projectDisplayName = h.ctrl.selectedProject.metadata.annotations["new-display-name"] || h.ctrl.selectedProject.metadata.name : h.ctrl.projectDisplayName = h.$filter("displayName")(h.ctrl.selectedProject), 
                h.validityWatcher = h.$scope.$watch("$ctrl.forms.bindForm.$valid", function(e, t) {
                    h.bindStep.valid = e, h.bindParametersStep.allowed = e, h.reviewStep.allowed = h.bindParametersStep.hidden && h.bindStep.valid;
                });
            }, this.showBindParameters = function() {
                h.clearValidityWatcher(), h.ctrl.nextTitle = h.gettextCatalog.getString("Create"), 
                h.validityWatcher = h.$scope.$watch("$ctrl.forms.bindParametersForm.$valid", function(e, t) {
                    h.bindParametersStep.valid = e, h.reviewStep.allowed = h.bindParametersStep.valid;
                });
            }, this.showResults = function() {
                h.ctrl.currentStep = h.gettextCatalog.getString("Results"), h.clearValidityWatcher(), 
                h.ctrl.configPageShown = !1, h.ctrl.nextTitle = h.gettextCatalog.getString("Close"), 
                h.ctrl.wizardDone = !0, h.provisionService();
            }, this.selectPlan = function(e) {
                h.ctrl.selectedPlan = e, h.ctrl.parameterData = {}, h.updateParameterSchema(e), 
                h.updateBindability();
            }, this.provisionService = function() {
                if (h.ctrl.inProgress = !0, h.ctrl.orderComplete = !1, h.ctrl.error = !1, h.isNewProject()) {
                    var e = h.ctrl.selectedProject.metadata.name, t = h.ctrl.selectedProject.metadata.annotations["new-display-name"], r = h.$filter("description")(h.ctrl.selectedProject);
                    h.ProjectsService.create(e, t, r).then(function(e) {
                        h.ctrl.selectedProject = e, h.ctrl.projectDisplayName = h.$filter("displayName")(e), 
                        h.createService();
                    }, function(e) {
                        "AlreadyExists" === e.data.reason ? (h.ctrl.projectNameTaken = !0, h.ctrl.wizardDone = !1, 
                        h.ctrl.currentStep = h.gettextCatalog.getString("Configuration")) : h.ctrl.error = e;
                    });
                } else h.ctrl.projectDisplayName = h.$filter("displayName")(h.ctrl.selectedProject), 
                h.createService();
            }, this.onProjectUpdate = function() {
                if (h.isNewProject()) h.ctrl.applications = [], h.ctrl.updating = !1, h.updateBindability(); else if (h.ctrl.showPodPresets) {
                    h.ctrl.updating = !0, h.ctrl.bindType = "none", h.ctrl.serviceToBind = h.ctrl.serviceClass;
                    var e = {
                        namespace: a.get(h.ctrl.selectedProject, "metadata.name")
                    };
                    h.ApplicationsService.getApplications(e).then(function(e) {
                        h.ctrl.applications = e, h.ctrl.updating = !1, h.updateBindability();
                    });
                }
            }, this.watchResults = function(e, t, r) {
                h.watches.push(h.DataService.watchObject(e, t.metadata.name, r, function(e, t) {
                    var r = a.get(e, "status.conditions"), n = a.find(r, {
                        type: "Ready"
                    });
                    h.ctrl.orderComplete = n && "True" === n.status, h.ctrl.error = a.find(r, {
                        type: "Failed",
                        status: "True"
                    });
                }));
            }, this.$scope = e, this.$filter = t, this.APIService = r, this.ApplicationsService = n, 
            this.ProjectsService = i, this.DataService = s, this.BindingService = l, this.Logger = o, 
            this.ctrl.showPodPresets = a.get(c, [ "ENABLE_TECH_PREVIEW_FEATURE", "pod_presets" ], !1), 
            this.DNS1123_SUBDOMAIN_VALIDATION = d, this.gettextCatalog = p;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.selectedProject = this.ctrl.addToProject, this.ctrl.iconClass = this.ctrl.serviceClass.iconClass || "fa fa-clone", 
            this.ctrl.imageUrl = this.ctrl.serviceClass.imageUrl, this.ctrl.serviceName = this.ctrl.serviceClass.name, 
            this.ctrl.description = this.ctrl.serviceClass.description, this.ctrl.longDescription = this.ctrl.serviceClass.longDescription, 
            this.ctrl.docUrl = a.get(this.ctrl.serviceClass, "resource.spec.externalMetadata.documentationUrl"), 
            this.ctrl.supportUrl = a.get(this.ctrl.serviceClass, "resource.spec.externalMetadata.supportUrl");
            var t = a.get(this.ctrl.serviceClass, "resource.spec.externalMetadata.dependencies");
            a.isArray(t) && (this.ctrl.imageDependencies = a.uniq(a.filter(t, a.isString))), 
            this.ctrl.noProjectsCantCreate = !1, this.ctrl.applications = [], this.ctrl.parameterData = {}, 
            this.ctrl.bindParameterData = {}, this.ctrl.forms = {}, this.ctrl.appToBind = null, 
            this.ctrl.configStepValid = !0, this.ctrl.multipleServicePlans = a.size(this.ctrl.servicePlans) > 1, 
            this.infoStep = {
                id: "info",
                label: this.gettextCatalog.getString("Information"),
                view: "order-service/order-service-info.html",
                valid: !0,
                allowed: !0,
                hidden: !1,
                allowClickNav: !0,
                onShow: this.showInfo
            }, this.planStep = {
                id: "plans",
                label: this.gettextCatalog.getString("Plan"),
                view: "order-service/order-service-plans.html",
                hidden: !this.ctrl.multipleServicePlans,
                allowed: !0,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showPlan
            }, this.configStep = {
                label: this.gettextCatalog.getString("Configuration"),
                id: "configure",
                view: "order-service/order-service-configure.html",
                hidden: !1,
                allowed: !0,
                valid: !1,
                allowClickNav: !0,
                onShow: this.showConfig
            }, this.bindStep = {
                label: this.gettextCatalog.getString("Binding"),
                id: "bind",
                view: "order-service/order-service-bind.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showBind
            }, this.bindParametersStep = {
                label: this.gettextCatalog.getString("Parameters"),
                id: "bind-parameters",
                view: "order-service/order-service-bind-parameters.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showBindParameters
            }, this.reviewStep = {
                label: this.gettextCatalog.getString("Results"),
                id: "results",
                view: "order-service/order-service-results.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                prevEnabled: !1,
                allowClickNav: !1,
                onShow: this.showResults
            }, this.ctrl.steps = [ this.infoStep, this.planStep, this.configStep, this.bindStep, this.bindParametersStep, this.reviewStep ], 
            this.ctrl.currentStep = this.gettextCatalog.getString("Information"), this.ctrl.projectNameTaken = !1, 
            this.ctrl.wizardDone = !1, this.ctrl.bindType = "none", this.ctrl.orderedPlans = a.orderBy(this.ctrl.servicePlans, [ "spec.externalMetadata.displayName", "metadata.name" ]), 
            this.selectPlan(a.head(this.ctrl.orderedPlans)), this.ctrl.addToProject || (this.ctrl.updating = !0, 
            this.selectedProjectWatch = this.$scope.$watch(function() {
                return e.ctrl.selectedProject;
            }, this.onProjectUpdate)), this.$scope.$watch("$ctrl.selectedProject.metadata.name", function() {
                e.ctrl.projectNameTaken = !1;
            }), this.bindTypeWatch = this.$scope.$watch("$ctrl.bindType", function(t, r) {
                t !== r && (e.updateBindParametersStepVisibility(), e.ctrl.nextTitle = e.bindParametersStep.hidden ? e.gettextCatalog.getString("Create") : e.gettextCatalog.getString("Next >"), 
                e.reviewStep.allowed = e.bindParametersStep.hidden && e.bindStep.valid);
            }), this.noProjectsCantCreateWatch = this.$scope.$on("no-projects-cannot-create", function() {
                e.ctrl.noProjectsCantCreate = !0;
            });
        }, e.prototype.createService = function() {
            var e = this, t = this.getParameters(), r = a.isEmpty(t) ? null : this.BindingService.generateSecretName(this.getClusterServiceClassExternalName() + "-parameters"), n = this.makeServiceInstance(r), i = this.APIService.getPreferredVersion("serviceinstances"), s = {
                namespace: this.ctrl.selectedProject.metadata.name
            };
            this.DataService.create(i, null, n, s).then(function(n) {
                if (e.ctrl.orderInProgress = !0, e.watchResults(i, n, s), e.ctrl.serviceInstance = n, 
                r) {
                    var l = e.BindingService.makeParametersSecret(r, t, n), o = e.APIService.getPreferredVersion("secrets");
                    e.DataService.create(o, null, l, s).then(a.noop, function(t) {
                        e.ctrl.error = a.get(t, "data");
                    });
                }
                "none" !== e.ctrl.bindType && e.bindService();
            }, function(t) {
                e.ctrl.error = a.get(t, "data");
            });
        }, e.prototype.bindService = function() {
            var e = this;
            this.ctrl.bindError = !1;
            var t = {
                namespace: a.get(this.ctrl.selectedProject, "metadata.name")
            }, r = "application" === this.ctrl.bindType ? this.ctrl.appToBind : void 0;
            this.BindingService.bindService(this.ctrl.serviceInstance, r, this.ctrl.serviceClass.resource, this.ctrl.bindParameterData).then(function(r) {
                e.ctrl.binding = r, e.watches.push(e.DataService.watchObject(e.BindingService.bindingResource, a.get(e.ctrl.binding, "metadata.name"), t, function(t) {
                    e.ctrl.binding = t;
                }));
            }, function(t) {
                e.ctrl.bindError = t;
            });
        }, e.prototype.$onDestroy = function() {
            this.DataService.unwatchAll(this.watches), this.selectedProjectWatch && this.selectedProjectWatch(), 
            this.noProjectsCantCreateWatch(), this.bindTypeWatch(), this.clearValidityWatcher();
        }, e.prototype.closePanel = function() {
            n.isFunction(this.ctrl.handleClose) && this.ctrl.handleClose();
        }, e.prototype.updateBindability = function() {
            if (!this.ctrl.wizardDone) {
                var e = a.get(this.ctrl.selectedPlan, "spec.bindable");
                this.bindStep.hidden = !0 !== e && (!1 === e || !a.get(this.ctrl.serviceClass, "resource.spec.bindable")), 
                this.updateBindParametersStepVisibility(), this.ctrl.configPageShown && (this.reviewStep.allowed = this.bindStep.hidden, 
                this.bindStep.hidden ? this.ctrl.nextTitle = this.gettextCatalog.getString("Create") : this.ctrl.nextTitle = this.gettextCatalog.getString("Next >"));
            }
        }, e.prototype.updateBindParametersStepVisibility = function() {
            this.bindParametersStep.hidden = this.bindStep.hidden || "none" === this.ctrl.bindType || !a.has(this.ctrl, "bindParameterSchema.properties"), 
            this.bindParametersStep.allowed = this.bindStep.valid;
        }, e.prototype.updateParameterSchema = function(e) {
            this.ctrl.parameterSchema = a.get(e, "spec.instanceCreateParameterSchema"), this.ctrl.parameterFormDefinition = a.get(this, "ctrl.selectedPlan.spec.externalMetadata.schemas.service_instance.create.openshift_form_definition"), 
            this.ctrl.bindParameterSchema = a.get(e, "spec.serviceBindingCreateParameterSchema"), 
            this.ctrl.bindParameterFormDefinition = a.get(this, "ctrl.selectedPlan.spec.externalMetadata.schemas.service_binding.create.openshift_form_definition");
        }, e.prototype.getParameters = function() {
            return a.omitBy(this.ctrl.parameterData, function(e) {
                return "" === e;
            });
        }, e.prototype.getClusterServiceClassExternalName = function() {
            return a.get(this, "ctrl.serviceClass.resource.spec.externalName");
        }, e.prototype.makeServiceInstance = function(e) {
            var t = this.getClusterServiceClassExternalName(), r = {
                kind: "ServiceInstance",
                apiVersion: "servicecatalog.k8s.io/v1beta1",
                metadata: {
                    namespace: this.ctrl.selectedProject.metadata.name,
                    generateName: t + "-"
                },
                spec: {
                    clusterServiceClassExternalName: t,
                    clusterServicePlanExternalName: this.ctrl.selectedPlan.spec.externalName
                }
            };
            return e && (r.spec.parametersFrom = [ {
                secretKeyRef: {
                    name: e,
                    key: "parameters"
                }
            } ]), r;
        }, e.prototype.isNewProject = function() {
            return !this.ctrl.selectedProject || !a.has(this.ctrl.selectedProject, "metadata.uid");
        }, e;
    }();
    i.$inject = [ "$scope", "$filter", "APIService", "ApplicationsService", "ProjectsService", "DataService", "BindingService", "Logger", "Constants", "DNS1123_SUBDOMAIN_VALIDATION", "gettextCatalog" ], 
    t.OrderServiceController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(2), i = function() {
        function e(e, t) {
            var r = this;
            this.ctrl = this, this.closePanel = function() {
                n.isFunction(r.ctrl.handleClose) && r.ctrl.handleClose();
            }, this.showDialog = function() {
                r.ctrl.shown = !0, a("body").addClass("overlay-open"), r.$document.on("keydown", r.closeOnEsc);
            }, this.hideDialog = function() {
                r.ctrl.shown = !1, a("body").removeClass("overlay-open"), r.$document.off("keydown", r.closeOnEsc);
            }, this.closeOnEsc = function(e) {
                27 === e.which && (e.isDefaultPrevented() || (e.preventDefault(), r.$scope.$evalAsync(function() {
                    r.closePanel();
                })));
            }, this.$document = e, this.$scope = t, this.ctrl.shown = !1;
        }
        return e.prototype.$postLink = function() {
            this.ctrl.showPanel && this.showDialog();
        }, e.prototype.$onChanges = function(e) {
            e.showPanel && (this.ctrl.showPanel ? this.showDialog() : this.hideDialog());
        }, e.prototype.$onDestroy = function() {
            a("body").removeClass("overlay-open");
        }, e;
    }();
    i.$inject = [ "$document", "$scope" ], t.OverlayPanelController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(t, r, i, s, l, o, c, d, p, h, g, m) {
            var u = this;
            this.ctrl = this, this.newProjectPanelShown = !1, this.editProjectPanelShown = !1, 
            this.watches = [], this.maxDisplayProjects = 5, this.watchingProjects = !1, this.init = function() {
                u.ProjectsService.list().then(function(t) {
                    u.onProjectsUpdate(t), u.ctrl.isProjectListIncomplete = u.ProjectsService.isProjectListIncomplete(), 
                    !u.ctrl.isProjectListIncomplete && u.ctrl.totalProjects <= e.MAX_PROJETS_TO_WATCH && (u.watches.push(u.ProjectsService.watch(u.$scope, u.onProjectsUpdate)), 
                    u.watchingProjects = !0);
                }, function() {
                    u.ctrl.isProjectListIncomplete = !0;
                }), u.ctrl.resourceLinks = a.clone(u.Constants.CATALOG_HELP_RESOURCES.links), a.forEach(u.ctrl.resourceLinks, function(e) {
                    n.isDefined(e.help) && (e.href = u.Constants.HELP_BASE_URL + (e.help ? u.Constants.HELP[e.help] : ""));
                }), u.$rootScope.$on("recently-viewed-updated", function() {
                    u.ctrl.recentlyViewedItems = u.getRecentlyViewedItems();
                });
            }, this.onProjectsUpdate = function(e) {
                var t = a.toArray(e.by("metadata.name"));
                u.ctrl.projects = u.RecentlyViewedProjectsService.orderByMostRecentlyViewed(t), 
                u.ctrl.totalProjects = u.ctrl.projects.length, u.ctrl.projects = a.take(u.ctrl.projects, u.maxDisplayProjects), 
                u.ctrl.loading = !1, u.ctrl.showGetStarted = !u.ctrl.projects || u.ctrl.projects.length < 2;
            }, this.goToProject = function(e) {
                var t = u.$filter("projectUrl")(e, u.ctrl.baseProjectUrl);
                u.$window.location.href = t;
            }, this.closeNewProjectPanel = function() {
                u.ctrl.newProjectPanelShown = !1;
            }, this.onNewProject = function(e) {
                u.ctrl.newProjectPanelShown = !1, u.watchingProjects || u.ProjectsService.list().then(u.onProjectsUpdate);
            }, this.onViewMemebership = function(e) {
                var t = u.ctrl.viewEditMembership();
                t && t(e);
            }, this.editProject = function(e) {
                u.ctrl.edittingProject = e, u.ctrl.editProjectPanelShown = !0;
            }, this.closeEditProjectPanel = function() {
                u.ctrl.editProjectPanelShown = !1;
            }, this.onEditProject = function(e) {
                u.ctrl.editProjectPanelShown = !1, u.watchingProjects || u.ProjectsService.list().then(u.onProjectsUpdate);
            }, this.onDeleteProject = function() {
                u.watchingProjects || u.ProjectsService.list().then(u.onProjectsUpdate);
            }, this.$filter = t, this.$rootScope = r, this.$scope = i, this.$window = s, this.AuthService = l, 
            this.Constants = o, this.DataService = c, this.Logger = d, this.ProjectsService = p, 
            this.RecentlyViewedProjectsService = h, this.RecentlyViewedItems = g, this.gettextCatalog = m;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.loading = !0, this.AuthService.withUser().then(function(t) {
                e.ctrl.user = t;
            }), this.ProjectsService.canCreate().then(function() {
                e.ctrl.canCreate = !0;
            }, function(t) {
                e.ctrl.canCreate = !1, e.ctrl.loading = !1;
                var r = t.data || {};
                if (403 !== t.status) {
                    var n = e.gettextCatalog.getString("Failed to determine create project permission");
                    return 0 !== t.status && (n += " (" + t.status + ")"), void e.Logger.warn(n);
                }
                if (r.details) {
                    var i = [];
                    a.forEach(r.details.causes || [], function(e) {
                        e.message && i.push(e.message);
                    }), i.length > 0 && (e.ctrl.newProjectMessage = i.join("\n"));
                }
            }).finally(function() {
                e.init();
            });
        }, e.prototype.$onDestroy = function() {
            this.DataService.unwatchAll(this.watches);
        }, e.prototype.$onChanges = function(e) {
            e.catalogItems && this.ctrl.catalogItems && (this.allItems = a.keyBy(this.ctrl.catalogItems, "resource.metadata.uid"), 
            this.ctrl.recentlyViewedItems = this.getRecentlyViewedItems());
        }, e.prototype.openNewProjectPanel = function(e) {
            this.ctrl.newProjectPanelShown = !0, this.ctrl.modalPopupElement = e.currentTarget;
        }, e.prototype.handleGettingStartedClick = function() {
            var e = this.ctrl.startTour();
            e && e();
        }, e.prototype.handleProjectClick = function(e) {
            var t = this.ctrl.projectSelect();
            t && t(e);
        }, e.prototype.orderService = function(e) {
            this.$scope.$emit("open-overlay-panel", e);
        }, e.prototype.showAllProjects = function() {
            var e = this.ctrl.showProjects();
            e && e();
        }, e.prototype.getRecentlyViewedItems = function() {
            var e = this;
            if (this.allItems) {
                var t = this.RecentlyViewedItems.getItems(), r = a.map(t, function(t) {
                    return e.allItems[t];
                });
                return r = a.reject(r, function(e) {
                    return !e;
                });
            }
        }, e;
    }();
    i.$inject = [ "$filter", "$rootScope", "$scope", "$window", "AuthService", "Constants", "DataService", "Logger", "ProjectsService", "RecentlyViewedProjectsService", "RecentlyViewedServiceItems", "gettextCatalog" ], 
    i.MAX_PROJETS_TO_WATCH = 250, t.ProjectsSummaryController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, n) {
            var a = this;
            this.ctrl = this, this.onWindowResize = function() {
                a.$scope.$evalAsync(function() {
                    a.updateListExpandVisibility();
                });
            }, this.$scope = e, this.$window = t, this.$element = r, this.BREAKPOINTS = n, this.ctrl.sassListExpanded = !1, 
            this.ctrl.itemsOverflow = !1;
        }
        return e.prototype.$postLink = function() {
            this.debounceResize = a.debounce(this.onWindowResize, 50, {
                maxWait: 250
            }), n.element(this.$window).on("resize", this.debounceResize), this.updateListExpandVisibility();
        }, e.prototype.$onDestroy = function() {
            n.element(this.$window).off("resize", this.debounceResize);
        }, e.prototype.hasSaasOfferings = function() {
            return !a.isEmpty(this.ctrl.saasOfferings);
        }, e.prototype.$onChanges = function(e) {
            e.saasOfferings && !e.saasOfferings.isFirstChange() && (this.ctrl.saasOfferings = e.saasOfferings.currentValue, 
            this.updateListExpandVisibility());
        }, e.prototype.toggleListExpand = function() {
            this.ctrl.sassListExpanded = !this.ctrl.sassListExpanded;
        }, e.prototype.updateListExpandVisibility = function() {
            var e = this.$window.innerWidth, t = a.size(this.ctrl.saasOfferings);
            this.ctrl.itemsOverflow = t > 4 || t > 2 && e < this.BREAKPOINTS.screenLgMin;
        }, e;
    }();
    i.$inject = [ "$scope", "$window", "$element", "BREAKPOINTS" ], t.SaasListController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = function() {
        function e() {
            this.ctrl = this;
        }
        return e.prototype.$onInit = function() {
            this.updatePlans();
        }, e.prototype.$onChanges = function(e) {
            (e.availablePlans && !e.availablePlans.isFirstChange() || e.selectedPlan && !e.selectedPlan.isFirstChange()) && this.updatePlans();
        }, e.prototype.updatePlans = function() {
            this.ctrl.plansAvailable = n.size(this.ctrl.availablePlans) > 0, this.ctrl.plansAvailable && (this.ctrl.selectedPlan || (this.ctrl.selectedPlan = this.ctrl.availablePlans[0]), 
            this.ctrl.planIndex = this.ctrl.availablePlans.indexOf(this.ctrl.selectedPlan));
        }, e;
    }();
    t.SelectPlanController = a;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(t, r, n, i, s, l, o, c, d) {
            var p = this;
            this.ctrl = this, this.getProjectChoices = function() {
                return p.ctrl.matchingProjects ? p.ctrl.matchingProjects : p.largeProjectList ? [] : p.projects;
            }, this.groupChoicesBy = function(e) {
                return p.largeProjectList ? "" : e.metadata.uid ? p.RecentlyViewedProjectsService.isRecentlyViewed(e.metadata.uid) ? p.gettextCatalog.getString("Recently Viewed") : p.gettextCatalog.getString("Other Projects") : "";
            }, this.refreshChoices = function(t) {
                var r;
                r = p.lastSearch && t.startsWith(p.lastSearch) ? p.lastResults : p.projects, p.lastSearch = t, 
                p.lastResults = p.filterProjects(t, r), p.ctrl.matchingProjects = a.take(p.lastResults, e.LARGE_PROJECT_LIST_SIZE);
            }, this.canIAddToProject = function() {
                var e = !0, t = a.get(p.ctrl.selectedProject, "metadata.name");
                p.isNewProject() || p.AuthorizationService.getProjectRules(t).then(function() {
                    e = p.AuthorizationService.canIAddToProject(t), p.ctrl.forms && p.ctrl.forms.selectProjectForm.selectProject.$setValidity("cannotAddToProject", e);
                }), p.ctrl.forms && p.ctrl.forms.selectProjectForm.selectProject.$setValidity("cannotAddToProject", e);
            }, this.$filter = t, this.$scope = r, this.AuthService = n, this.AuthorizationService = i, 
            this.KeywordService = s, this.Logger = l, this.ProjectsService = o, this.RecentlyViewedProjectsService = c, 
            this.gettextCatalog = d, this.largeProjectList = !1, this.lastSearch = "", this.lastResults = [];
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.noProjectsCantCreate = !1, this.ctrl.noProjectsConfig = {
                title: this.gettextCatalog.getString("No Projects Found"),
                info: this.gettextCatalog.getString("Services cannot be provisioned without a project.")
            }, void 0 === this.ctrl.showDivider && (this.ctrl.showDivider = !0), void 0 === this.ctrl.skipCanAddValidation && (this.ctrl.skipCanAddValidation = !1), 
            void 0 === this.ctrl.isRequired && (this.ctrl.isRequired = !0), this.ProjectsService.canCreate().then(function() {
                e.ctrl.canCreate = !0;
            }, function(t) {
                if (e.ctrl.canCreate = !1, 403 !== t.status) {
                    var r = e.gettextCatalog.getString("Failed to determine create project permission");
                    0 !== t.status && (r += " (" + t.status + ")"), e.Logger.warn(r);
                }
                var n = t.data || {};
                if (n.details) {
                    var i = [];
                    a.forEach(n.details.causes || [], function(e) {
                        e.message && i.push(e.message);
                    }), i.length > 0 && (e.ctrl.noProjectsCantCreateMessage = i.join("\n"));
                }
            }).finally(function() {
                e.listProjects();
            });
        }, e.prototype.$onChanges = function(e) {
            e.nameTaken && !e.nameTaken.isFirstChange() && this.ctrl.forms.createProjectForm.name.$setValidity("nameTaken", !this.ctrl.nameTaken), 
            e.availableProjects && !e.availableProjects.isFirstChange() && this.updateProjects(this.ctrl.availableProjects);
        }, e.prototype.onSelectProjectChange = function() {
            this.ctrl.skipCanAddValidation || this.canIAddToProject(), n.isFunction(this.ctrl.onProjectSelected) && this.ctrl.onProjectSelected(this.ctrl.selectedProject);
        }, e.prototype.onOpenClose = function(e) {
            e && a.isFunction(this.ctrl.onOpen) && this.ctrl.onOpen();
        }, e.prototype.onNewProjectNameChange = function() {
            this.ctrl.forms.createProjectForm.name.$setValidity("nameTaken", !0);
        }, e.prototype.isNewProject = function() {
            return this.projects && this.ctrl.selectedProject && !a.has(this.ctrl.selectedProject, "metadata.uid");
        }, e.prototype.canOnlyCreateProject = function() {
            return 1 === this.ctrl.numProjectChoices && !this.ctrl.hideCreateProject && this.ctrl.canCreate;
        }, e.prototype.filterProjects = function(e, t) {
            if (!e) return this.largeProjectList ? [] : t;
            var r = [ "metadata.name", 'metadata.annotations["openshift.io/display-name"]' ], n = this.KeywordService.generateKeywords(e);
            return this.KeywordService.filterForKeywords(t, r, n);
        }, e.prototype.updateProjects = function(t) {
            var r = this;
            if (this.largeProjectList = a.size(t) >= e.LARGE_PROJECT_LIST_SIZE, this.largeProjectList) return this.ctrl.placeholder = this.gettextCatalog.getString("Filter projects by name"), 
            this.ctrl.searchEnabled = !0, this.ctrl.refreshDelay = 500, this.projects = t, void (this.ctrl.numProjectChoices = a.size(this.projects));
            this.ctrl.placeholder = this.gettextCatalog.getString("Select project");
            var n = {
                metadata: {
                    annotations: {
                        "openshift.io/display-name": this.gettextCatalog.getString("Create Project"),
                        "new-display-name": ""
                    }
                }
            }, i = a.reject(t, "metadata.deletionTimestamp");
            this.projects = this.RecentlyViewedProjectsService.orderByMostRecentlyViewed(i), 
            this.ctrl.searchEnabled = !a.isEmpty(i), this.ctrl.refreshDelay = 0, this.ctrl.existingProjectNames = a.map(t, "metadata.name"), 
            this.preselectProject(), this.ctrl.canCreate && !this.ctrl.hideCreateProject ? (this.ctrl.placeholder = this.gettextCatalog.getString("Select or create project"), 
            this.projects.unshift(n), 1 === a.size(this.projects) && (this.ctrl.selectedProject = n, 
            this.onSelectProjectChange())) : 0 === a.size(this.projects) && (this.ctrl.noProjectsCantCreate = !0, 
            this.AuthService.withUser().then(function(e) {
                r.ctrl.user = e;
            }), this.$scope.$emit("no-projects-cannot-create")), this.ctrl.numProjectChoices = a.size(this.projects);
        }, e.prototype.preselectProject = function() {
            this.ctrl.selectedProject || (1 === a.size(this.projects) ? this.ctrl.selectedProject = this.projects[0] : this.ctrl.preselectProjectName && (this.ctrl.selectedProject = a.find(this.projects, {
                metadata: {
                    name: this.ctrl.preselectProjectName
                }
            })), this.ctrl.selectedProject && this.onSelectProjectChange());
        }, e.prototype.listProjects = function() {
            var e = this;
            this.ctrl.availableProjects ? this.updateProjects(this.ctrl.availableProjects) : this.ProjectsService.list().then(function(t) {
                e.updateProjects(t.by("metadata.name"));
            });
        }, e;
    }();
    i.$inject = [ "$filter", "$scope", "AuthService", "AuthorizationService", "KeywordService", "Logger", "ProjectsService", "RecentlyViewedProjectsService", "gettextCatalog" ], 
    i.LARGE_PROJECT_LIST_SIZE = 500, t.SelectProjectController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(0), a = r(2), i = function() {
        function e(e, t, r, a, i, s, l, o, c, d, p, h) {
            var g = this;
            this.ctrl = this, this.previousSubCategoryHeight = 0, this.resizeRetries = 0, this.serviceViewItemClicked = function(e, t) {
                g.$scope.$emit("open-overlay-panel", e);
            }, this.filterChange = function(e) {
                g.filterByCategory(g.ctrl.currentFilter, g.ctrl.currentSubFilter, !1), n.isEmpty(e) || n.each(e, function(e) {
                    switch (e.id) {
                      case "keyword":
                        g.ctrl.filteredItems = g.filterForKeywords(e.values[0], g.ctrl.filteredItems);
                        break;

                      case "vendors":
                        g.ctrl.filteredItems = g.filterForVendors(e.values, g.ctrl.filteredItems);
                    }
                }), g.ctrl.filterConfig.resultsCount = g.ctrl.filteredItems.length, g.ctrl.keywordFilterValue = null;
            }, this.clearAppliedFilters = function() {
                g.$scope.$broadcast("clear-filters");
            }, this.constants = e, this.catalog = t, this.keywordService = r, this.logger = a, 
            this.htmlService = i, this.element = s[0], this.$filter = l, this.$rootScope = o, 
            this.$scope = c, this.$timeout = d, this.gettext = p, this.gettextCatalog = h, this.ctrl.loaded = !1, 
            this.ctrl.isEmpty = !1, this.ctrl.mobileView = "categories", this.ctrl.filterConfig = {
                resultsLabel: this.gettextCatalog.getString("Items"),
                appliedFilters: []
            }, this.ctrl.keywordFilterValue = null;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.debounceResize = n.debounce(function() {
                return e.resizeExpansion(!1);
            }, 50, {
                maxWait: 250
            }), a(window).on("resize.services", this.debounceResize), this.ctrl.currentFilter = this.ctrl.currentSubFilter = "all", 
            this.ctrl.sectionTitle = this.ctrl.sectionTitle || this.gettextCatalog.getString("Browse Catalog"), 
            this.removeFilterListener = this.$rootScope.$on("filter-catalog-items", function(t, r) {
                e.setKeywordFilter(r.searchText);
            }), this.ctrl.emptyFilterConfig = {
                title: this.gettextCatalog.getString("No results match."),
                info: this.gettextCatalog.getString("The active filters are hiding all catalog items."),
                helpLink: {
                    urlLabel: this.gettextCatalog.getString("Clear All Filters"),
                    urlAction: this.clearAppliedFilters
                }
            }, this.ctrl.noItemsConfig = {
                title: this.gettextCatalog.getString("No items."),
                info: this.gettextCatalog.getString("No catalog items have been loaded."),
                helpLink: {
                    urlLabel: this.gettextCatalog.getString("See Loading the Default Image Streams and Templates"),
                    url: "https://docs.openshift.org/latest/install_config/imagestreams_templates.html"
                }
            }, this.ctrl.keywordFilter && this.setKeywordFilter(this.ctrl.keywordFilter);
        }, e.prototype.$onChanges = function(e) {
            e.catalogItems && e.catalogItems.currentValue && (this.ctrl.isEmpty = n.isEmpty(this.ctrl.catalogItems), 
            this.ctrl.isEmpty || (this.ctrl.categories = this.catalog.categorizeItems(this.ctrl.catalogItems), 
            this.ctrl.vendors = this.catalog.getVendors(this.ctrl.catalogItems), this.filterByCategory("all", "all", !0)), 
            this.ctrl.loaded = !0), e.keywordFilter && !e.keywordFilter.isFirstChange() && this.setKeywordFilter(this.ctrl.keywordFilter);
        }, e.prototype.$postLink = function() {
            this.scrollParent = this.getScrollParent(this.element), this.scrollParent && this.htmlService.isWindowAboveBreakpoint(this.htmlService.WINDOW_SIZE_SM) && (this.ctrl.viewStyle = {
                "min-height": "calc(100vh - " + this.scrollParent.getBoundingClientRect().top + "px)"
            });
        }, e.prototype.$onDestroy = function() {
            a(window).off("resize.services"), this.removeFilterListener();
        }, e.prototype.selectCategory = function(e) {
            if (this.ctrl.mobileView = "subcategories", this.clearAppliedFilters(), this.filterByCategory(e, null, !0), 
            this.scrollParent) {
                var t = a(this.scrollParent);
                t.scrollTop() !== this.element.offsetTop && t.animate({
                    scrollTop: this.element.offsetTop
                }, 200);
            }
        }, e.prototype.selectSubCategory = function(e) {
            this.ctrl.mobileView = "items", this.ctrl.currentSubFilter === e && "xxs" !== this.htmlService.getBreakpoint() && (e = null, 
            this.ctrl.mobileView = "subcategories"), this.clearAppliedFilters(), this.filterByCategory(this.ctrl.currentFilter, e, !1);
        }, e.prototype.getSubCategories = function(e) {
            var t = [];
            return this.ctrl.categories.map(function(r) {
                e === r.id && (t = t.concat(r.subCategories));
            }), t = n.filter(t, {
                hasItems: !0
            }), "all" === t[0].id && 2 === t.length && (t = n.drop(t, 1)), t;
        }, e.prototype.applyFilters = function(e) {
            this.filterChange(e.appliedFilters);
        }, e.prototype.filterByCategory = function(e, t, r) {
            var a, i;
            "all" === e || "other" === e ? t = "all" : (r && (this.ctrl.subCategories = this.getSubCategories(e)), 
            t = 1 === this.ctrl.subCategories.length ? this.ctrl.subCategories[0].id : t || null), 
            a = n.find(this.ctrl.categories, {
                id: e
            }), a ? t && (i = n.find(a.subCategories, {
                id: t
            }), i ? (this.ctrl.filteredItems = i.items, this.ctrl.filterConfig.totalCount = this.ctrl.filteredItems.length, 
            this.ctrl.filterConfig.resultsCount = this.ctrl.filterConfig.totalCount) : this.logger.error("Could not find subcategory '" + t + "' for category '" + e + "'")) : this.logger.error("Could not find category '" + e + "'"), 
            this.ctrl.currentFilter = e, this.ctrl.currentSubFilter = t, this.updateActiveCardStyles();
        }, e.prototype.setKeywordFilter = function(e) {
            this.ctrl.keywordFilterValue = e, this.ctrl.currentFilter = this.ctrl.currentSubFilter = "all", 
            this.ctrl.mobileView = "subcategories";
        }, e.prototype.filterForKeywords = function(e, t) {
            var r = this.keywordService.generateKeywords(e);
            return this.keywordService.weightedSearch(t, this.constants.CATALOG_SEARCH_FIELDS, r);
        }, e.prototype.filterForVendors = function(e, t) {
            return n.filter(t, function(t) {
                return n.includes(e, t.vendor);
            });
        }, e.prototype.getScrollParent = function(e) {
            if (null === e || !(e instanceof Element)) return null;
            var t = window.getComputedStyle(e).overflowY;
            return "visible" !== t && "hidden" !== t ? e : this.getScrollParent(e.parentNode);
        }, e.prototype.resizeExpansion = function(t) {
            var r = this;
            if ("all" !== this.ctrl.currentFilter && "other" !== this.ctrl.currentFilter && this.ctrl.currentSubFilter && this.htmlService.isWindowAboveBreakpoint(this.htmlService.WINDOW_SIZE_XS)) {
                if (this.resizeRetries > e.MAX_RESIZE_RETRIES) return void (this.resizeRetries = 0);
                var n = a("#" + this.ctrl.currentSubFilter), i = n.find(".services-items"), s = i.outerHeight(!0);
                s || (this.resizeRetries++, setTimeout(function() {
                    return r.resizeExpansion(t);
                }, 50)), t ? (a(".services-sub-category").removeAttr("style").removeClass("items-shown"), 
                n.css("margin-bottom", this.previousSubCategoryHeight + "px"), n.animate({
                    "margin-bottom": s
                }, 100, "swing", function() {
                    n.addClass("items-shown");
                })) : (n.css("margin-bottom", s + "px"), n.addClass("items-shown")), this.previousSubCategoryHeight = s;
            } else a(".services-sub-category").removeAttr("style").removeClass("items-shown"), 
            this.previousSubCategoryHeight = 0, this.resizeRetries = 0;
            this.$scope.$evalAsync(function() {
                r.scrollParent = r.getScrollParent(r.element), r.htmlService.isWindowAboveBreakpoint(r.htmlService.WINDOW_SIZE_SM) && r.scrollParent ? r.ctrl.viewStyle = {
                    "min-height": "calc(100vh - " + r.scrollParent.getBoundingClientRect().top + "px)"
                } : r.ctrl.viewStyle = void 0;
            });
        }, e.prototype.updateActiveCardStyles = function() {
            var e = this;
            this.$timeout(function() {
                return e.resizeExpansion(!0);
            });
        }, e;
    }();
    i.$inject = [ "Constants", "Catalog", "KeywordService", "Logger", "HTMLService", "$element", "$filter", "$rootScope", "$scope", "$timeout", "gettext", "gettextCatalog" ], 
    i.MAX_RESIZE_RETRIES = 20, t.ServicesViewController = i;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1), a = r(0), i = function() {
        function e(e, t, r, i, s, l, o, c, d) {
            var p = this;
            this.ctrl = this, this.configChanged = !0, this.secrets = [], this.clearValidityWatcher = function() {
                p.validityWatcher && (p.validityWatcher(), p.validityWatcher = void 0), p.ctrl.reviewStep.allowed = !1;
            }, this.showPlan = function() {
                p.clearValidityWatcher(), p.ctrl.configPageShown = !1, p.configStep.hidden ? p.ctrl.nextTitle = p.gettextCatalog.getString("Update") : p.ctrl.nextTitle = p.gettextCatalog.getString("Next >"), 
                p.planStep.valid = p.ctrl.selectedPlan !== p.originalPlan || !p.configStep.hidden;
            }, this.showConfig = function() {
                p.clearValidityWatcher(), p.ctrl.configPageShown = !0, p.configStep.valid = a.get(p.ctrl, "forms.orderConfigureForm.$valid") && p.configChanged, 
                p.reviewStep.allowed = p.configStep.valid, p.validityWatcher = p.$scope.$watch("$ctrl.forms.orderConfigureForm.$valid", function(e, t) {
                    p.configStep.valid = e && p.configChanged, p.reviewStep.allowed = p.configStep.valid;
                }), p.dataWatcher && p.dataWatcher(), p.dataWatcher = p.$scope.$watch(function() {
                    return p.ctrl.parameterData;
                }, function() {
                    p.configChanged = !n.equals(p.getParameters(p.ctrl.parameterData), p.origParameterData) || p.ctrl.selectedPlan !== p.originalPlan, 
                    p.configStep.valid = a.get(p.ctrl, "forms.orderConfigureForm.$valid") && p.configChanged;
                }, !0), p.ctrl.nextTitle = p.gettextCatalog.getString("Update");
            }, this.showResults = function() {
                p.clearValidityWatcher(), p.ctrl.configPageShown = !1, p.ctrl.nextTitle = p.gettextCatalog.getString("Close"), 
                p.ctrl.wizardDone = !0, p.updateServiceConfig();
            }, this.selectPlan = function(e) {
                p.ctrl.selectedPlan = e, a.get(e, "metadata.name") === a.get(p.ctrl.serviceInstance, "spec.clusterServicePlanRef.name") ? p.ctrl.parameterData = n.copy(p.origParameterData) : p.ctrl.parameterData = {}, 
                p.updateParameterSchema(e), p.configChanged = !n.equals(p.ctrl.parameterData, p.origParameterData) || p.ctrl.selectedPlan !== p.originalPlan, 
                p.configStep.valid = a.get(p.ctrl, "forms.orderConfigureForm.$valid") && p.configChanged;
            }, this.updateServiceConfig = function() {
                p.ctrl.orderComplete = !1, p.ctrl.error = null;
                var e = p.getParameters(p.ctrl.parameterData), t = a.get(p.ctrl.serviceInstance, "spec.parameters"), r = a.map(t, function(e, t) {
                    return [ t ];
                }), i = a.pick(e, r), s = a.omit(e, r), l = n.copy(p.ctrl.serviceInstance);
                a.get(l, "spec.clusterServicePlanExternalName") !== a.get(p.ctrl.selectedPlan, "spec.externalName") && (a.unset(l, "spec.clusterServicePlanRef"), 
                a.set(l, "spec.clusterServicePlanExternalName", a.get(p.ctrl.selectedPlan, "spec.externalName"))), 
                n.equals(i, t) || a.set(l, "spec.parameters", i);
                var o = {};
                if (a.each(p.secrets, function(t) {
                    var r = JSON.parse(p.SecretsService.decodeSecretData(t.data).parameters), i = a.map(r, function(e, t) {
                        return [ t ];
                    }), c = a.pick(e, i);
                    s = a.omit(s, i), n.equals(c, r) || (n.extend(o, c), l.spec.parametersFrom = a.reject(l.spec.parametersFrom, {
                        secretKeyRef: {
                            name: t.metadata.name
                        }
                    }));
                }), n.extend(o, s), a.isEmpty(o)) p.updateServiceInstance(l); else {
                    var c = p.BindingService.generateSecretName(a.get(p.ctrl.serviceClass, "spec.externalName"));
                    l.spec.parametersFrom.push({
                        secretKeyRef: {
                            name: c,
                            key: "parameters"
                        }
                    });
                    var d = p.BindingService.makeParametersSecret(c, o, l), h = p.APIService.getPreferredVersion("secrets");
                    p.DataService.create(h, null, d, p.context).then(function() {
                        p.updateServiceInstance(l);
                    }, function(e) {
                        p.ctrl.error = a.get(e, "data");
                    });
                }
            }, this.$scope = e, this.$filter = t, this.$q = r, this.APIService = i, this.BindingService = s, 
            this.DataService = l, this.Logger = o, this.SecretsService = c, this.gettextCatalog = d;
        }
        return e.prototype.$onInit = function() {
            var e = this;
            this.ctrl.parameterData = {}, this.ctrl.forms = {}, this.ctrl.configStepValid = !0, 
            this.ctrl.wizardDone = !1, this.ctrl.orderComplete = !1, this.ctrl.error = null, 
            this.planStep = {
                id: "plans",
                label: "Plan",
                view: "update-service/update-service-plans.html",
                hidden: !a.get(this.ctrl.serviceClass, "spec.planUpdatable", !1) || a.size(this.ctrl.servicePlans) < 2,
                allowed: !0,
                valid: !0,
                allowClickNav: !0,
                onShow: this.showPlan
            }, this.configStep = {
                label: this.gettextCatalog.getString("Configuration"),
                id: "configure",
                view: "update-service/update-service-configure.html",
                hidden: !1,
                allowed: !0,
                valid: !1,
                allowClickNav: !0,
                onShow: this.showConfig
            }, this.reviewStep = {
                label: this.gettextCatalog.getString("Results"),
                id: "results",
                view: "update-service/update-service-results.html",
                hidden: !1,
                allowed: !1,
                valid: !0,
                prevEnabled: !1,
                allowClickNav: !1,
                onShow: this.showResults
            }, this.ctrl.steps = [ this.planStep, this.configStep, this.reviewStep ], this.ctrl.orderedPlans = a.orderBy(this.ctrl.servicePlans, [ "spec.externalMetadata.displayName", "metadata.name" ]), 
            this.configChanged = !1, this.ctrl.displayName = this.$filter("serviceInstanceDisplayName")(this.ctrl.serviceInstance, this.ctrl.serviceClass), 
            this.ctrl.serviceName = a.get(this.ctrl.serviceInstance, "metadata.name"), this.planStep.hidden && (this.ctrl.hideBackButton = !0), 
            this.context = {
                namespace: a.get(this.ctrl.serviceInstance, "metadata.namespace")
            }, this.origParameterData = n.copy(a.get(this.ctrl.serviceInstance, "spec.parameters", {}));
            var t = [];
            a.each(a.get(this.ctrl.serviceInstance, "spec.parametersFrom"), function(r) {
                var n = e.APIService.getPreferredVersion("secrets"), i = a.get(r, "secretKeyRef.name"), s = a.find(e.secrets, function(e) {
                    return a.get(e, "metadata.name") === i;
                });
                s ? e.addParametersFromSecret(s, r) : t.push(e.DataService.get(n, i, e.context).then(function(t) {
                    e.addParametersFromSecret(t, r), e.secrets.push(t);
                }));
            }), this.$q.all(t).then(function() {
                e.originalPlan = a.find(e.ctrl.orderedPlans, function(t) {
                    return a.get(t, "metadata.name") === a.get(e.ctrl.serviceInstance, "spec.clusterServicePlanRef.name");
                }), e.selectPlan(e.originalPlan);
            });
        }, e.prototype.$onDestroy = function() {
            this.clearValidityWatcher(), this.dataWatcher && this.dataWatcher(), this.progressWatcher && this.DataService.unwatch(this.progressWatcher);
        }, e.prototype.closePanel = function() {
            n.isFunction(this.ctrl.handleClose) && this.ctrl.handleClose();
        }, e.prototype.updateParameterSchema = function(e) {
            this.ctrl.parameterSchema = a.get(e, "spec.instanceUpdateParameterSchema"), this.ctrl.parameterFormDefinition = a.get(e, "spec.externalMetadata.schemas.service_instance.update.openshift_form_definition");
            var t = a.get(this.ctrl.parameterSchema, "properties");
            this.configStep.hidden = a.size(t) < 1, this.configStep.hidden ? this.ctrl.nextTitle = this.gettextCatalog.getString("Update") : this.ctrl.nextTitle = this.gettextCatalog.getString("Next >"), 
            this.planStep.valid = this.ctrl.selectedPlan !== this.originalPlan || !this.configStep.hidden;
        }, e.prototype.getParameters = function(e) {
            return a.omitBy(e, function(e) {
                return "" === e;
            });
        }, e.prototype.addParametersFromSecret = function(e, t) {
            try {
                var r = a.get(t, "secretKeyRef.key"), i = JSON.parse(this.SecretsService.decodeSecretData(e.data)[r]);
                n.extend(this.origParameterData, i), this.originalParameters = this.getParameters(this.origParameterData);
            } catch (e) {
                this.Logger.warn("Unable to load parameters from secret " + a.get(t, "secretKeyRef.name"), e);
            }
        }, e.prototype.updateServiceInstance = function(e) {
            var t = this, r = this.APIService.getPreferredVersion("serviceinstances"), n = this.$filter("isServiceInstanceReady"), i = this.$filter("isServiceInstanceFailed"), s = this.$filter("serviceInstanceFailedMessage");
            e.spec.updateRequests = e.spec.updateRequests ? e.spec.updateRequests + 1 : 1, this.DataService.update(r, a.get(this.ctrl.serviceInstance, "metadata.name"), e, this.context).then(function() {
                t.progressWatcher = t.DataService.watchObject(r, a.get(t.ctrl.serviceInstance, "metadata.name"), t.context, function(e) {
                    t.ctrl.orderComplete = n(e), i(e) && (t.ctrl.error = s(e));
                });
            }, function(e) {
                t.ctrl.error = a.get(e, "data");
            });
        }, e;
    }();
    i.$inject = [ "$scope", "$filter", "$q", "APIService", "BindingService", "DataService", "Logger", "SecretsService", "gettextCatalog" ], 
    t.UpdateServiceController = i;
}, function(e, t) {
    e.exports = URI;
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(1);
    r(3), r(36);
    var a = r(37), i = r(38), s = r(39), l = r(40), o = r(24), c = r(25), d = r(41), p = r(26), h = r(27), g = r(28), m = r(29), u = r(30), f = r(31), v = r(32), y = r(33), S = r(34), b = r(35), P = r(42), $ = r(23);
    t.webCatalog = "webCatalog", n.module(t.webCatalog, [ "patternfly", "ngAnimate", "ui.bootstrap", "angularMoment", "ui.select", "schemaForm" ]).service("BuilderAppService", l.BuilderAppService).service("Catalog", d.CatalogService).service("RecentlyViewedServiceItems", P.RecentlyViewedServiceItems).filter("escapeRegExp", a.escapeRegExpFilter).filter("projectUrl", i.projectUrlFilter).filter("secretUrl", s.secretUrlFilter).component("catalogParameters", o.catalogParameters).component("catalogSearch", c.catalogSearch).component("createFromBuilder", p.createFromBuilder).component("landingPage", h.landingPage).component("orderService", g.orderService).component("overlayPanel", m.overlayPanel).component("projectsSummary", u.projectsSummary).component("saasList", f.saasList).component("selectPlan", v.selectPlan).component("selectProject", y.selectProject).component("servicesView", S.servicesView).component("updateService", b.updateService).component("catalogFilter", $.catalogFilter).run([ "$templateCache", function(e) {
        e.put("catalog-search/catalog-search-result.html", r(4)), e.put("create-from-builder/create-from-builder-info.html", r(7)), 
        e.put("create-from-builder/create-from-builder-configure.html", r(6)), e.put("create-from-builder/create-from-builder-bind.html", r(5)), 
        e.put("create-from-builder/create-from-builder-results.html", r(8)), e.put("order-service/order-service-info.html", r(12)), 
        e.put("order-service/order-service-plans.html", r(13)), e.put("order-service/order-service-configure.html", r(11)), 
        e.put("order-service/order-service-bind.html", r(10)), e.put("order-service/order-service-bind-parameters.html", r(9)), 
        e.put("order-service/order-service-results.html", r(14)), e.put("update-service/update-service-plans.html", r(16)), 
        e.put("update-service/update-service-configure.html", r(15)), e.put("update-service/update-service-results.html", r(17)), 
        e.put("decorators/bootstrap/array.html", r(18)), e.put("decorators/bootstrap/checkbox.html", r(19)), 
        e.put("decorators/bootstrap/checkboxes.html", r(20)), e.put("decorators/bootstrap/default.html", r(21)), 
        e.put("decorators/bootstrap/select.html", r(22));
    } ]);
} ], [ 70 ]);