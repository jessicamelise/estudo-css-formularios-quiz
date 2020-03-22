let primeiroIng = document.getElementById("primeiroIng");
let primeiroMat = document.getElementById("primeiroMat");
let segundoIng = document.getElementById("segundoIng");
let segundoMat = document.getElementById("segundoMat");
let terceiroIng = document.getElementById("terceiroIng");
let terceiroMat = document.getElementById("terceiroMat");
let botaoReset = document.getElementById("botaoReset");
let primeiroProximaPerguntaMat = document.getElementById("primeiroProximaPerguntaMat");
let primeiroProximaPerguntaIng = document.getElementById("primeiroProximaPerguntaIng");
let segundoProximaPerguntaIng = document.getElementById("segundoProximaPerguntaIng");
let segundoProximaPerguntaMat = document.getElementById("segundoProximaPerguntaMat");
let assuntoQuiz = document.getElementById("assuntoQuiz");
let saudacaoNome = document.getElementById("saudacaoNome");
let preencherNome = document.getElementById("preencherNome");
let caixaPreencherNome = document.getElementById("caixaPreencherNome");
let respostaUmMat = document.getElementById("respostaUmMat");
let respostaUmIng = document.getElementById("respostaUmIng");
let respostaDoisIng = document.getElementById("respostaDoisIng");
let respostaDoisMat = document.getElementById("respostaDoisMat");
let respostaTresIng = document.getElementById("respostaTresIng");
let respostaTresMat = document.getElementById("respostaTresMat");
let mostrarRespIng = document.getElementById("mostrarRespIng");
let mostrarRespMat = document.getElementById("mostrarRespMat");

limparTela();

function limparTela() {
    primeiroIng.style.display = "none";
    primeiroMat.style.display = "none";
    segundoIng.style.display = "none";
    segundoMat.style.display = "none";
    terceiroIng.style.display = "none";
    terceiroMat.style.display = "none";
    botaoReset.style.display = "none";
    primeiroProximaPerguntaMat.style.display = "none";
    primeiroProximaPerguntaIng.style.display = "none";
    segundoProximaPerguntaIng.style.display = "none";
    segundoProximaPerguntaMat.style.display = "none";
    assuntoQuiz.style.display = "none";
    preencherNome.value = "";
    respostaUmMat.value = "";
    respostaUmIng.value = "";
    respostaDoisIng.value = "";
    respostaDoisMat.value = "";
    respostaTresIng.value = "";
    respostaTresMat.value = "";
    mostrarRespIng.style.display = "none";
    mostrarRespMat.style.display = "none";
}

function submeterNome() {
    saudacaoNome.style.display = "block";
    saudacaoNome.innerHTML = "Seja bem-vindo(a) " + preencherNome.value.charAt(0).toUpperCase() + preencherNome.value.slice(1);
    caixaPreencherNome.style.display = "none";
    assuntoQuiz.style.display = "block";
}

function provaMat() {
    primeiroMat.style.display = "block";
    assuntoQuiz.style.display = "none";
}

function enviarRespUmMat() {
    if (respostaUmMat.value === "a") {
        mostrarRespMat.innerHTML += "Você acertou a Questão 1!!! <br>";
        mostrarRespMat.style.display = "none";
    } else {
        mostrarRespMat.innerHTML += "Você errou a Questão 1!!! <br>";
        mostrarRespMat.style.display = "none";
    }
    primeiroMat.style.display = "none";
    primeiroProximaPerguntaMat.style.display = "block";
}

function provaIng() {
    primeiroIng.style.display = "block";
    assuntoQuiz.style.display = "none";
}

function enviarRespUmIng() {
    if (respostaUmIng.value === "b") {
        mostrarRespIng.innerHTML += "Você acertou a Questão 1!!! <br>";
        mostrarRespIng.style.display = "none";
    } else {
        mostrarRespIng.innerHTML += "Você errou a Questão 1!!! <br>";
        mostrarRespIng.style.display = "none";
    }
    primeiroIng.style.display = "none";
    primeiroProximaPerguntaIng.style.display = "block";
}

function primeiroPerguntaSeguinteMat() {
    primeiroProximaPerguntaMat.style.display = "none";
    primeiroMat.style.display = "none";
    segundoMat.style.display = "block";
}

function primeiroPerguntaSeguinteIng() {
    primeiroProximaPerguntaIng.style.display = "none";
    primeiroIng.style.display = "none";
    segundoIng.style.display = "block";
}

function enviarRespDoisMat() {
    if (respostaDoisMat.value === "b") {
        mostrarRespMat.innerHTML += "Você acertou a Questão 2!!! <br>";
        mostrarRespMat.style.display = "none";
    } else {
        mostrarRespMat.innerHTML += "Você errou a Questão 2!!! <br>";
        mostrarRespMat.style.display = "none";
    }
    segundoMat.style.display = "none";
    segundoProximaPerguntaMat.style.display = "block";
}

function enviarRespDoisIng() {
    if (respostaDoisIng.value === "c") {
        mostrarRespIng.innerHTML += "Você acertou a Questão 2!!! <br>";
        mostrarRespIng.style.display = "none";
    } else {
        mostrarRespIng.innerHTML += "Você errou a Questão 2!!! <br>";
        mostrarRespIng.style.display = "none";
    }
    segundoIng.style.display = "none";
    segundoProximaPerguntaIng.style.display = "block";
}

function segundoPerguntaSeguinteIng() {
    segundoProximaPerguntaIng.style.display = "none";
    segundoIng.style.display = "none";
    terceiroIng.style.display = "block";
}

function segundoPerguntaSeguinteMat() {
    segundoProximaPerguntaMat.style.display = "none";
    segundoMat.style.display = "none";
    terceiroMat.style.display = "block";
}

function enviarRespTresIng() {
    if (respostaTresIng.value === "a") {
        mostrarRespIng.innerHTML += "Você acertou a Questão 3!!!";
        mostrarRespIng.style.display = "none";
    } else {
        mostrarRespIng.innerHTML += "Você errou a Questão 3!!!";
        mostrarRespIng.style.display = "none";
    }
    terceiroIng.style.display = "none";
    mostrarRespIng.style.display = "block";
    botaoReset.style.display = "block";
}

function enviarRespTresMat() {
    if (respostaTresMat.value === "c") {
        mostrarRespMat.innerHTML += "Você acertou a Questão 3!!!";
        mostrarRespMat.style.display = "none";
    } else {
        mostrarRespMat.innerHTML += "Você errou a Questão 3!!!";
        mostrarRespMat.style.display = "none";
    }
    terceiroMat.style.display = "none";
    mostrarRespMat.style.display = "block";
    botaoReset.style.display = "block";
}

function resetGame() {
    botaoReset.style.display = "none";
    primeiroIng.style.display = "none";
    primeiroMat.style.display = "none";
    segundoIng.style.display = "none";
    segundoMat.style.display = "none";
    terceiroIng.style.display = "none";
    mostrarRespIng.style.display = "none";
    terceiroMat.style.display = "none";
    mostrarRespMat.style.display = "none";
    caixaPreencherNome.style.display = "block";
    saudacaoNome.style.display = "none"
    limparTela();
}

