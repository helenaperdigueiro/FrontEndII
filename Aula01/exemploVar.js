var varGlobal= 'valor inicial'; 
function name() { 
// escopo da función 
console.log(varGlobal); // -> 'valor inicial' 
if (condicao) { 
// escopo do bloque 
var varFuncion= 'Estou declarada em uma função'; 
console.log(varGlobal); // -> 'valor inicial' 
varFuncion = 'Continuo dentro da Função'; 
} 
}
console.log(varFuncion); // -> 'Eu continuo dentro da Função' } 
// console.log(varGlobal); // -> 'outro valor' 
// console.log(varFuncion); // -> erro: não está declarada 
