define([
       'underscore',
       'backbone',
       'text!templates/two.html'
], function(_, Backbone, tmpl){

  var TwoView = Backbone.View.extend({
    el: '#two',
    template: _.template(tmpl),

    render: function() {
      $(this.el).html(this.template());
      return this;
    }

  });

  return TwoView;

});
