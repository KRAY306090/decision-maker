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
    mutation addDecision($name: String!, $decisionText: String!){
      addDecision(name: $name, decisionText: $decisionText) {
        _id
        username
        name
        decisionText
        createdAt
        pros {
          proId
          pro
        }
        cons {
          conId
          con
        }
        active
      }
    }
`

export const ADD_PRO = gql`
    mutation addPro($proId: ID, $pro: String){
      addPro(proId: $proId, pro: $pro) {
        proId
        pro
      }
    }
`

export const ADD_CON = gql`
  mutation addCon($conData: ConInput){
    addCon(conData: $conData) {
      proId
      pro
    }
  }
`

// export const DELETE_DECISION = gql`
//     mutation deleteDecision($_id: ID!) {
//       deleteDecision(_id: $_id) {
//         _id
//       }
//     }
// `

export const UPDATE_USER = gql `
    mutation updateUser($username: String!, $email: String!, $password: String!, $avatar: String!) {
      updateUser(username: $username, email: $email, password: $password, avatar: $avatar) {
        _id
        username
        email
        password
        avatar
      }
    }
`

export const DELETE_DECISION = gql`
    mutation deleteDecision($_id: ID!){
      deleteDecision(_id: $_id) {
        _id
        username
        name
        decisionText
        createdAt
        pros {
          proId
          pro
        }
        cons {
          conId
          con
        }
        active
      }
    }
`