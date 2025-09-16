Estrutura Geral do Código
O programa é construído em torno de um array global chamado produtos, que armazena todos os produtos cadastrados como objetos. A lógica principal é dividida em várias funções, cada uma com uma tarefa específica, o que torna o código organizado e fácil de entender. Um laço de repetição while no final do código mantém o programa rodando, exibindo um menu de opções até que o usuário decida sair.

Análise das Funções Principais
menu()
Esta função é a interface do usuário. Ela simplesmente exibe as opções disponíveis no console e espera que o usuário digite um número. O valor digitado é lido usando o prompt-sync e a função retorna essa opção.

cadastrarProduto()
Esta é a função mais complexa, pois é responsável por receber os dados de um novo produto e validá-los.

Ela pede o nome, preço e quantidade do produto.

Realiza uma série de validações:

Checa se o nome não está vazio (!nome).

Verifica se o preço é um número válido e maior que zero usando Number.isFinite() e uma comparação simples.

Confirma se a quantidade é um número inteiro e não negativo com Number.isInteger().

Usa o método de array some() para verificar se já existe um produto com o mesmo nome (ignorando maiúsculas e minúsculas com toLowerCase()), evitando duplicatas.

Se todas as validações passarem, o produto é adicionado ao array produtos como um novo objeto.

listarProdutos()
A função de listagem exibe o conteúdo do array produtos em um formato de tabela.

Primeiro, ela checa se o array está vazio.

Usa o método de array forEach() para percorrer cada produto.

Para cada produto, calcula o subtotal (preço * quantidade) e formata os valores monetários com duas casas decimais usando toFixed(2).

Utiliza os métodos de string padEnd() para garantir que cada coluna da tabela (como Nome, Preço, etc.) tenha um espaçamento uniforme, deixando a saída mais organizada e legível.

buscarPorNome()
Esta função permite a busca de produtos de forma flexível.

Ela lê a palavra-chave de busca do usuário e a converte para minúsculas.

Emprega o método de array filter() para criar um novo array contendo apenas os produtos cujos nomes incluem a palavra-chave (de novo, usando toLowerCase() para ignorar maiúsculas e minúsculas).

Se algum produto for encontrado, ela os exibe no console.

totalEmEstoque()
O objetivo desta função é calcular o valor total de todos os produtos no estoque.

Ela utiliza o poderoso método de array reduce() para somar os subtotais de todos os produtos (preço * quantidade) em uma única operação.

O resultado final é formatado com toFixed(2) e exibido no console.

main() (O Loop Principal)
Este é o coração do programa. É uma função auto-executável que:

Inicia o programa.

Entra em um loop while (true) que nunca para por si só.

A cada repetição, chama a função menu() para exibir as opções e obter a escolha do usuário.

Usa uma série de if/else if para chamar a função correspondente à opção escolhida.

O loop só é interrompido pelo comando break quando o usuário escolhe a opção "0" (Sair).

Essencialmente, o código cria um fluxo de interação que se repete, permitindo ao usuário navegar e usar as diferentes funcionalidades do sistema de cadastro de produtos.
