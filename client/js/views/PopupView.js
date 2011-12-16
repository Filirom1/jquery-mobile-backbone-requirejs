define([
       'underscore',
       'backbone',
       'text!templates/popup.html'
], function(_, Backbone, tmpl){

  var PopupView = Backbone.View.extend({
    el: '#popup',
    template: _.template(tmpl),

    render: function() {
      $(this.el).html(this.template());
      return this;
    }

  });

  return PopupView;

});
