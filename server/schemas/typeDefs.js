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
    username: String!
    name: String!
    pros: [String]
    cons: [String]
    active: Boolean!
}

type Query {
    me: User
    users: [User]
    user(username: String!)
    decision(_id: ID!): Decision
    decisions(username: String!, active: Boolean!): [Decision]

}

type Auth {
    token: ID
    user: User
}


type Mutation {
    addUser(username: String!, email: String!, password: String!, avatar: String!): Auth
    addDecision(name: String!, pros: [String], cons: [String], active: Boolean!): Decision
    updateUser(username: String!, email: String!, password: String!, avatar: String!): User
    updateDecision(name: String!, pros: [String], cons: [String], active: Boolean!): Decision
    login(email: String!, password: String!): Auth
    deleteDecision(_id: ID!): Decision
}

`;

module.exports = typeDefs;