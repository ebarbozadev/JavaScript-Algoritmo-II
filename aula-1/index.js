const {edGalho, edFolha} = require('./arrays');

const empresas = edGalho.concat(edFolha);

function insertionSort(lista){
    for (let i = 0; i < lista.length; i++){
        while (i > 0 && lista[i].preco < lista[i - 1].preco) {
            let itemAtual = lista[i];
            let itemAnterior = lista[i - 1];

            lista[i] = itemAnterior;
            lista[i - 1] = itemAtual;

            i--
        }
    }
    console.log(lista)
}

insertionSort(empresas);