import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    // this.store.find('album', { stats_only: true }).then(function (result) {
    //   console.log(result.get("content"))
    // })
    // controller.set('model', albums)
  },

  queryAlbums: function () {
  },

  model: function () {
    // return new Ember.ArrayController()
     // return this.store.find('album');
  }
});