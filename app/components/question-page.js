import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    updateSort() {
      var value = this.$('#sortedAnswers').val();
      this.set('sortBy', [value]);
    }
  }
});
