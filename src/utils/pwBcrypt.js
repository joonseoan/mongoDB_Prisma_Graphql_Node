import bcrypt from 'bcrypt';

export const encryption = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(!err) {
                    resolve(hash);
                } else {
                    reject(err);
                }
            })
        })
    })
}