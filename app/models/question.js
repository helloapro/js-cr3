import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  questioncontent: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
