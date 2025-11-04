function calcularMediaAtletas(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        let notas = atleta.notas;
        
        // Ordena as notas em ordem crescente
        notas = notas.sort(function(a, b) {
            return a - b;
        });
        
        // Remove a menor e a maior nota
        let notasComputadas = notas.slice(1, 4);
        
        // Calcula a média das notas do meio
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });
        
        let media = soma / notasComputadas.length;
        
        // Exibe os resultados
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notas.join(",")}`);
        console.log(`Média Válida: ${media.toFixed(2)}`);
        console.log(""); // Linha em branco para separar os atletas
    }
}

// Dados de entrada
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Executa a função
calcularMediaAtletas(atletas);