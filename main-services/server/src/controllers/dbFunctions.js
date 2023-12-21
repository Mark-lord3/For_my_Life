
const db = require('../config/db.config');

const dbFunctions = {
    getAllUsers:(callback)=> {
        const query = `SELECT * FROM users`;
        db.query(query, (err, data) => {
          callback(err, data);
        });
    },
    registerUser: (userData, callback) => {
        const { name,lastname,email, password } = userData;
        

        db.query(
        "INSERT INTO users (name,lastname,email,password) VALUES (?,?,?,?)",
        [name,lastname,email, password],
        (err, result) => {
            if (err) {
            return callback(err, null);
            }
            return callback(null, result);
        }
        );
    },
    getUserByEmailAndPassword: (email, password, callback) => {
        const query = `SELECT * FROM users WHERE email='${email}'`;
        db.query(query, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                if (data.length === 0) {
                    callback(null, null); // User not found
                } else {
                    
                    const storedPassword = data[0].password;

                    bcrypt.compare(password, storedPassword, (compareErr, result) => {
                        if (compareErr) {
                            callback(compareErr, null);
                            
                        } else {
                            if (result) {
                                
                                callback(null, data); // Passwords match, return user data
                            } else {
                                console.log('not');
                                callback(0, 0); // Passwords do not match
                            }
                        }
                    });
                }
            }
        });
    },
    
};

// Utils function for password hashing
const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashPassword(password) {
  return bcrypt.hash(password, saltRounds);
}


module.exports = dbFunctions;
