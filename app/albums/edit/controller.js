import Ember from 'ember';

export default Ember.Controller.extend({

  isFoobar: function (source) {
    return source.get('location') === 'foobar2000'
  },

  actions: {
    save: function () {
      this.get('model').save().then(function () {
        this.transitionToRoute('albums.view', this.get('model'))
      }.bind(this))
    },

    addSource: function () {
      var model = this.get('model')
      var sources = model.get('sources')
      if (!sources) {
        model.set('sources', [])
        sources = model.get('sources')
      }
      sources.createFragment({})
    }
  }

});