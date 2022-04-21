var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"]
// elemento           1             2            3
// índice             0             1            2

// adicionando esses elementos - indice 3
//listaFilmes.push("Harry Potter");

//listaFilmes.push("Harry Potter 2");

//listaFilmes.push("Harry Potter 3");

//listaFilmes.push("Harry Potter 4");

//listaFilmes.push("Harry Potter 5");

//listaFilmes.push("Harry Potter 6");

//listaFilmes.push("Harry Potter 7");

//   valor inicial,  condição,   expressão final
//for (var indice = 0; indice < listaFilmes.length; indice++) {
  //document.write("<p>" + listaFilmes[indice] + "</p>");
//}


var listaFilmes = [
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/umX3lBhHoTV7Lsci140Yr8VpXyN.jpg",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg"
  ];
  
for (var i = 0; i < listaFilmes.length; i++) {
document.write("<img src=" + listaFilmes[i] + ">");
}

function adicionarFilme() {
var filmeFavorito = document.getElementById("filme").value;
if (filmeFavorito.endsWith("jpg")) {
    listarFilmesNaTela(filmeFavorito);
} else {
    console.error("Endereço de filme inválido")
}
document.getElementById("filme").value = ""
}

function listarFilmesNaTela(filme) {
console.log(filme);
var elementoFilmeFavorito = "<img src=" + filme + ">";
var elementoListaFilmes = document.getElementById("listaFilmes")
elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}