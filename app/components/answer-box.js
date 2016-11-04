import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        answercontent: this.get('answercontent'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('author', '');
      this.set('answercontent', '');
    }
  }
});
