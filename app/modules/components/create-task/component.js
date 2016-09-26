import Ember from 'ember';

export default Ember.Component.extend({
  isDisplay: false,
  actions: {
    closeDialog() {
      this.set('isDisplay',false);
    },
    openDialog() {
      this.set('isDisplay',true);
    }
  }
});
