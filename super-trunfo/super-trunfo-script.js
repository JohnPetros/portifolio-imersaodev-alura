var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://pbs.twimg.com/profile_images/1225497788491931648/B6k9ZlCp_400x400.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6,
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://olhardigital.com.br/wp-content/uploads/2020/11/20201130114919.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2,
    }
};

var carta3 = {
    nome: "Shiryu de dragão",
    imagem: "https://i.pinimg.com/736x/f5/08/64/f50864fc85dc9647ec4294a9c7d3ffb2.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10,
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina
var cartaJogador

console.log(carta1.atributos.ataque);

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibeCartaJogador();
};

function exibeOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributo) {
        opcoesTexto += "input type='radio' name='atributo' value'" + atributo + "'>'" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    var htmlResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Venceu!</p>"
        // elementoResultado.innerHTML = "Você venceu!"//
    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = "<p class='resultado-final'>Perdeu!</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou!</p>"
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibeCartaMaquina()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    // divCartaJogador.style.backgroudImage = 'url(${cartaJogador.imagem})';//
    divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = "<p class='carta-subtitle'>" + cartaJogador.nome + "</p>";

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
};

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    // divCartaMaquina.style.backgroudImage = 'url(${cartaMaquina.imagem})';//
    divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = "<p class='carta-subtitle'>" + cartaMaquina.nome + "</p>";

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}