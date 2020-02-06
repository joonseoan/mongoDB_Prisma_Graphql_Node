import { encryption } from '../../utils/pwBcrypt';
import { generateJWT } from '../../utils/jwtToken';

export default {
    createUser: async (parent, { data }, { prisma }, info) => {
        
        try {
            const { name, email, password } = data;
            const hash = await encryption(password);
            const userFields = { 
                name, 
                email, 
                password: hash 
            };
            const newUser = await prisma.mutation.createUser(userFields, info);
            const token = generateJWT(newUser.id);

            if(!newUser) {
                throw new Error('Unable to create a new user.');
            }
            return {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                token
            };
        } catch(e) {
            throw new Error(e);
        }
    }
}

