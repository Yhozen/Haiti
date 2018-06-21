import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Router } from 'meteor/iron:router'

import './index.html'
import { Chats } from '../../../both/collections'

Template.chatModal.rendered = function () {
    Meteor.subscribe('chats')
    $('.modal').modal()
}

const capitalize = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : null

Template.chatModal.helpers({
    messages () {
        let friendID = Router.current().params._id
        let chat = Chats.findOne({ ids: friendID })
        if (chat) {
            return chat.messages
        } else  {
            return null
        }
    },
    me (id) {
        if (id == Meteor.userId()) return true
        return false
    },
    nombre () {
        let user = Meteor.users.findOne({ _id: Router.current().params._id })
        return capitalize(user.profile.nombre) + ' ' + capitalize(user.profile.apellido)
    }
})

Template.bottomChat.events({
    'click button' (event) {
        sendMessage()
    },
    'keydown' (e) {
        let key = e.which || e.keyCode;
        if (key === 13) sendMessage()
      }
})

function sendMessage () {
    Meteor.call('openChat', Router.current().params._id, $('#chatInput').val(), () => $('#chatInput').val(''))
}

