export default {
    createUser: async (parent, { data }, { prisma }, info) => {
        return await prisma.mutation.createUser(data, info);
    }
}

