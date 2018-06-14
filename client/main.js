import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { $ } from 'meteor/jquery'
import { Router } from 'meteor/iron:router'

import { Chileno, Haitiano } from '../both/collections'
const intereses = ['Futbol', 'Música', 'Arte', 'Tennis', 'Tecnología', 'Comida', 'Arquitectura', 'Medicina', 'Diseño', 'Construcción', 'Familia', 'Animales', 'Películas', 'Fiestas', 'Libros']

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

Template.logoutButton.events({
  'click #logout'(event) {
    AccountsTemplates.logout()
  }
})

Template.lenguaje.events({
  'click #creol' (event) {
    Meteor.call('asignarLenguaje', 0)
  },
  'click #espanol' (event) {
    Meteor.call('asignarLenguaje', 1)
  },
  'click a' (event) {
    Router.go('interes')
  }
})
Template.listaIntereses.helpers({
  intereses: function() {
    var user = Meteor.user()
    if (user) {
      return formatIntereses(intereses, Meteor.user())
    }
    return false
  }
})


Template.listaIntereses.events({
  'click .btn-flat' (event) {
    Meteor.call('toggleInterest', event.target.dataset.tag)
    console.log(Meteor.user())
  }
})

Template.interes.events({
  'click .morado' (event) {
    Router.go('main')
  }
})

function formatIntereses (intereses, user) {
  return intereses.map(interes => {
    return {
      nombre: interes,
      activo: user.profile.interest.includes(interes)
    }
  })
}