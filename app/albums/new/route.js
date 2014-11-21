import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    console.log('setupController')
    controller.set('model', model)
  },

  queryAlbums: function () {
  },

  model: function () {
    console.log('model')
    return this.store.createRecord('album')
    // return new Ember.ArrayController()
     // return this.store.find('album');
  }
});