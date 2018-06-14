import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';

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

Template.test.events({
  'click #logout'(event) {
    AccountsTemplates.logout()
  }
})



