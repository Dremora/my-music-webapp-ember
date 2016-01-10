import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  accurate_rip: DS.attr('string'),
  comments: DS.attr('string'),
  cue_issues: DS.attr('string'),
  discs: DS.attr('number'),
  download: DS.attr('string'), // TODO: string or array
  edition: DS.attr('string'),
  format: DS.attr('string'),
  location: DS.attr('string'),
  mbid: DS.attr('string'),
  tag_issues: DS.attr('string')
});
