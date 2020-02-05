import { gql } from 'apollo-server-express';

export default gql`
    
    type Query {
        users: [User!]!
    }

    type Mutation {
        createUser(data: createUserInput): User!
    }

    input createUserInput{
        name: String!
        gender: String!
    }
    
    type User {
        id: ID!
        name: String!
        gender: String!
    }
`;