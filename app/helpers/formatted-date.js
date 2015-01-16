/* global moment */

import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper((val) => {
  if (Ember.isArray(val)) {
    if (val.length === 1) {
      return moment.utc([val[0]]).format('YYYY')
    } else if (val.length === 2) {
      return moment.utc([val[0], val[1] - 1]).format('YYYY-MM')
    } else if (val.length === 3) {
      return moment.utc([val[0], val[1] - 1, val[2]]).format('YYYY-MM-DD')
    }
  } else if (val) {
    return moment.utc(val).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return ''
  }
})
