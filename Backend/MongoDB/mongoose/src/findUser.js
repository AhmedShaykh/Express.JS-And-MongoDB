const User = require('./userModel');

User.find({ name: 'AHM X' })
    .then((users) => {
        // Return Array
        console.log('Users: ', users);
    })
    .catch((err) => console.log('Err ', err));

User.findOne({ name: 'AHM X' }) // or you can use { _id: 'whatEverId' }
    .then((user) => {
        // Return One Object
        console.log('User: ', user);
    })
    .catch((err) => console.log('Err ', err));