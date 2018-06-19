import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Router } from 'meteor/iron:router'

import './index.html'

Template.lenguaje.events({
    'click #creol' (event) {
      Meteor.call('asignarLenguaje', 0)
    },
    'click #espanol' (event) {
      Meteor.call('asignarLenguaje', 1)
    },
    'click a' (event) {
      Router.go('interes')
    }
})