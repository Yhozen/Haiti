import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import './index.html'

Template.perfil.helpers({
    idioma () {
        if (Meteor.user() && Meteor.user().profile.language === 0) {
        return 'kreyòl'
        } else {
        return 'español'
        }
    },
    capitalize: (string) => string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : null
})

Template.perfil.events({
    'input' (event) {
        $('#desc').text()
    }
})
