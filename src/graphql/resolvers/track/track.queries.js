import { verifyJWT } from '../../../utils/jwtToken';

export default {
    fetchTrack: async (parent, args, { prisma, req }, info) => {
        try {
            await verifyJWT(req);
            const tracks = await prisma.query.tracks({
                where: {
                    user: {
                        id: req.user.id
                    }
                }
            });

            if(tracks.length === 0) {
                throw new Error('Unable to fetch track');
            }

            return tracks;

        } catch(e) {
            throw new Error(e);
        }
    } 
}