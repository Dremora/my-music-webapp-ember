import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: config.RESTNamespace,

  shouldBackgroundReloadRecord() {
    return true
  }
});