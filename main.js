const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', botaoMostraPalavras);

function mostraPalavrasChave(){
    const texto = document.querySelector('#entrada-de-texto').vaule;
    const campoResultado = document.querySelector('#resultado-palavrachaves');
    const palavrasChaves = processaTexto(texto);

    campoResultado. textContent = palavrasChave.join(',');

    
}


function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}