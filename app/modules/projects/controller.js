import Ember from 'ember'

export default Ember.Controller.extend({
    showCreateProjectDialog: false,
    actions: {
      toggleCreateProjectDialog() {
        if(!this.get('showCreateProjectDialog')) {
            this.set('showCreateProjectDialog',true);
        }
      }
    }
});
