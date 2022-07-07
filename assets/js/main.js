
function onChangeUnidade(){
    unidade = window.document.getElementById('unidade');
    unidadeConvertida = window.document.getElementById('unidade-convertida');
    valor = window.document.getElementById('valor').value;

    if(unidade.value == 'BBL'){
        unidadeConvertida.innerHTML = "Litros";
    } else {
        unidadeConvertida.innerHTML = "BBL";
    }

    convert(valor);
}

function onChangeValor(){
    valor = window.document.getElementById('valor').value;

    convert(valor);
}

function convert(valor){
    unidade = window.document.getElementById('unidade').value;
    let valorConvertido;

    unidade == "BBL" ? valorConvertido = valor * 158.987 : valorConvertido = valor / 158.987;

    window.document.getElementById('valor-convertido').value = valorConvertido.toFixed(4);
}