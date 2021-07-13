require('../connection')

const User = require('../models/User')

async function someFunctions(){
    const user = await User.updateOne({username:'ElPepe'});
    console.log(user);
    user.password = 'Nueva COntraseña';
    user.save();
}

async function otherFunction(){
    const user = await User.findOneAndUpdate({username:'ElPepe'},{
        name: 'Natalia'
    }, {new:true});
    console.log(user);
}


async function updateUsers(){
    const user = await User.update({username:'ElPepe'},{
        password: 'contraseñasegura'
    });
    console.log(user);
}

otherFunction();
//updateUsers();
//someFunctions();