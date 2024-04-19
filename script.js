let botoes = document.querySelectorAll(".notas button");
botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota);
});

function guardarNota(evento) {
    let noota = evento.target.innerText

    localStorage.setItem("noota", noota)
}

