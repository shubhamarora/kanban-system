import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    $(".task-list__items").sortable({
      handle: ".task-card__title",
      connectWith: ".task-list__items",
      revert: true,
      placeholder: "task-card task-card--placeholder",
      start: function (event, ui) {
        ui.placeholder.html(ui.item.html());
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
