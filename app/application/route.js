import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller) {
    // this.store.find('album', { length: true }).then(function (result) {
    //   console.log(result.get('content'))
    // })
    // controller.set('model', albums)
  },

  queryAlbums: function (query) {
  },

  model: function () {
    // return new Ember.ArrayController()
     // return this.store.find('album');
  }
});