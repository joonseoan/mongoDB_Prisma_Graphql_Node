import { extractFragmentReplacements } from 'prisma-binding';
import user from './user';
import track from './track';

const resolvers = {
    Query: {
        ...user.queries,
        ...track.queries
    },
    Mutation: {
        ...user.mutations,
        ...track.mutations
    }
}

const fragmentReplacements = extractFragmentReplacements(resolvers);
export { resolvers, fragmentReplacements };
