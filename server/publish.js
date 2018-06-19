import { Meteor } from 'meteor/meteor'

Meteor.publish("allUserData", () => Meteor.users.find() )