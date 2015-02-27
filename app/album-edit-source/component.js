import Ember from 'ember';

export default Ember.Component.extend({

  locations: [
    { id: 'google-music', label: 'Google Music' },
    { id: 'spotify', label: 'Spotify' },
    { id: 'foobar2000', label: 'foobar2000' }
  ],

  formats: [
    { id: 'MP3', label: 'Lossy (MP3)' },
    { id: 'MPC', label: 'Lossy (MPC)' },
    { id: 'TAK', label: 'Lossless (TAK)' },
    { id: 'APE', label: 'Lossless (APE)' },
    { id: 'FLAC', label: 'Lossles (FLAC)' },
    { id: 'Mixed', label: 'Mixed' }
  ],

  isFoobar: function () {
    return this.source.get('location') === 'foobar2000'
  }.property('source.location'),

  isNotSpotify: function () {
    return this.source.get('location') !== 'spotify'
  }.property('source.location'),

  actions: {
    deleteSource: function () {
      let sources = this.get('sources')
      sources.removeFragment(this.get('source'))
    }
  }
});
