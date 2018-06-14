import { Meteor } from 'meteor/meteor'

Meteor.methods({
  asignarLenguaje (userId, language) {
    Meteor.users.update(userId, {$set: {'profile.language': language }})
  }
})
