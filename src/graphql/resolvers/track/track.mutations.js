// import { verifyJWT } from '../../../utils/jwtToken';

// export default {
//     createTrack: async (parent, { data }, { prisma, req }, info) => {
//         try {
//             await verifyJWT(req);
//             const{ name, locations } = data;
//             if(!name || !locations) {
//                 throw new Error('Must enter name and locations');
//             }

//             const newTrack = await prisma.mutation.createTrack({
//                 data: {
//                     name,
//                     user: {
//                         connect: {
//                             id: req.user.id
//                         }
//                     },
//                     locations: {
//                         create: [{
//                             timestamp: locations.timestamp,
//                             coords: {
//                                 create: {
//                                     latitude: Float!
//                                     longitude: Float!
//                                     altitude: Float!
//                                     accuracy: Float!
//                                     heading: Float!
//                                     speed: Float!
//                                 }
//                             }
//                         }] 
//                     }
//                 }
//             })



//         } catch(e) {
//             throw new Error(e);
//         }
//     }
// }