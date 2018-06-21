import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

Template.chatModal.rendered = function () {
    $('.modal').modal()
    Meteor.subscribe('chats')
}
  
Template.bottomChat.events({
    'click button' (event) {
        Meteor.call('openChat', Session.get('chatUser'), $('#chatInput').val())
        
    }
})

