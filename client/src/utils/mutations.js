import gql from 'graphql-tag'

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $avatar: String!) {
        addUser(username: $username, email: $email, password: $password, avatar: $avatar) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_DECISION = gql`
    mutation addDecision($name: String!, $decisionText: String!, $pros: [String], $cons: [String], $active: Boolean!){
      addDecision(name: $name, decisionText: $decisionText, pros: $pros, cons: $cons, active: $active) {
        _id
        name
        decisionText
        pros
        cons
        active
        createdAt
      }
    }
`

export const DELETE_DECISION = gql`
    mutation deleteDecision($_id: ID!) {
      deleteDecision(_id: $_id) {
        _id
      }
    }
`