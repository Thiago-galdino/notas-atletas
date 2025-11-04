🏆 Sistema de Cálculo de Médias para Competição de Ginástica
Este projeto é uma aplicação em JavaScript desenvolvida para calcular as médias dos atletas em uma competição de ginástica artística, seguindo as regras específicas de avaliação da competição.

📋 Descrição
A aplicação recebe o nome e as notas de vários atletas, calcula a média desconsiderando a maior e menor nota, e apresenta os resultados de forma organizada para o usuário.

🎯 Regras da Competição
Cada atleta é avaliado por 5 jurados

Cada jurado atribui uma nota de 1 a 10

A média é calculada com base nas três notas do meio

A maior e menor nota são desconsideradas

🚀 Como Usar
Pré-requisitos
Node.js instalado

Navegador web ou ambiente JavaScript

Execução
Clone o repositório ou copie o código

Execute o arquivo JavaScript:

bash
node nome_do_arquivo.js
Estrutura dos Dados
Os dados dos atletas devem seguir este formato:

javascript
let atletas = [
    {
        nome: "Nome do Atleta",
        notas: [nota1, nota2, nota3, nota4, nota5]
    }
    // ... mais atletas
];
💻 Código
Função Principal
javascript
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
        console.log("");
    }
}
Dados de Exemplo
javascript
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
📊 Exemplo de Saída
text
Atleta: Cesar Abascal
Notas Obtidas: 7.88,8.42,9.34,10,10
Média Válida: 9.25

Atleta: Fernando Puntel
Notas Obtidas: 7,8,9.33,10,10
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,8,9.5,9.5,10
Média Válida: 9.00

Atleta: Bruno Castro
Notas Obtidas: 9,9.5,10,10,10
Média Válida: 9.83
🔧 Funcionalidades
✅ Recebe dados de múltiplos atletas

✅ Ordena as notas em ordem crescente

✅ Remove a maior e menor nota automaticamente

✅ Calcula a média das três notas do meio

✅ Apresenta resultados formatados

✅ Trata números decimais corretamente

🛠️ Tecnologias Utilizadas
JavaScript ES6+

Métodos de array: sort(), slice(), forEach(), join()

Template strings para formatação

Funções de ordenação numérica

📝 Método de Cálculo
Ordenação: As notas são ordenadas do menor para o maior valor

Seleção: São selecionadas as notas das posições 1, 2 e 3 (índices 1, 2 e 3)

Cálculo: Soma das três notas do meio dividida por 3

Apresentação: Resultados formatados com 2 casas decimais

🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para:

Reportar issues

Sugerir melhorias

Enviar pull requests

📄 Licença
Este projeto é de uso livre para fins educacionais e competitivos.