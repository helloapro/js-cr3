import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    click() {
      Ember.$('.ui.labeled.icon.sidebar').sidebar('toggle');
    }
  }
});
