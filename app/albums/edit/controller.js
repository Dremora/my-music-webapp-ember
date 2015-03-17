import Ember from 'ember';

export default Ember.Controller.extend({

  firstPlayedMode: 'unknown',
  firstPlayedYear: null,
  firstPlayedMonth: null,
  firstPlayedDay: null,

  firstPlayedDidChange: function() {
    var firstPlayed = this.get('model').get('first_played')
    if (!firstPlayed) {
      this.set('firstPlayedMode', 'unknown')
      this.set('timestamp', null)
      this.set('firstPlayedYear', null)
      this.set('firstPlayedMonth', null)
      this.set('firstPlayedDay', null)
    } else if (typeof firstPlayed === 'number') {
      this.set('firstPlayedMode', 'timestamp')
      this.set('timestamp', firstPlayed)
      this.set('firstPlayedYear', null)
      this.set('firstPlayedMonth', null)
      this.set('firstPlayedDay', null)
    } else {
      this.set('firstPlayedMode', 'date')
      this.set('timestamp', null)
      this.set('firstPlayedYear', firstPlayed[0])
      this.set('firstPlayedMonth', firstPlayed[1])
      this.set('firstPlayedDay', firstPlayed[2])
    }
  }.observes('model.first_played'),

  isSpecificDate: function () {
    return this.get('firstPlayedMode') === 'date'
  }.property('firstPlayedMode'),

  isSpecificTime: function () {
    return this.get('firstPlayedMode') === 'timestamp'
  }.property('firstPlayedMode'),

  specificDateValue: function () {
    let year = parseInt(this.get('firstPlayedYear'))
    if (Number.isNaN(year) || !year) {
      return undefined
    }

    let month = parseInt(this.get('firstPlayedMonth'))
    if (Number.isNaN(month) || !month) {
      return [year]
    }

    let day = parseInt(this.get('firstPlayedDay'))
    if (Number.isNaN(day) || !day) {
      return [year, month]
    }
    return [year, month, day]
  }.property('firstPlayedYear', 'firstPlayedMonth', 'firstPlayedDay'),

  dateValue: function () {
    if (this.get('isSpecificDate')) {
      return this.get('specificDateValue')
    } else {
      return parseInt(this.get('timestamp'))
    }
  }.property('specificDateValue', 'isSpecificDate', 'timestamp'),

  actions: {
    save: function () {
      let model = this.get('model')
      model.set('first_played', this.get('dateValue'))
      model.save().then(() => {
        this.transitionToRoute('albums.view', this.get('model'))
      })
    },

    addSource: function () {
      let model = this.get('model')
      let sources = model.get('sources')
      if (!sources) {
        model.set('sources', [])
        sources = model.get('sources')
      }
      sources.createFragment({})
    }
  }

});
