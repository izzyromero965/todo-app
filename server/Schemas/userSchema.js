import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID
    username: String
    password: String
  }

  type Query {
    getUser(id: ID): User
  }

  type Mutation {
    createUser(username: String, password: String): User
  }
`;
