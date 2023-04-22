function criarLista() {
  var nomeLista = prompt("Escreva o nome da sua lista:");
  (document.getElementById("novaCategoria")).innerHTML = nomeLista;
  (document.getElementById("livro")).style.visibility = "visible";
  (document.getElementById("link")).style.visibility = "visible";
  (document.getElementById("btn")).style.visibility = "visible";
  (document.getElementById("start")).style.visibility = "hidden";
}

function adicionarLivro() {
  var livro = document.getElementById("livro").value;
  if (livro.endsWith(".jpg" || ".png")) {
    var linkLivro = document.getElementById("link").value;
    var imagemLivro = "<a href=" + linkLivro + " target='_blank'> <img height='300px' src=" + livro + " alt='' class='capas'>";
    var listaLivros = document.getElementById("listaLivros");
    listaLivros.innerHTML += imagemLivro;
  } else {
    alert("Endereço de imagem inválido");
  }
  document.getElementById("livro").value = "";
  document.getElementById("link").value = "";
}

//imagem capa: https://m.media-amazon.com/images/P/B0953YRS55.01._SCLZZZZZZZ_SX500_.jpg
//link compra: https://www.amazon.com.br/guerra-dos-mundos-H-Wells/dp/6555522879