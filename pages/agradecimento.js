function pegarNota(){
    let noota = localStorage.getItem("noota") 

    let paragrafonota = document.querySelector(".nota")

    paragrafonota.innerHTML= `Você selecionou ${noota} de 5`
}

pegarNota()