import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question) {
      var params = {
        author: this.get('author'),
        questioncontent: this.get('questioncontent'),
        notes: this.get('notes'),
      };
      this.sendAction('update', question, params);
      $('.dropdown-menu').hide();
    }
  }
});
