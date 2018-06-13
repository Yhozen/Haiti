import { Meteor } from 'meteor/meteor'
import { Router } from 'meteor/iron:router'


Router.route('/', {
  name: 'home',
  template: 'login',
  layoutTemplate: 'layout',
  action: function () {
    this.render()
  }
})/*

Router.route('/estado', {
  name: 'estado',
  template: 'estado',
  action: function () {
    this.render()
  }
})

Router.route('/incidencia', {
  name: 'incidencia',
  template: 'incidencia',
  action: function () {
    this.render()
  }
})

Router.route('/graficas', {
  name: 'graficas',
  template: 'graficas',
  waitOn () {
    return Meteor.subscribe('previusstates')
  },
  action () {
    this.render()
  }
})
Router.route('/cuenta', {
  name: 'cuenta',
  template: 'cuenta',
  action: function () {
    this.render()
  }
})*/
