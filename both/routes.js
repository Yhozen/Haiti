import { Meteor } from 'meteor/meteor'
import { Router } from 'meteor/iron:router'
import { T9n } from 'meteor/softwarerero:accounts-t9n'

T9n.setLanguage('es')

if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'MainLayout2',
    where: 'client',
    loadingTemplate: 'loading',
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

Router.route('/profile', {
  name: 'main',
  template: 'perfil',
  layoutTemplate: 'MainLayout',
  waitOn: () => [ Meteor.subscribe('allUserData') ],
  action: function () {
    this.render()
  }
})

Router.route('/user/:_id', {
  name: 'user',
  template: 'user',
  action () {
    this.render()
  },
  data () {
    let { _id } = this.params
    return Meteor.users.findOne({ _id })
  }
})


Router.route('/tags', {
  name: 'tags',
  template: 'tags',
  action: function () {
    this.render()
  }
})
Router.route('/friends', {
  name: 'amigos',
  template: 'amigos',
  waitOn: () => [ Meteor.subscribe('allUserData') ],
  action: function () {
    this.render()
  }
})
Router.route('/groups', {
  name: 'groups',
  template: 'groups',
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
