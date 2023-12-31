import { gql } from "apollo-server-express";

export default gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    user_email: String
  }
  type Query {
    getTodos(user_email: String): [Todo]
    getTodo(id: ID): Todo
    getFeaturedTodos(user_email: String): [Todo]
  }
  type Mutation {
    createTodo(title: String, user_email: String): Todo
    deleteTodo(id: ID): Todo
    updateTodo(id: ID, title: String): Todo
  }
`;
