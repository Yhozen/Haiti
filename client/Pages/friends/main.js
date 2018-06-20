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
    'click a' (event) {
        Meteor.call('addFriend',this._id)
    }
})