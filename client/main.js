import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { $ } from 'meteor/jquery'
import { Router } from 'meteor/iron:router'

import { Chileno, Haitiano } from '../both/collections'

import './main.html';

// Subscribe to the count for the current room.
Tracker.autorun(() => {
  Meteor.subscribe('chileno')
  Meteor.subscribe('haitiano')
})

// Template.info.helpers({
//   posts() {
//     return Chileno.find()
//   },
// })

Template.login.rendered = function() {
  $('.modal').modal()
}

Template.logoutButton.events({
  'click #logout'(event) {
    AccountsTemplates.logout()
  }
})

Template.test.events({
  'click #creol' (event) {
    Meteor.call('asignarLenguaje', Meteor.userId(), 0)
  },
  'click #espanol' (event) {
    Meteor.call('asignarLenguaje', Meteor.userId(), 1)
  },
  'click a' (event) {
    Router.go('interes')
  }
})




