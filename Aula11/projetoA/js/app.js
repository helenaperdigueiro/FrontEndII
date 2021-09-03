document.querySelector("form").onsubmit = function(){return false};

//Função para a criação de cards
let urlImg = ""
let title = ""
let description = ""

document.getElementById("submit").addEventListener("click", function() {
  titulo = document.getElementById("titulo").value;
  descricao = document.getElementById("descricao").value;
  imagem = document.getElementById("imagem").value;

  let cardSection = document.getElementById("card");
  let dentroDiv = document.createElement("div");
  cardSection.appendChild(dentroDiv);

  dentroDiv.innerHTML += `<img src="${imagem}">`;
  dentroDiv.innerHTML += `<h2>${titulo}</h2>`;
  dentroDiv.innerHTML += `<p>${descricao}<p>`;
})

// function pop() {
//   document.getElementById('pop').style.display = 'block';
// }

// function fechar() {
//   document.getElementById('pop').style.display = 'none';
// }