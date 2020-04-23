import { verifyJWT } from '../../../utils/jwtToken';

export default {
    createTrack: async (parent, { data }, { prisma, req }, info) => {
        try {
            await verifyJWT(req);
            const { name, locations } = data;

            if(!name || !locations.length) {
                throw new Error('Must enter name and locations');
            }

            const createlocations = locations.map(location => {
               return { 
                   timestamp: location.timestamp,
                   coords: {
                    create: location.coords
                    //   create: {
                    //     //   latitude: location.coords.latitude,
                    //     //   longitude: location.coords.longitude,
                    //     //   altitude: location.coords.altitude,
                    //     //   accuracy: location.coords.accuracy,
                    //     //   heading: location.coords.heading,
                    //     //   speed: location.coords.speed,
                    //     //   altitudeAccuracy: location.coords.altitudeAccuracy
                    //   }     
                   }
               } 
            });

            const newTrack = await prisma.mutation.createTrack({
                data: {
                    name,
                    user: {
                        connect: {
                            id: req.user.id
                        }
                    },
                    locations: {
                        create: createlocations 
                    }
                }
            }, info);

            if(!newTrack) {
                throw new Error('Unable to create track data')
            }

            return newTrack

        } catch(e) {
            throw new Error(e);
        }
    }
}