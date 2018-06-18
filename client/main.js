import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { $ } from 'meteor/jquery'
import { Router } from 'meteor/iron:router'
import { _ } from 'meteor/underscore'

import { Chileno, Haitiano } from '../both/collections'
const intereses = ['Futbol', 'Música', 'Arte', 'Tennis', 'Tecnología', 'Comida', 'Arquitectura', 'Medicina', 'Diseño', 'Construcción', 'Familia', 'Animales', 'Películas', 'Fiestas', 'Libros']

import './main.html';

// Subscribe to the count for the current room.
Tracker.autorun(() => {
  Meteor.subscribe('chileno')
  Meteor.subscribe('haitiano')
})

Template.login.rendered = function () {
  $('.modal').modal()
}

Template.perfil.rendered = function () {
}

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
  intereses () {
    let user = Meteor.user()
    if (user && user.profile && user.profile.interest) {
      return formatIntereses(intereses, Meteor.user())
    } else {
      return intereses.map(interes => {
        return {
          nombre: interes,
          activo: false
        }
      })
    }
    return false
  }
})

Template.perfil.helpers({
  idioma () {
    if (Meteor.user() && Meteor.user().profile.language === 0) {
      return 'creol'
    } else {
      return 'español'
    }
  },
  capitalize: (string) => string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : null
})

Template.perfil.events({
  'input' (event) {
    $('#desc').text()
  }
})

Template.listaIntereses.events({
  'click .btn-flat' (event) {
    Meteor.call('toggleInterest', event.target.dataset.tag)
  }
})

Template.interes.events({
  'click .morado' (event) {
    Router.go('main')
  }
})
Template.disconnect.events({
  'click a' (event) {
    AccountsTemplates.logout()
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