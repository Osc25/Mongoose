require('./connection')

const User = require('./models/User')

async function createUsers(){
/*  
    const userOne = new User({
        username: 'Abraham',
        password: '1234'
    }) 
    await userOne.save();
*/
    const userTwo = new User({
        username: 'Bruno',
        password: '5678'
    }) 
    await userTwo.save();


}


createUsers();