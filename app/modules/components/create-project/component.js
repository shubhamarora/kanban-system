import Ember from 'ember';

export default Ember.Component.extend({
  membersList: [{id:1,title:"Shubham"},{id:2,title:"Zinal"},{id:3,title:"Sumit"}],
  selectedMembers: null,
  didRender() {

  },
  actions: {
    updateMemberList(selected) {
      this.set("selectedMembers",selected);
    },
    closeDialog() {
      this.set('isDisplay',false);
    }
  }
});
