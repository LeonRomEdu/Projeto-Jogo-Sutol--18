//Criando var de altura e largura, para que o jogo não ultrapasse a tela indicada//

var altura = 0;
var largura = 0;
var numero = 1;
var tempo =15;

function tamanhoDaTela(){

altura = window.innerHeight;
largura = window.innerWidth;

}

tamanhoDaTela();

// Criando posição aleatória//



function tempoDiminui(){

    document.getElementById('numeroNaTela').innerHTML = tempo;

    if(tempo > 0){
        tempo = tempo - 1; 
        return;
    } else{
         window.location.href = 'vitoria.html';
    }
}

function posicaoAleatoria(){

    if(document.getElementById('rosaid')){
        document.getElementById('rosaid').remove();

        if(numero > 3){
        
            window.location.href = 'fim_de_jogo.html';
        
        }else{

            document.getElementById('coracao' + numero).src = 'img/coracao_vazio.png';
            numero ++;
        }

    }

var posicaoy = Math.floor(Math.random() * altura - 75);
var posicaox = Math.floor(Math.random() * largura - 75);

console.log(posicaox, posicaoy);

if(posicaox < 0 || posicaoy < 0){
    posicaox = 0; 
    posicaoy = 0;
}

// Criando o ET que movimentará a tela//

var etRosa = document.createElement('img');
etRosa.src = 'img/etrosa.png';
etRosa.className = tamanhoAleatorio();
etRosa.style.left = posicaox + 'px';
etRosa.style.top = posicaoy + 'px';
etRosa.id = 'rosaid'

document.body.appendChild(etRosa);

etRosa.onclick = function(){
    document.getElementById('rosaid').remove();
}

}

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random() * 3);

    if(classe === 0){
        return 'rosa1';
    } else if(classe === 1){
        return 'rosa2';
    } else{
        return 'rosa3';
    }
}