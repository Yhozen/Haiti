import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { $ } from 'meteor/jquery'

import { Chileno, Haitiano } from '../both/collections'

import './main.html'

// Subscribe to the count for the current room.
Tracker.autorun(() => {
  Meteor.subscribe('chileno')
  Meteor.subscribe('haitiano')
})

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

Template.disconnect.events({
  'click a' (event) {
    AccountsTemplates.logout()
  }
})

