import Ember from 'ember';

export default Ember.Controller.extend({

  firstPlayedMode: 'now',
  firstPlayedYear: null,
  firstPlayedMonth: null,
  firstPlayedDay: null,

  isSpecificDate: function () {
    return this.get('firstPlayedMode') === 'date'
  }.property('firstPlayedMode'),

  specificDateValue: function () {
    var firstPlayedYear = this.get('firstPlayedYear')
    var firstPlayedMonth = this.get('firstPlayedMonth')
    var firstPlayedDay = this.get('firstPlayedDay')
    var value = []
    if (firstPlayedYear) {
      firstPlayedYear = parseInt(firstPlayedYear)
      if (!Number.isNaN(firstPlayedYear) && firstPlayedYear) {
        value.push(firstPlayedYear)
        firstPlayedMonth = parseInt(firstPlayedMonth)
        if (!Number.isNaN(firstPlayedMonth) && firstPlayedMonth) {
          value.push(firstPlayedMonth)
          firstPlayedDay = parseInt(firstPlayedDay)
          if (!Number.isNaN(firstPlayedDay) && firstPlayedDay) {
            value.push(firstPlayedDay)
          }
        }
      }
    }
    console.log(value)
    return value
  }.property('firstPlayedYear', 'firstPlayedMonth', 'firstPlayedDay'),

  actions: {
    addSource: function () {
      var model = this.get('model')
      var sources = model.get('sources')
      if (!sources) {
        model.set('sources', [])
        sources = model.get('sources')
      }
      sources.createFragment({})
    },

    add: function () {
      var model = this.get('model')
      // model.set('first_played')
      model.save().then(function () {
        this.transitionToRoute('albums.view', this.get('model'))
      }.bind(this))
    }
  }

});