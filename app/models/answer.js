import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answercontent: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  replies: DS.hasMany('reply', { async: true }),
  upvote: DS.attr('number'),
  downvote: DS.attr('number'),
  date: DS.attr('string'),

  ranking: Ember.computed('upvote', 'downvote', function() {
    return parseInt(this.get('upvote') - this.get('downvote'));
  }),
  userSession: Ember.inject.service()
});
