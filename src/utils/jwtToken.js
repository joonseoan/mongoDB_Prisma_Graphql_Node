import jwt from 'jsonwebtoken';
import prisma from '../../prisma';

export const generateJWT = userId => {
    return jwt.sign({ userId }, process.env.JWT_SCECRET, { expiresIn: 60 * 60 * 60 });
}

export const verifyJWT = async req => {

    const { authorization } = req.headers;

    if(!authorization) {
        throw new Error('You must signup or login first');
    }

    try {
        const token = authorization.replace('Bearer ', '');
        const decode = jwt.verify(token, process.env.JWT_SCECRET);

        const user = await prisma.query.user({
            where: {
                id: decode.userId
            }
        });

        if(!user) {
            throw new Error('Unable to find authenticated user.')
        }

        req.user = {
            id: user.id,
            name: user.name,
            email: user.email
         };

    } catch(e) {
        throw new Error(e);
    }    
}
