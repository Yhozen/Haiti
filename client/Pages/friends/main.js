import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import './index.html'

Template.amigos.helpers({
    personas () {
        let users = Meteor.users.find()
        return users
    }
})


Template.persona.helpers({
    capitalize: (string) => string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : null,
})

Template.persona.events({
    'click .add' (event) {
        Meteor.call('addFriend',this._id)
    },
    'click .visit' (event) {
        Session.set('chatUser', this._id)
    }
})