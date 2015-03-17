import DS from 'ember-data';
// import EmberValidations from 'ember-validations';

export default DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  year: DS.attr('number'),
  comments: DS.attr('string'),
  first_played: DS.attr('first-played'),
  sources: DS.hasManyFragments('source')
});
