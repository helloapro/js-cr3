import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        author: this.get('author'),
        questioncontent: this.get('questioncontent'),
        notes: this.get('notes'),
        upvote: 0,
        downvote: 0,
        date: moment()
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
