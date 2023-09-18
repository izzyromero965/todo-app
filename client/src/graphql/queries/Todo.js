import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos($user_email: String) {
    getTodos(user_email: $user_email) {
      id
      title
      user_email
    }
  }
`;

const GET_FEATURED_TODOS = gql`
  query getFeaturedTodos($user_email: String) {
    getFeaturedTodos(user_email: $user_email) {
      id
      title
      user_email
    }
  }
`;

export { GET_TODOS, GET_FEATURED_TODOS };
