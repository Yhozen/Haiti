import { Meteor } from 'meteor/meteor'
import { Router } from 'meteor/iron:router'
import { T9n } from 'meteor/softwarerero:accounts-t9n'

T9n.setLanguage('es')

if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'MainLayout',
    where: 'client'
  })
}

Router.route('/', {
  name: 'home',
  template: 'login',
  layoutTemplate: 'LoginLayout',
  onBeforeAction: redirectLogged,
  action: function () {
    this.render()
  }
})


Router.route('/lenguaje', {
  name: 'lenguaje',
  template: 'lenguaje',
  layoutTemplate: 'LoginLayout',
  action: function () {
    this.render()
  }
})
Router.route('/interes', {
  name: 'interes',
  template: 'interes',
  layoutTemplate: 'LoginLayout',
  action: function () {
    this.render()
  }
})

Router.route('/perfil', {
  name: 'main',
  template: 'perfil',
  action: function () {
    this.render()
  }
})
Router.route('/tags', {
  name: 'tags',
  template: 'tags',
  layoutTemplate: 'MainLayout2',
  action: function () {
    this.render()
  }
})
Router.route('/amigos', {
  name: 'amigos',
  template: 'amigos',
  layoutTemplate: 'MainLayout2',
  action: function () {
    this.render()
  }
})
function redirectLogged () {
  let user = Meteor.user()
  if (user) {
    if (user.profile.interest) {
      Router.go('main')
    } else {
      Router.go('lenguaje')
    }
  } else {
    this.next()
  }
}

/*

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
