import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('album', params.album_id);
  },

  actions: {
    willTransition: function () {
      this.get('controller').get('model').rollback()
    }
  }
});