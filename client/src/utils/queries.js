import gql from 'graphql-tag'

export const QUERY_USER = gql`
  query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    avatar
    decisions {
      _id
      decisionText
      createdAt
      pros
      cons
      active
    }
  }
}
`

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      avatar
      decisions {
        _id
        decisionText
        createdAt
        pros
        cons
        active
      }
    }
  }
`

export const QUERY_DECISIONS = gql`
  query decisions($username: String) {
    decisions(username: $username) {
      _id
      username
      name
      decisionText
      createdAt
      pros
      cons
      active
    }
  }
`

export const QUERY_DECISION = gql`
  query decision($id: ID!) {
    decision(_id: $id) {
      _id
      username
      name
      decisionText
      createdAt
      pros
      cons
      active
    }
  }
`