import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './index.html'

Template.user.helpers({
    idioma (n) {
        if (n == 0) {
        return 'kreyòl'
        } else {
        return 'español'
        }
    },
    capitalize: (string) => string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : null,
})