import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author'),
        questioncontent: this.get('questioncontent'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
