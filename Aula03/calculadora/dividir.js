let dividir = (a, b) => {
    if(b == 0) {
        return "Nao eh possivel dividir por zero.";
    } else {
        return a / b;
    }
}

module.exports = dividir;