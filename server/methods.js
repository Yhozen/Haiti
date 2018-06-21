import { Meteor } from 'meteor/meteor'
import { Chats } from '../both/collections'

Meteor.methods({
  asignarLenguaje (language) {
    Meteor.users.update(Meteor.userId(), {$set: {'profile.language': language }})
  },
  updateDesc (desc) {
    Meteor.users.update(Meteor.userId(), {$set: {'profile.desc': desc }})
  },
  addFriend (id) {
    if (!Meteor.user().profile.friends || !Meteor.user().profile.friends.includes(id)) Meteor.users.update(Meteor.userId(), {$push: {'profile.friends':  id}})
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
  },
  openChat (id, text) {
    let chat = Chats.findOne({ ids: {"$all": [ id, Meteor.userId()] } })
    if (!chat) {
      console.log('creado chat')
      Chats.insert({ 
        ids: [Meteor.userId(), id],
        messages: [ {
          text,
          author: Meteor.userId()
        } ] 
      })
    } else {
      Chats.update(chat._id, {
        $push: { 'messages':  {
          author: Meteor.userId(),
          text
        }}
      })
    }
  }
})
