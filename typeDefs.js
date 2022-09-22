const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        user(id: ID!): User
    }

    type User {
        id: ID
        role: String
        userName: String
        password: String
        fullName: String
        contactNumber: String
        emailAddress: String
        subjects: [Subject]
        children: [Student]
    }

    type Subject {
        id: ID
        userid: ID
        name: String
        sections: [Section]
    }

    type Section {
        id: ID
        name: String
        students: [Student]
        subjects: [Subject]
    }

    type Student {
        id: ID
        sectionid: ID
        name: String
        parentid: ID
        attendances: [Attendance]
        exams: [Exam]
        remarks: [Remark]
    }

    type Attendance {
        id: ID
        isPresent: Boolean
        date: String
        studentid: ID
    }

    type Exam {
        id: ID
        topic: String
        date: String
        isPass: Boolean
        studentid: ID
    }

    type Remark {
        id: ID
        description: String
        date: String
        isMerit: Boolean
        studentid: ID
    }
`;


module.exports = typeDefs;