import $ from 'jquery';
import _ from 'underscore';

import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';

var myPetList = new PetList();
myPetList.fetch();

$(document).ready(function() {
  var myPetListView = new PetListView({
    model: myPetList,
    template: _.template($('#pet-card-template').html()),
    detailsTemplate: _.template($('#pet-info-template').html()),
    el: 'main'
  });
  myPetListView.render();
});
