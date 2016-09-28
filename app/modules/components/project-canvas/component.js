import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('data', [
      {"id": 1,
        name: "Shubham Arora",
        tasks: [
          {id: "1",title: "Publishing Data 1", description: "Include any description you are looking to include", status: 1},
          {id: "2",title: "Publishing Data 2", description: "Include any description you are looking to include", status: 2},
          {id: "3",title: "Publishing Data 3", description: "Include any description you are looking to include", status: 3},
          {id: "4",title: "Publishing Data 4", description: "Include any description you are looking to include", status: 4},
          {id: "5",title: "Publishing Data 5", description: "Include any description you are looking to include", status: 0},
          {id: "6",title: "Publishing Data 6", description: "Include any description you are looking to include", status: 4},
          {id: "7",title: "Publishing Data 7", description: "Include any description you are looking to include", status: 4}
        ]
      },
      {"id": 2,
        name: "Sumit Kushwaha",
        tasks: [
          {id: "11",title: "Publishing Data 11", description: "Include any description you are looking to include", status: 1},
          {id: "12",title: "Publishing Data 12", description: "Include any description you are looking to include", status: 0},
          {id: "13",title: "Publishing Data 13", description: "Include any description you are looking to include", status: 3},
          {id: "14",title: "Publishing Data 14", description: "Include any description you are looking to include", status: 4},
          {id: "15",title: "Publishing Data 15", description: "Include any description you are looking to include", status: 0},
          {id: "16",title: "Publishing Data 16", description: "Include any description you are looking to include", status: 4},
          {id: "17",title: "Publishing Data 17", description: "Include any description you are looking to include", status: 4}
        ]
      },
      {"id": 3,
        name: "Rajat Barman",
        tasks: [
          {id: "21",title: "Publishing Data 21", description: "Include any description you are looking to include", status: 3},
          {id: "22",title: "Publishing Data 22", description: "Include any description you are looking to include", status: 2},
          {id: "23",title: "Publishing Data 23", description: "Include any description you are looking to include", status: 1},
          {id: "24",title: "Publishing Data 24", description: "Include any description you are looking to include", status: 4},
          {id: "25",title: "Publishing Data 25", description: "Include any description you are looking to include", status: 0},
          {id: "26",title: "Publishing Data 26", description: "Include any description you are looking to include", status: 4},
          {id: "27",title: "Publishing Data 27", description: "Include any description you are looking to include", status: 4}
        ]
      },
      {"id": 4,
        name: "Abhishek",
        tasks: [
          {id: "21",title: "Publishing Data 21", description: "Include any description you are looking to include", status: 3},
          {id: "22",title: "Publishing Data 22", description: "Include any description you are looking to include", status: 2},
          {id: "23",title: "Publishing Data 23", description: "Include any description you are looking to include", status: 1},
          {id: "24",title: "Publishing Data 24", description: "Include any description you are looking to include", status: 4},
          {id: "25",title: "Publishing Data 25", description: "Include any description you are looking to include", status: 0},
          {id: "26",title: "Publishing Data 26", description: "Include any description you are looking to include", status: 4},
          {id: "27",title: "Publishing Data 27", description: "Include any description you are looking to include", status: 4}
        ]
      },
      {"id": 5,
        name: "Gaurav",
        tasks: [
          {id: "21",title: "Publishing Data 21", description: "Include any description you are looking to include", status: 3},
          {id: "22",title: "Publishing Data 22", description: "Include any description you are looking to include", status: 2},
          {id: "23",title: "Publishing Data 23", description: "Include any description you are looking to include", status: 1},
          {id: "24",title: "Publishing Data 24", description: "Include any description you are looking to include", status: 4},
          {id: "25",title: "Publishing Data 25", description: "Include any description you are looking to include", status: 0},
          {id: "26",title: "Publishing Data 26", description: "Include any description you are looking to include", status: 4},
          {id: "27",title: "Publishing Data 27", description: "Include any description you are looking to include", status: 4}
        ]
      },
      {"id": 6,
        name: "Brajendra",
        tasks: [
          {id: "21",title: "Publishing Data 21", description: "Include any description you are looking to include", status: 3},
          {id: "22",title: "Publishing Data 22", description: "Include any description you are looking to include", status: 2},
          {id: "23",title: "Publishing Data 23", description: "Include any description you are looking to include", status: 1},
          {id: "24",title: "Publishing Data 24", description: "Include any description you are looking to include", status: 4},
          {id: "25",title: "Publishing Data 25", description: "Include any description you are looking to include", status: 0},
          {id: "26",title: "Publishing Data 26", description: "Include any description you are looking to include", status: 4},
          {id: "27",title: "Publishing Data 27", description: "Include any description you are looking to include", status: 4}
        ]
      }
    ])
  },
  didInsertElement() {
      $(".task-list__scrollUp").droppable({
          over: function(event,ui) {
              $(this).closest(".task-list").find(".task-list__items").autoscroll({
                  direction: 'up',
                  step: 200,
                  scroll: true
              });
          },
          out: function(event,ui) {
              $(this).closest(".task-list").find(".task-list__items").autoscroll('destroy');
          }
      });
      $(".task-list__scrollDown").droppable({
          over: function(event,ui) {
              $(this).closest(".task-list").find(".task-list__items").autoscroll({
                  direction: 'down',
                  step: 200,
                  scroll: true
              });
          },
          out: function(event,ui) {
              $(this).closest(".task-list").find(".task-list__items").autoscroll('destroy');
          }
      });
      $(".project__container").sortable({
          items: ".task-card",
          handle: ".task-card__title",
          connectWith: ".task-list__items",
          revert: true,
          start: function (event, ui) {
              ui.item.addClass('task-card--dragged');
          },
          stop: function (event, ui) {
              ui.item.removeClass('task-card--dragged');
          },
          helper: function(event, element) {
              return element.clone().addClass('task-card--dragged').appendTo(".project__container");
          }
      });
  }
});
