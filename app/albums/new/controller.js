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
    let firstPlayedYear = this.get('firstPlayedYear')
    let firstPlayedMonth = this.get('firstPlayedMonth')
    let firstPlayedDay = this.get('firstPlayedDay')
    let value = []
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
    return value
  }.property('firstPlayedYear', 'firstPlayedMonth', 'firstPlayedDay'),

  actions: {
    addSource: function () {
      let model = this.get('model')
      let sources = model.get('sources')
      if (!sources) {
        model.set('sources', [])
        sources = model.get('sources')
      }
      sources.createFragment({})
    },

    add: function () {
      let model = this.get('model')
      // model.set('first_played')
      model.save().then(() => {
        this.transitionToRoute('albums.view', this.get('model'))
      })
    }
  }

});
