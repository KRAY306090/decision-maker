const { gql } = require('apollo-server-express');

const typeDefs = gql`

input UserInput {
    username: String
    email: String
    password: String
    avatar: String
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    avatar: String
    decisions: [Decision]
}

input DecisionInput {
    username: String!
    name: String!
    decisionText: String!
    pros: [String]
    cons: [String]
    active: Boolean!
}

type Decision {
    _id: ID
    username: String!
    name: String!
    decisionText: String!
    pros: [String]
    cons: [String]
    active: Boolean!
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    decision(_id: ID!): Decision
    decisions(username: String!, active: Boolean!): [Decision]

}

type Auth {
    token: ID
    user: User
}


type Mutation {
    addUser(username: String, email: String, password: String, avatar: String): Auth
    addDecision(name: String!, decisionText: String!, pros: [String], cons: [String], active: Boolean!): Decision
    updateUser(_id: ID!, input: UserInput): User
    updateDecision(_id: ID!, input: DecisionInput): Decision
    login(email: String!, password: String!): Auth
    deleteDecision(_id: ID!): Decision
}

`;

module.exports = typeDefs;