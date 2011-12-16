define([
       'underscore',
       'backbone',
       'text!templates/one.html'
], function(_, Backbone, tmpl){

  var OneView = Backbone.View.extend({
    el: '#one',
    template: _.template(tmpl),

    render: function() {
      $(this.el).html(this.template());
      return this;
    }

  });

  return OneView;

});
