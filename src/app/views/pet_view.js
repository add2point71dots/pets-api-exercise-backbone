import Backbone from 'backbone';

var PetView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template({pet: this.model.toJSON()});
    this.$el.html(compiledTemplate);
    return this;
  },
  events: { //hash of dom events and functions that go with them
    'click .delete-pet': 'deletePet',
  },
  deletePet: function() {
    this.model.destroy();
  },
});

export default PetView;
