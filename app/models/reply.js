import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  replycontent: DS.attr(),
  answer: DS.belongsTo('answer', { async: true }),
  date: DS.attr('string'),
});
