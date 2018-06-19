import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

import './index.html'

Template.login.rendered = function () {
    $('.modal').modal()
}
  