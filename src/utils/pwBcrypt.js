import bcrypt from 'bcrypt';

export const encryption = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) {
                    return reject(err);
                }
                return resolve(hash);   
            })
        })
    })
};

export const decryption = (password, encryptedPassword) =>{
    return bcrypt.compare(password, encryptedPassword)
        .then( isValidated => {
            console.log('isValidated: ', isValidated)
            return isValidated;
        })
        .catch(err => {
            throw new Error(err);
        })
}