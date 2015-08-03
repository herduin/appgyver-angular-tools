(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('api.config', [])
      .value('api.config', {
          debug: true
      });

  // Modules
  angular.module('api.directives', []);
  angular.module('api.filters', []);
  angular.module('api.services', []);
  angular.module('api',
      [
          'api.config',
          'api.directives',
          'api.filters',
          'api.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
