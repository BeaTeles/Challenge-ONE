const botaoCriptografar = document.querySelector('.botao_acao_criptografar');
const botaoDescriptografar = document.querySelector('.botao_acao_descriptografar');
const inputTexto = document.querySelector('.input_texto');
const outputTexto = document.querySelector('.output_texto');
const containerResultado = document.querySelector('.container_resultado_texto_criptografado');

botaoCriptografar.addEventListener('click', () => {
    console.log('Criptografado!');
    const texto = inputTexto.value;
    const textoCriptografado = btoa(texto);
    outputTexto.value = textoCriptografado; 
    outputTexto.style.backgroundImage = 'none';
});

botaoDescriptografar.addEventListener('click', () => {
    console.log('Descriptografado!');
    const textoCriptografado = inputTexto.value; 
    const textoDescriptografado = atob(textoCriptografado);
    outputTexto.value = textoDescriptografado;
    outputTexto.style.backgroundImage = none
});