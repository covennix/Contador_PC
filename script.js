const inputTexto = document.querySelector("[input-texto]");
const divContador = document.querySelector("[txt-contador]");
const btnContar = document.querySelector("[btn-contar]");

let textoDigitado = "";

inputTexto.addEventListener("input", () => {
    textoDigitado = inputTexto.value;
});

btnContar.addEventListener("click", handleBtnContar);

function handleBtnContar() {
    contarCaracteres(textoDigitado);
    contarPalavras(textoDigitado);
}

function contarCaracteres(texto) {
    const numCaracteres = texto.length;
    divContador.innerText = numCaracteres + " caracteres";
}

function contarPalavras(texto) {
    const numPalavras = texto.trim().split(/\s+/).filter(word => word !== "").length;
    divContador.innerText += ", " + numPalavras + " palavras";
}
