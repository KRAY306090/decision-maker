const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    avatar: String!
    decisions: [Decision]
}

type Decision {
    _id: ID
    name: String!
    pros: [{String}]
    cons: [{String}]
    active: Boolean!
}

type Query {
    user: User
    decision(_id: ID!): Decision

}

type Auth {
    token: ID
    user: User
}


type Mutation {
    addUser
    addDecision
    updateUser
    updateDecision
    login
    deleteDecision
}

`;

module.exports = typeDefs;