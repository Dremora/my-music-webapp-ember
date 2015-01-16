import Ember from 'ember';

export default Ember.Controller.extend({
  query: '',
  albums: [],

  queryAlbums: function () {
    let query = this.get('query')
    if (!query) {
      this.set('albums', [])
      return
    }
    let promise = this.store.find('album', { query: this.get('query')})
    this.set('albumPromise', promise)
    promise.then((albums) => {
      if (promise.shouldStop) {
        return
      }
      this.set('albums', albums)
    })
  },

  queryChanged: function () {
    let previousPromise = this.get('albumPromise')
    if (previousPromise) {
      previousPromise.shouldStop = true
    }
    Ember.run.debounce(this, this.queryAlbums, 200);
  }.observes('query')
});
