# Cookies

A visitor pass. In first visit server store some data to in the browser, again in future when we visit the same server, previously stored data (cookie) is also sent to the server.

Two libraries are available in express :

1. express-session (client side info. is stored on the server ) :
   each cookie is given a unique id and stored on the browser, whereas the data related to corrosponding cookie is store on the server, with unique id. This is costly, because we are require to store more data on the server.
2. cookie-session (client side info. is store on the browser) :
   all the data related to user is store on the browser it self. which makes it less secure then the express session middleware.

### NOTE :

1. Databases are designed for persisting data, whereas servers are designed to run logic.
2. System can have a state, but system should have a designeted place to store the state.
