var largura = 0
var altura = 0
var vidas = 3
var tempo = 30
var nivel_tempo = 2000
pontos = 0

var nivel = window.location.search
nivel = nivel.replace('?' , '')

switch (nivel) {
    case 'facil':
        nivel_tempo = 3000
        break;
    case 'medio':
        nivel_tempo = 2000
        break
    case 'dificil':
        nivel_tempo = 1000
        break
}

function ajustaTela() {
    largura = window.innerWidth
    altura = window.innerHeight
}

ajustaTela()

function posicaoRandom() {
    
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if(vidas == 1){
            window.location.href = 'game_over.html'
        }else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas--
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY    

    var mosca = document.createElement('img')
    mosca.src = "img/mosca.png"
    mosca.className = 'mosca' + tamanhoRandom() + ' ' + 'lado' + ladoRandom()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
        document.getElementById('pontos').innerHTML = ++pontos
    }
    document.body.appendChild(mosca)
}


function tamanhoRandom() {
    return Math.floor(Math.random() * 3)

}

function ladoRandom() {
    return Math.floor(Math.random() * 2)

}


var cronometro = setInterval(function(){
    if(tempo <= 0){
        window.location.href = 'vitoria.html'    
    }else{
        document.getElementById('tempo').innerHTML = --tempo
    }
}, 1000)