import Ember from 'ember';

export default Ember.Component.extend({
    membersList: [{id:1,title:"Shubham"},{id:2,title:"Zinal"},{id:3,title:"Sumit"}],
    isDisplay: false,
    selectedMembers: null,
    dialogPosition: "",
    actions: {
        updateMemberList(selected) {
            this.set("selectedMembers",selected);
        },
        showDialog() {
            this.set('dialogPosition',"");
            let windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                elementTop = this.$().find('.create-project-card').offset().top,
                elementleft = this.$().find('.create-project-card')
                  .offset().left;
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
        closeDialog() {
            this.set('isDisplay',false);
        },
        createProject() {
            this.set('isDisplay',false);
            this.get('projectList').pushObject({id:new Date(),title:this.get('title'),description: this.get('description'),total_members: this.get('selectedMembers').length});
        }
    }
});
