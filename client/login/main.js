import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.login.rendered = function () {
    $('.modal').modal()
}
  