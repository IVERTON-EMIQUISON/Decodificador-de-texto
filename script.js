const inputTexto = document.querySelector(".text-area");
const outputMensagem = document.querySelector(".mensagem");

// Chaves de criptografia utilizadas:
// 'e' é convertida para 'en'
// 'i' é convertida para 'item'
// 'a' é convertida para 'ate'
// 'o' é convertida para 'outro'
// 'u' é convertida para 'utem'

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputMensagem.value = textoEncriptado;
    inputTexto.value = "";
}

function encriptar(stringEncriptada) {
    const matrizCodigo = [["e", "en"], ["i", "item"], ["a", "ate"], ["o", "outro"], ["u", "utem"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputMensagem.value = textoDesencriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [["e", "en"], ["i", "item"], ["a", "ate"], ["o", "outro"], ["u", "utem"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}
