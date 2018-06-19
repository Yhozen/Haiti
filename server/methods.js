import { Meteor } from 'meteor/meteor'

Meteor.methods({
  asignarLenguaje (language) {
    Meteor.users.update(Meteor.userId(), {$set: {'profile.language': language }})
  },
  updateDesc (desc) {
    Meteor.users.update(Meteor.userId(), {$set: {'profile.desc': desc }})
  },
  toggleInterest (interest) {
    let listOfInt = []
    if (Meteor.user().profile.interest) {
        listOfInt = Meteor.user().profile.interest
    }
    if (listOfInt.includes(interest)) {
        listOfInt = listOfInt.filter((x) => x != interest)
    } else {
        listOfInt.push(interest)
    }
    
    Meteor.users.update(Meteor.userId(), {$set: {'profile.interest':  listOfInt}})
  }
})
