define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/OneView',
  'js/views/TwoView',
  'js/views/PopupView'
], function($, _, Backbone, OneView, TwoView, PopupView){
  new $.mobile.Router({
    "/one":   { handler: 'one', events: "bc" },
    "/two":   { handler: 'two', events: "bc" },
    "/popup": { handler: 'popup', events: "bc" }
  }, {
    one: function(){
      new OneView().render();
    },

    two: function(){
      new TwoView().render();
    },

    popup: function(){
      new PopupView().render();
    },

    'default': function(){
      console.log('No route found.');
    }
  }, {
    ajaxApp: true,
    defaultHandler: 'default'
  });
});
