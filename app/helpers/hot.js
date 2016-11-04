import Ember from 'ember';

export function hot(params) {
  if (params[0] > 4) {
    return ("<img src='assets/shocked.png' alt='' />").htmlSafe();
  }
}

export default Ember.Helper.helper(hot);
