import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  year: DS.attr('number'),
  comments: DS.attr('string'),
  first_played: DS.attr(),
  sources: MF.fragmentArray('source', { defaultValue: [] })
});
