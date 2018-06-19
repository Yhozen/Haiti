import { Meteor } from 'meteor/meteor'
import { Fake } from 'meteor/anti:fake'

import googleInit from './accounts'

Meteor.startup(() => {
  googleInit()
})


