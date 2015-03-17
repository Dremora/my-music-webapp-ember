import Ember from 'ember';

export default Ember.Controller.extend({

  firstPlayedMode: 'now',
  firstPlayedYear: null,
  firstPlayedMonth: null,
  firstPlayedDay: null,

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
    } else if (this.get('isSpecificTime')) {
      return new Date().valueOf()
    } else {
      return undefined
    }
  }.property('specificDateValue', 'isSpecificDate'),

  actions: {
    addSource: function () {
      this.get('model').get('sources').createFragment({})
    },

    add: function () {
      let model = this.get('model')
      model.set('first_played', this.get('dateValue'))
      model.save().then(() => {
        this.transitionToRoute('albums.view', this.get('model'))
      })
    }
  }

});
