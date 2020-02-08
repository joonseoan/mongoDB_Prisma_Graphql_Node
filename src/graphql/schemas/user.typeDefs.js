import { gql } from 'apollo-server-express';

export default gql`
    
    type Query {
        users: [User!]!
    }

    type Mutation {
        createUser(data: createUserInput): User!
        loginUser(data: loginUserInput): User!
    }

    input createUserInput {
        name: String!
        email: String!
        password: String!
        confirm_password: String!
    }

    input loginUserInput {
        email: String!
        password: String!
    }
    
    type User {
        id: ID!
        email: String!
        name: String!
        token: String
    }
`;