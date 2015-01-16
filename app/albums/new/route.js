import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('model', model)
  },

  queryAlbums: function () {
  },

  model: function () {
    return this.store.createRecord('album')
    // return new Ember.ArrayController()
     // return this.store.find('album');
  }
});
