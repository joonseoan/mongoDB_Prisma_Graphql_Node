export default {
    users: async (parent, args, { prisma }, info) => {
        return await prisma.query.users({}, info);
    }
}