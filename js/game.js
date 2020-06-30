const player1 = { 
    "player": "x",
    "nome" : "player1",
    "pontuacao" : 0};
const player2 = { 
    "player": "o",
    "nome" : "player2",
    "pontuacao" : 0};
var playerTime = player1;
var gameOver = false;
var jogador;

atualizarMostrador();
iniciarEspacos();
verificarVencedor();


function atualizarMostrador(){
    if (gameOver == true){ return;}
    if (playerTime == player1){
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/x.png");
    } else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/o.png");
    }
}

function iniciarEspacos(){
    var espacos = document.getElementsByClassName("espaco");
    for (var i=0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){
            if(gameOver){return;}
            if(this.getElementsByTagName("img").length == 0){
                if (playerTime == player1){
                    this.innerHTML = "<img src='img/x.png'>";
                    this.setAttribute("jogada", player1.player);
                    playerTime = player2;
                } else {
                    this.innerHTML = "<img src='img/o.png'>";
                    this.setAttribute("jogada", player2.player);
                    playerTime = player1;
                }
                atualizarMostrador();
                verificarVencedor();
            }
        })
    }
}

async function verificarVencedor(){
    
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor= "";

    if ( ( (a1 == a2 && a1 == a3) || (a1 == b1 && a1 == c1) || (a1 == b2 && a1 == c3) ) && a1 !=""){
        if(a1 == "x"){
            vencedor = player1;
        }else  vencedor = player2;
    } else if ( ( (b2 == b1 && b2 == b3)||(b2 == a2 && b2 == c2)||(b2 == a3 && b2 == c1) ) && b2 !=""){
        if(b2 == "x"){
            vencedor = player1;
        }else  vencedor = player2;
    } else if ( ( (c3 == c1 && c3 == c2)||(c3 == a3 && c3 == b3) ) && c3 !=""){
        if(c3 == "x"){
            vencedor = player1;
        }else  vencedor = player2;
    } else if((a1 != "" && a2 != "" && a3 != "" && b1 !="" && b2 !="" && b3 != "" && c1 != "" && c2 !="" && c3 !="" && vencedor == "")) {
        await sleep(50);
       
        alert("empate")
    }
    if (vencedor != ""){
        gameOver = true;
        vencedor.pontuacao+=1
        await sleep(50);
        alert("O vencedor foi: '"+ vencedor.nome + "'", location.reload())
        console.log(vencedor.pontuacao)

    }
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
