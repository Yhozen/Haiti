import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import './Layouts/Parts'

// Subscribe to the count for the current room.
Tracker.autorun(() => {
  Meteor.subscribe('allUserData')
})

Template.disconnect.events({
  'click a' (event) {
    AccountsTemplates.logout()
  }
})

