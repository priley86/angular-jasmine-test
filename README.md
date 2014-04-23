Angular-test
=========

A simple Karma/Jasmine test using $injector

  - Mocks $http with $httpBackend
  - See test/spec/controllers/comics.js for example
  



Installation
--------------

1. After running the yo generator (yo angular appName), install karma and karma browser launchers:

    ```sh
    npm install --save-dev karma-chrome-launcher karma-firefox-launcher karma-safari-launcher karma-opera-launcher karma-ie-launcher karma-jasmine karma-mocha karma-coffee-preprocessor
    ```

2. Add plugins config to karma.conf.js, add any dependent files:
    ```sh
        plugins: [
        'karma-chrome-launcher',
        'karma-jasmine'
        ],

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],
    
        // list of files / patterns to load in the browser
        files: [
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-mocks/angular-mocks.js',
          'app/bower_components/angular-resource/angular-resource.js',
          'app/bower_components/angular-cookies/angular-cookies.js',
          'app/bower_components/angular-sanitize/angular-sanitize.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/scripts/*.js',
          'app/scripts/**/*.js',
          'test/mock/**/*.js',
          'test/spec/**/*.js'
        ],
    ```
3. Change Karma tasks/config in Gruntfile.js:
    
    ```sh
        karma: {
          e2e: {
            configFile: 'karma-e2e.conf.js',
            singleRun: false
          },
          unit: {
            configFile: 'karma.conf.js',
            singleRun: false
          }
        }
    ```
    (add unit and e2e targets):
    ```sh
        grunt.registerTask('test:unit', [
        'clean:server',
        'coffee',
        'compass',
        'connect:test',
        'karma:unit'
        ]);

        grunt.registerTask('test:e2e', [
        'clean:server',
        'coffee',
        'compass',
        'livereload-start',
        'connect:livereload',
        'karma:e2e'
        ]);
```


4. Run unit tests

    ```sh
    grunt test:unit
    ```

Watch output and debug in browser!

License
----

MIT


**Free Software, Hell Yeah!**

    