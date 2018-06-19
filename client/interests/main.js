import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Router } from 'meteor/iron:router'

import './index.html'

const intereses = ['Futbol', 'Música', 'Arte', 'Tennis', 'Tecnología', 'Comida', 'Arquitectura', 'Medicina', 'Diseño', 'Construcción', 'Familia', 'Animales', 'Películas', 'Fiestas', 'Libros']

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
  

Template.listaIntereses.events({
    'click .btn-flat' (event) {
        Meteor.call('toggleInterest', event.target.dataset.tag)
    }
})

Template.interes.events({
    'click .azulmorado' (event) {
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