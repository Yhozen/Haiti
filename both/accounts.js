
import { AccountsTemplates } from 'meteor/useraccounts:core'
import { $ } from 'meteor/jquery'

AccountsTemplates.configure({
    defaultLayout: 'LoginLayout',
    showAddRemoveServices: true,
    hideSignUpLink: true,
    hideSignInLink: true,
    //showForgotPasswordLink: true,
    onLogoutHook: function () {
      Router.go('home')
    },
  })

  let pwd = AccountsTemplates.removeField('password')
  AccountsTemplates.removeField('email')
  AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5,
    }, { 
        _id: "nombre",
        type: "text",
        displayName: "Nombre",
        required: true,
    }, { 
        _id: "apellido",
        type: "text",
        displayName: "Apellido",
        required: true,
    }, {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    pwd
  ])