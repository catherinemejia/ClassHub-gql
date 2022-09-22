const { graphql } = require('graphql'); 
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

describe("resolvers", () => {
    it("should return the correct user based on ID", async () => {
        const user = { 'id': '1', 'userName': 'gambore', 'password': 'password123', 'fullName': 'Rey Gamboa', 'contactNumber': '09173057623', 'emailAddress': 'rey@school.edu', 'role': 'Teacher' }
        
        const result = resolvers.Query.user(null, {id: 1})

        await expect(result).resolves.toEqual(user)
    });

    it("should return the correct user based on ID", async () => {
        const user = { 'id': '1', 'userName': 'gambore', 'password': 'password123', 'fullName': 'Rey Gamboa', 'contactNumber': '09173057623', 'emailAddress': 'rey@school.edu', 'role': 'Teacher' }
        
        const result = resolvers.User.subjects({id: 1})
        await result;
        console.log(result);

        //await expect(result).resolves.toEqual(user)
    });


});