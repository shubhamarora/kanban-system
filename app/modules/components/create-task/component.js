import Ember from 'ember';

export default Ember.Component.extend({
  isDisplay: false,
  dialogPosition: "",
  actions: {
    closeDialog() {
        this.set('isDisplay',false);
    },
    openDialog() {
        this.set('dialogPosition',"");
        let windowWidth = $(window).width(),
          windowHeight = $(window).height(),
          elementTop = this.$().offset().top,
          elementleft = this.$().offset().left;
        if(elementleft > windowWidth/2) {
            this.set('dialogPosition', "create-dialog--left " + this.get('dialogPosition'))
        } else {
            this.set('dialogPosition', "create-dialog--right " + this.get('dialogPosition'))
        }
        if(elementTop > windowHeight/2) {
            this.set('dialogPosition', "create-dialog--top " + this.get('dialogPosition'))
        } else {
            this.set('dialogPosition', "create-dialog--bottom " + this.get('dialogPosition'))
        }
        this.set('isDisplay',true);
    },
    createTask() {
        this.get('data.tasks').pushObject({id:new Date(),title:this.get('title'),description: this.get('description'),status: this.get('status')});
        this.set('isDisplay',false);
    }
  }
});
