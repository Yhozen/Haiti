import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './index.html'

let groups = [
    {
        type: 'Futbol',
        name: 'Fifa siempre'
    }, {
        type: 'Música',
        name: 'John Lennon'
    }, {
        type: 'Música',
        name: 'The Rock Lovers'
    }, {
        type: 'Libros',
        name: 'Los principitos'
    }
]

Template.groups.helpers({
    groups () {
        return groups
    }
})
