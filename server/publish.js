import { Meteor } from 'meteor/meteor'

import { Chileno, Haitiano } from '../both/collections'

Meteor.publish('chileno', () => Chileno.find() )
Meteor.publish('haitiano', () => Haitiano.find() )