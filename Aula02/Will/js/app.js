let nomeUsuario = confirm("Para acessar o Sistema - pressione OK ")

        if (nomeUsuario==true) {
            let nome = prompt("Por favor insira seu nome");
            alert("Bem vindo ao nosso sistema, " + nome);
        } else {
            alert("Usuário anônimo conectado.")
        }