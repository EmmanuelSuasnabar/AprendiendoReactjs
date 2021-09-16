const joyas = [
    {id:1, nombre: Aros, picture:"./src/images/aros.jpg"  },
    {id:2, nombre: Anillos , picture:"./src/images/anillos.jpg" },
    {id:3, nombre: Cadenas, picture:"./src/images/cadenas.jpg" },
    {id:4, nombre: Pulceras ,picture:"./src/images/pulceras.jpg" },
]

export const getFech = new Promise((res, rej) => {

    let respuesta = '200'
    if(respuesta === '200'){

    setTimeout(() =>{

        res(joyas)
    }, 2000)
}else{
    rej('404')
}

});
