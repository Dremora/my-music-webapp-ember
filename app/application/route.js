import Ember from 'ember';

export default Ember.Route.extend({
  login: function () {
    this.get('session').fetch();
  }.on('init'),

  actions: {
    login: function () {
      this.get('session').open('facebook-oauth2').then(
        () => {},
        (error) => console.log('Could not sign you in: ' + error.message)
      );
    },

    logout: function () {
      this.get('session').close();
    }
  }
});
