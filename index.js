const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const port = process.env.PORT || 3030;

server
    .listen(port)
    .then((info) => {
        console.log('GraphQL server running on port ' + port);
    });