import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import { Chileno, Haitiano } from '../both/collections'

import './Layouts/Parts.html'

// Subscribe to the count for the current room.
Tracker.autorun(() => {
  Meteor.subscribe('chileno')
  Meteor.subscribe('haitiano')
})

Template.disconnect.events({
  'click a' (event) {
    AccountsTemplates.logout()
  }
})

