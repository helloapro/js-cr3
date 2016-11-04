import Ember from 'ember';

export default Ember.Service.extend({
  // loggedIn: false,
  // questions: [],
  answers: [],
  // replies: [],

  // login() {
  //   this.set('loggedIn', true);
  // },
  // logout() {
  //   this.set('loggedIn', false);
  // },

  // includes(question) {
  //   return this.get('questions').includes('question');
  // },
  // add(question) {
  //   this.get('questions').pushObject(question);
  // },

  // includes(answer) {
  //   return this.get('answers').includes('answer');
  // },
  // addAnswer(answer) {
  //   this.get('answers').pushObject(answer);
  // },
  downvoteAnswer(answer) {
    this.get('answers').pushObject(answer);
    answer.set('downvote', answer.get('downvote') + 1);
    console.log(answer);
  },
  upvoteAnswer(answer) {
    this.get('answers').pushObject(answer);
    answer.set('upvote', answer.get('upvote') + 1);
    console.log(answer);
  }

  // includes(reply) {
  //   return this.get('replies').includes('reply');
  // },
  // add(reply) {
  //   this.get('replies').pushObject(reply);
  // },
  //
  // empty() {
  //   this.get('answers').setObjects([]);
  // }
});
