import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    click() {
      $('.ui.labeled.icon.sidebar').sidebar('toggle');
    }
  }
});
