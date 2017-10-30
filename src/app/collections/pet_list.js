import Backbone from 'backbone';

import Pet from 'app/models/pet';

var PetList = Backbone.Collection.extend({
  model: Pet,
  url: 'http://petdibs.herokuapp.com/pets'
});

export default PetList;
