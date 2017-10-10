/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ "rafael", "ninja", 05, true, undefined,];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArray(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var values = ["Curso", 05, true, null, ["curso", "js"]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArray(values,0));
console.log(returnArray(values,1));
console.log(returnArray(values,2));
console.log(returnArray(values,3));
console.log(returnArray(values,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(x) {
    var books = {
        'O Senhor dos Anéis': {
            quantidadePaginas: 1234,
            autor: "J. R. R. Tolkien",
            editora: "Martins Fontes"
        },
        'Deuses Americanos': {
            quantidadePaginas: 447,
            autor: "Neil Gaiman",
            editora: "Conrad"
        },
        'As Crônicas de Arthur': {
            quantidadePaginas: 1586,
            autor: "Bernard Cornwell",
            editora: "Record"
        }
    }

    return x ? books[x] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = 'O Senhor dos Anéis';
console.log("O livro " + nome + " tem " + book(nome).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nome = 'As Crônicas de Arthur';
console.log("O autor do livro " + nome + " é " + book(nome).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nome = 'Deuses Americanos';
console.log("O livro " + nome + " foi publicado pela editora " + book(nome).editora + ".");
