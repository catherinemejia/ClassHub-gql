const { graphql } = require('graphql');
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { ApolloServer } = require('apollo-server');
const { TEACHER_QUERY, PARENT_QUERY } = require('./queries')

describe("resolvers", () => {
    const testServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    it("should not return children when user is Teacher", async () => {
        const response = await testServer.executeOperation({query: TEACHER_QUERY});
        const result = JSON.parse(JSON.stringify(response));
        expect(result.data.user.children.length).toBe(0);
    });

    it("should have subjects when user is Teacher", async () => {
        const result = await testServer.executeOperation({query: TEACHER_QUERY});
        const res = JSON.parse(JSON.stringify(result));
        expect(res.data.user.subjects.length).toBeGreaterThan(0);
    });

    it("should not return subjects when user is Parent", async () => {
        const result = await (await testServer.executeOperation({query: PARENT_QUERY}));
        const res = JSON.parse(JSON.stringify(result));
        expect(res.data.user.subjects.length).toBe(0);
    });

    it("should return children when user is Parent", async () => {
        const response = await testServer.executeOperation({query: PARENT_QUERY});
        const result = JSON.parse(JSON.stringify(response));
        console.log(result);
        expect(result.data.user.children.length).toBeGreaterThan(0);
    });

});
