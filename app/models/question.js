import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  questioncontent: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  upvote: DS.attr('number'),
  downvote: DS.attr('number'),
  date: DS.attr('string'),

  ranking: Ember.computed('upvote', 'downvote', function() {
    return parseInt(this.get('upvote') - this.get('downvote'));
  }),
});
