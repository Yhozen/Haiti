import { Meteor } from 'meteor/meteor'
import { Chats } from '../both/collections'

Meteor.publish("allUserData", () => Meteor.users.find() )

Meteor.publish("chats", () => Chats.find({ ids: Meteor.userId() }) )