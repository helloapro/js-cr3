import Ember from 'ember';

export default Ember.Component.extend({
  userSession: Ember.inject.service(),
  actions: {
    upvoteAnswer(answer) {
      this.get('userSession').upvoteAnswer(answer);
    }
  }
});
