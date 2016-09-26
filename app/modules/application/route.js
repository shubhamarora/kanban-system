import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    // in future index will be home page and server login option
    if(transition.targetName == "index") {
      this.transitionTo('projects');
    }
  }
});
