const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    avatar: String
    decisions: [Decision]
}

input UserInput {
    username: String
    email: String
    password: String
    avatar: String
}

type Decision {
    _id: ID
    username: String
    name: String
    decisionText: String
    createdAt: String
    pros: [Pro]
    cons: [Con]
    active: Boolean
}

input DecisionInput {
    username: String
    name: String
    decisionText: String!
    createdAt: String
    pros: [ProInput]
    cons: [ConInput]
    active: Boolean
}

type Pro {
    proId: ID
    pro: String
}

input ProInput {
    proId: ID
    pro: String
}

type Con {
    conId: ID
    con: String
}

input ConInput {
    conId: ID
    con: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    decision(_id: ID!): Decision
    decisions(username: String): [Decision]

}

type Auth {
    token: ID
    user: User
}

type Mutation {
    addUser(username: String, email: String, password: String, avatar: String): Auth
    addDecision(name: String!, decisionText: String!): Decision
    addPro(proId: ID, pro: String): Pro
    addCon(conData: ConInput): Con
    updateUser(_id: ID!, input: UserInput): User
    updateDecision(_id: ID!, input: DecisionInput): Decision
    login(email: String!, password: String!): Auth
    deleteDecision(_id: ID!): Decision
}

`;

module.exports = typeDefs;

