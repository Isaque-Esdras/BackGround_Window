function cambiarCor() {
    
    mudar = Math.floor(Math.random()*0xFFFFFF).toString(16)
    return `#${mudar}`

    // mudar = Math.floor(Math.random()*0xFFFFFF).toString(16) 
    // return = `#${mudar}`
    
                                        //Pegar cores
}

mudarCor = () =>{

    document.body.style.backgroundColor = cambiarCor()
    document.getElementById('rgb').innerHTML = `#${mudar}`
}
