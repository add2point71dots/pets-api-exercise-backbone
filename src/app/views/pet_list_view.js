import Backbone from 'backbone';
import Pet from '../models/pet.js';
import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('#pet-list').empty();
    var that = this;

    this.model.each(function(pet) {
      var petView = new PetView({
        model: pet,
        template: that.template,
        tagName: 'li'
      });
      that.$('#pet-list').append(petView.render().el);
    });
    return this;
  },
  events: {
    'click #add-pet': 'addPet',
    'click li': 'showPet'
  },
  getFormData: function() {
    var formName = this.$('#name').val();
    this.$('#name').val('');
    var formBreed = this.$('#breed').val();
    this.$('#breed').val('');
    var formAge = this.$('#age').val();
    this.$('#age').val('');
    var formOwner = this.$('#owner').val();
    this.$('#owner').val('');
    var formAbout = this.$('#about').val();
    this.$('#about').val('');
    var formVaccinated = this.$('#vaccinated').is(':checked');
    this.$('#vaccinated').prop('checked', false);

    return {
      name: formName,
      breed: formBreed,
      age: formAge,
      owner: formOwner,
      about: formAbout,
      vaccinated:  formVaccinated
    };
  },
  addPet: function() {
    var pet = new Pet(this.getFormData());
    this.model.create(pet);
  },
  showPet: function() {
    var petDetailsView = new PetDetailsView({
      model: pet,
      template: this.detailsTemplate,
    });
  }
});

export default PetListView;
