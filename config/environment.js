/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-music-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey: '560044377462970', // dev only,
          redirectUri: 'http://localhost:4200/'
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.RESTNamespace = 'api';
    ENV.torii.providers['facebook-oauth2'] = {
      apiKey: '560000260800715',
      redirectUri: 'http://my-music.dremora.com/'
    }
  }

  return ENV;
};
