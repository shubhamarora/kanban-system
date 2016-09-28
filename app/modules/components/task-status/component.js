import Ember from 'ember';
export default Ember.Component.extend({
  tagName: "",
  showStatusList: false,
  statusMapping: {
    0: "Done",
    1: "On Hold",
    2: "In Process",
    3: "Send",
    4: "Schedule"
  },
  currentStatusValue: Ember.computed('status', function () {
    return this.get('statusMapping')[this.get('status')];
  }),
  actions: {
    setStatus(value) {
      this.set('status', value);
      this.set('showStatusList',false);
    },
    toggleStatusList() {
      this.toggleProperty('showStatusList');
    }
  }

});
