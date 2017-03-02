'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

function addNumbers(one, two) {
  return one+two;
}

//Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

server.route({
  method: 'GET',
  path: '/add/{one}/{two}',
  handler: function (request, reply) {
      const one = parseInt(request.params.one);
      const two = parseInt(request.params.two);
      return reply(addNumbers(one, two));
  }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
