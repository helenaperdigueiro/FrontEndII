let situacao = confirm("Para acessar o Sistema, pressione OK");

if(situacao) {
    window.location.href = "acessoPermitido.html"
} else {
    window.location.href = "acessoNegado.html"
}