import Ember from 'ember';
import config from '../config/environment';

function fullUrl (url) {
  return (config.RESTNamespace ? config.RESTNamespace + '/' : '') + url;
}

export default Ember.Object.extend({
  open: function (authentication) {
    var authorizationCode = authentication.authorizationCode;
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: fullUrl('session'),
        data: { type: 'facebook', code: authorizationCode },
        dataType: 'json',
        method: 'put',
        success: function (data) {
          if (data.is_authenticated) {
            resolve();
          } else {
            reject();
          }
        },
        error: Ember.run.bind(null, reject)
      });
    })
  },

  fetch: function () {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: fullUrl('session'),
        dataType: 'json',
        success: function (data) {
          if (data.is_authenticated) {
            resolve();
          } else {
            reject();
          }
        },
        error: Ember.run.bind(null, reject)
      });
    });
  },

  close: function () {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: fullUrl('session'),
        dataType: 'json',
        method: 'delete',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
