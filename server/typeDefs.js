import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    details: String
    date: Date
  }
  type Query {
    welcome: String
    getTodos: [Todo]
    getTodo(id: ID): Todo
  }
  type Mutation {
    createTodo(title: String, details: String, date: Date): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, title: String, date: Date, details: String): Todo
  }
`;
export default typeDefs;
