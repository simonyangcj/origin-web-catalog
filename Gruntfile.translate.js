module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    nggettext_extract: {
      pot: {
        files: {
          // 自动识别html中的Translate对应的字符串，放到po/template.pot文件中
          // 然后用工具，把.pot中的翻译，转到.po中
          'po/template.pot': ['src/*/*/*.html',
                              'app/*/*/*.html',
                              'dist/origin-web-catalogs.js'
                             ]
        }
      }
    },

    nggettext_compile: {
      all: {
        files: {
          'dist/translations-catalog.js': ['po/*.po']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-gettext');

  grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
};
