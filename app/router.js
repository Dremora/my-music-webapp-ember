import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("albums.new", { path: "/albums/new" });
  this.route("albums.view", { path: "/albums/:album_id" });
  this.route("albums.edit", { path: "/albums/:album_id/edit" });
});

export default Router;
