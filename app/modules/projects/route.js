import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {
        id:1,
        title: "Publishing",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12
      },
      {
        id:2,
        title: "Paid",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {
        id:3,
        title: "Core",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {
        id:4,
        title: "Engagement",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {
        id:5,
        title: "Distributed",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {
        id:6,
        title: "Social Selling",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {
        id:7,
        title: "RTM",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12}
    ]
  },
  actions: {
    transitionToProject(param) {
      this.transitionTo('project', {id: param});
    }
  }
});
