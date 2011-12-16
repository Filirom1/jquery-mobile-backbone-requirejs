define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/OneView',
  'js/views/TwoView',
  'js/views/PopupView'
], function($, _, Backbone, OneView, TwoView, PopupView){
  var Router = {
    one: function(){
      new OneView().render();
    },

    two: function(){
      new TwoView().render();
    },

    popup: function(){
      new PopupView().render();
    }
  };

  new $.mobile.Router({
    "#one": { handler: Router.one, events: "bs" },
    "#two": { handler: Router.two, events: "bs" },
    "#popup": { handler: Router.popup, events: "bs" }
  });
});
