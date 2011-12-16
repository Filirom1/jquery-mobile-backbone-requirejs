require({
  paths: {
    text: 'js/libs/amd/plugins/text',
    jquery: 'js/libs/jquery-1.7.1',
    jqueryM: 'js/libs/jquery.mobile-1.0',
    underscore: 'js/libs/underscore',
    backbone: 'js/libs/backbone',
    'jquery.mobile.router': 'js/libs/jquery.mobile.router'
  }
}, [
  'jquery',
  'jqueryM',
  'underscore',
  'backbone',
  'js/Router'
], function($, $$, _, Backbone, Router){

  $(function(){
  });
});
