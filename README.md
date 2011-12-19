A jQuery Mobile + Backbone + RequireJs stack
=============================================

jQuery mobile looks great. Unfortunately, it is written for server side
processing. If you want to use jQuery mobile on client side only (for a
PhoneGap application for example), you will have to do some happy hacking.

Model, Collections and View
---------------------------

I really like the model centric approach of Backbone.
When my model is updated, an event is triggered and my views are
automatically updated. It's like magic, and it's quite small (good point
for mobile).

I also like the Backbone router, with pushState, but here we will not
use it :(

Routing
-------

Backbone and jQuery mobile both has Routers.

jQM Router handle transition well. Go left, when the page change, and go right when you click back. Very smooth! Unfortunatly, jQM doesn't accept parameters in routes.

So if you need this, you will have to listen to `pagebeforechange` event
to prevent the default behaviour and then call `$.mobile.changePage() ` manualy.
Manualy, you will have to say the route to trigger, the direction of the animation (left or right ?), ...

There is an exemple of how to do this with the Backbone Router here : <https://github.com/addyosmani/backbone-mobile-search>

Or you can use the [jQuery Mobile Router plugin](https://github.com/azicchetti/jquerymobile-router)

The jQM Router plugin enhanced the default jQM Router but allows parameters in the URL.

When you define your pages in HTML, you will need to set the `data-url`
property on each `data-role="page"` to the url defined in the jQM Router.

In so doing, jQM knows what URL to trigger when you (or jQM) call
`$.mobile.changePage('pageID')`

For more details take a look at <http://jquerymobile.com/demos/1.0/docs/pages/page-navmodel.html>. You will learn that the index page if the first `data-role="page"` present in the DOM.


DOM injection
-------------

jQM needs every `data-role="page"` present in the DOM when jQM init.
That's why my template index.html contains every pages. Pages could be
empty. The important thing is that the container is here, with `id`,
`data-role="page"` and `data-url` present.

    <body>
      <div data-role="page" id="one" data-url="#one"> </div><!-- /page one -->
      <div data-role="page" id="popup" data-url="#popup"> </div><!-- /page popup -->
      <div data-role="page" id="two" data-url="#two" data-theme="a"> </div><!-- /page two -->
    </body>

After init, the first page `id="one"` is loaded. The `data-url`:
`http://youwebsite.com/#one` is called. And your Router will be
triggered to handle it.

    new $.mobile.Router({
      "#one":   { handler: 'one', events: "bc" },
      "#two":   { handler: 'two', events: "bc" },
      "#popup": { handler: 'popup', events: "bc" }
    }, {
      one: function(){
        console.log('Yeahh it works')
      },
      ...
    });

If the page change, the same thing happens, the url triggered is given by
the data-url.

Now, if we want to inject HTML before rendering the view, we will need
to do it before the page is created : beforeCreate (bc).

If we did it after page creation, for exemple before show (bs), elements
like `data-role="header"`, `data-role="footer"`, ... will not be
enhanced by jQM after injection.


Templates and code structure
-----------------------------

Personnally I hate to debug HTML in JS files. To avoid this I use
[RequireJS](http://www.requirejs.org/) with the [text plugin](http://www.requirejs.org/docs/api.html#text)

Look the syntax is quite simple :

    define([
           'data',
           'text!templates/one.html'
    ], function(data, tmpl){
      // populate the template
      var html = _.template(tmpl, data),
    });

RequireJS is also a good help with Backbone application. The famous Todo
exemple is great, but everything is in one single file. Arrgggh.

With RequireJS you can split your code in smaller units.

Take a look at the Todo exemple `Backbone + RequireJS` : <https://github.com/addyosmani/todomvc/tree/master/todo-example/backbone+require>

PushState
---------

[jQM](http://jquerymobile.com/demos/1.0/docs/pages/page-navmodel.html) and [jQM Router plugin](https://github.com/azicchetti/jquerymobile-router/issues/2) are said to be PushState able.
Unfortunately, I didn't find a way to make it work in a Single Page
Web App. The URL is nice, the navigation works well, but if you reload
the page you always come back to the first page (because your url does
not contain a hash) :(

If you figure how to make this work. Please tell me :)


And now ?
----------
I explain you what I did in this repo. You are now able to do this on
your own, or you can clone it :)
