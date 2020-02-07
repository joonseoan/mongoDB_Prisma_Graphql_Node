import { encryption, decryption } from '../../../utils/pwBcrypt';
import { generateJWT } from '../../../utils/jwtToken';

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
            const newUser = await prisma.mutation.createUser({ data: userFields });
            const token = generateJWT(newUser.id);

            if(!newUser) {
                throw new Error('Unable to create a new user.');
            }

            return {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                token // delete when it is not required
            };
        } catch(e) {
            throw new Error(e);
        }
    },
    loginUser: async (parent, { data }, { prisma, req }, info) => {

        try {
            const { email, password } = data;
            
            if(!email || !password) {
                throw new Error('Email or Password is not available.')
            }

            const user = await prisma.query.user({
                where: {
                    email
                }
            });

            if(!user) {
                throw new Error('Unable to find user email');
            }

            const verifyPassword = await decryption(password, user.password);
            
            if(!verifyPassword) {
                throw new Error('Password is wrong');
            }

            const token = generateJWT(user.id);

            return {
                id: user.id,   // delete when it is not required in client
                name: user.name, // delete when it is not required in client
                email: user.email, // delete when it is not required in client
                token 
            }

        } catch(e) {
            throw new Error(e);
        }
    }
}