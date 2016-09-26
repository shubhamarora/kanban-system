import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {title: "Publishing",
      description: "It is a module which helps use to post in multiple channel at once.",
      total_members: 12},
      {title: "Paid",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {title: "Core",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {title: "Engagement",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {title: "Distributed",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {title: "Social Selling",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12},
      {title: "RTM",
        description: "It is a module which helps use to post in multiple channel at once.",
        total_members: 12}
    ]
  }
});
