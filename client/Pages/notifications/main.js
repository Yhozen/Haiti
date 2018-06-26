import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import  Materialize from 'meteor/materialize:materialize'

Template.notificationDrop.events({
    'click' (event) {
        document.getElementById("myDropdown").classList.toggle("show");
    }
})
Template.body.events({
    'click' (event) {
        if (!event.target.matches('.dropbtn')&&!event.target.matches('i')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
    }
})