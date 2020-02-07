import { verifyJWT } from '../../../utils/jwtToken';

export default {
    users: async (parent, args, { prisma, req }, info) => {        
        await verifyJWT(req);
        return await prisma.query.users({}, info);
    }
}