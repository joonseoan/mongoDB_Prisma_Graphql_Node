import { extractFragmentReplacements } from 'prisma-binding';

import Queries from './user.queries';
import Mutations from './user.mutations';

const resolvers = {
    Query: Queries,
    Mutation: Mutations
}

const fragmentReplacements = extractFragmentReplacements(resolvers);
export { resolvers, fragmentReplacements };
