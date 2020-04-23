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
        dob: String!
        email: String!
        password: String!
    }

    input loginUserInput {
        email: String!
        password: String!
    }
    
    type User {
        id: ID!
        email: String!
        dob: String !
        token: String
    }
`;