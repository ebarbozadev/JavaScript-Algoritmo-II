const empresas = require('./arrays');

for(empresa in empresas){
    const empresasUnificadas = empresas[empresa];
    for(let nEmpresa = 0; nEmpresa < 1; nEmpresa++){
        for(let i = 0; i < empresas[empresa].length; i++){
            console.log(
                `A empresa ${empresa} tem o livro ${empresas[empresa][i].titulo} por ${empresas[empresa][i].preco}`
            );
        }
    }
}

console.log(empresasUnificadas);