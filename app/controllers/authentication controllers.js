const usuarios = [{
    user: "",
    email: "",
    password: ""
}]





async function login(req,res){

}

async function register(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
        res.status(400).send({status:"Error", message:"Los campos estan incompletos"})
    }
    const usuariosARevisar = usuarios.find(usuarios => usuarios.user === user);
    if(usuariosARevisar){
        res.status(400).send({status:"Error", message:"Este usuario ya existe"})
    }

}

export  const methods = {
    login,
    register
}