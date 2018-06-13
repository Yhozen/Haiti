import { Meteor } from 'meteor/meteor'
import { Fake } from 'meteor/anti:fake'


import { Chileno, Haitiano } from '../both/collections'
import googleInit from './accounts'


Meteor.startup(() => {
  [ Chileno, Haitiano ].forEach(fillCollection)
  googleInit()
})


function fillCollection(collection) {
  if (collection.find().count() === 0) {
    for (var i = 0; i < 50; i++) {
      collection.insert({
        nombre: Fake.word(),
        descripcion: Fake.sentence(7)
      })
    }
  }
}