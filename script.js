const inputTexto = document.querySelector("[input-texto]");
const divContador = document.querySelector("[txt-contador]");
const btnContar = document.querySelector("[btn-contar]");

let modo = "caracteres";

inputTexto.addEventListener("input", handleInputTexto);
btnContar.addEventListener("click", handleBtnContar);

function handleInputTexto() {
    if (modo === "palavras") {
        contarPalavras();
    }
}

function handleBtnContar() {
    if (modo === "caracteres") {
        modo = "palavras";
        btnContar.innerText = "Contar Caracteres";
        contarPalavras();
    } else {
        modo = "caracteres";
        btnContar.innerText = "Contar Palavras";
        contarCaracteres();
    }
}

function contarCaracteres() {
    const texto = inputTexto.value;
    const numCaracteres = texto.length;
    divContador.innerText = numCaracteres + " caracteres";
}

function contarPalavras() {
    const texto = inputTexto.value.trim();
    const numPalavras = texto.split(/\s+/).filter(word => word !== "").length;
    divContador.innerText = numPalavras + " palavras";
}
