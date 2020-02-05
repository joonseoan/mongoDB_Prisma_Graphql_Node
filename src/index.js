import { ApolloServer } from 'apollo-server-express'; 
import { resolvers, fragmentReplacements } from './graphql/resolvers/';
import typeDefs from './graphql/schemas/';
import prisma from '../prisma';

export default new ApolloServer({
    typeDefs,
    resolvers,
    context({ req }) {
        return {
            req,
            prisma
        }
    },
    fragmentReplacements
});