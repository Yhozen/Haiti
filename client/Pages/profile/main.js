import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { Materialize } from 'meteor/materialize:materialize'
import { toastr } from 'meteor/lamatyus:toastr'

import './index.html'

Template.perfil.helpers({
    idioma () {
        if (Meteor.user() && Meteor.user().profile.language === 0) {
        return 'kreyòl'
        } else {
        return 'español'
        }
    },
    capitalize: (string) => string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : null,

})

Template.perfil.onRendered(function () {
    Session.set('desc', Meteor.user().profile.desc)
    $('#desc').text(Session.get('desc'))
})

Template.perfil.events({
    'input' (event) {
        Session.set('desc', $('#desc').text())
    },
    'click #edit-desc' (event) {
        Meteor.call('updateDesc', Session.get('desc'), () => toastr.success('Descripción guardada'))
    }
})
