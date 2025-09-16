// Para entrada de dados: npm i prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

// Array para armazenar os produtos
const produtos = [];

/**
 * Exibe o menu de opções e lê a escolha do usuário.
 * @returns {string} A opção escolhida pelo usuário.
 */
function menu() {
  console.log("\n--- Menu Principal ---");
  console.log("[1] Cadastrar produto");
  console.log("[2] Listar produtos");
  console.log("[3] Buscar por nome");
  console.log("[4] Total em estoque");
  console.log("[0] Sair");
  console.log("----------------------");
  const opcao = prompt("> ").trim();
  return opcao;
}

/**
 * Valida a entrada de um novo produto e o cadastra no array.
 */
function cadastrarProduto() {
  console.log("\n--- Novo Produto ---");
  const nome = prompt("Nome: ").trim();
  const preco = Number(prompt("Preço: ").replace(",", "."));
  const quantidade = Number(prompt("Quantidade: "));

  // Validação do nome: não pode ser vazio.
  if (!nome) {
    console.log("✖ Nome não pode ser vazio.");
    return;
  }

  // Validação de preço: deve ser um número finito e maior que 0.
  if (!Number.isFinite(preco) || preco <= 0) {
    console.log("✖ Preço inválido. Deve ser um número maior que zero.");
    return;
  }

  // Validação de quantidade: deve ser um número inteiro e não negativo.
  if (!Number.isInteger(quantidade) || quantidade < 0) {
    console.log("✖ Quantidade inválida. Deve ser um número inteiro e não negativo.");
    return;
  }

  // Verificação de duplicidade de nome (case-insensitive)
  const jaExiste = produtos.some(p => p.nome.toLowerCase() === nome.toLowerCase());
  if (jaExiste) {
    console.log("✖ Já existe um produto com este nome.");
    return;
  }

  // Adiciona o novo produto ao array
  produtos.push({ nome, preco, quantidade });
  console.log("✔ Produto cadastrado com sucesso!");
}

/**
 * Lista todos os produtos cadastrados com seus detalhes.
 */
function listarProdutos() {
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    return;
  }

  console.log("\n--- Lista de Produtos ---");
  console.log("# Nome                Preço    Qtde Subtotal");
  
  produtos.forEach((p, i) => {
    const subtotal = (p.preco * p.quantidade).toFixed(2);
    // Usa padEnd/padStart para alinhar a tabela
    console.log(
      String(i + 1).padEnd(3), 
      p.nome.padEnd(20), 
      String(p.preco.toFixed(2)).padEnd(9),
      String(p.quantidade).padEnd(5),
      subtotal
    );
  });
  console.log("-------------------------");
}

/**
 * Busca produtos por nome (parcial e case-insensitive).
 */
function buscarPorNome() {
  console.log("\n--- Buscar Produto ---");
  const chave = prompt("Buscar por nome: ").trim().toLowerCase();

  // Filtra o array para encontrar produtos que contenham a chave de busca
  const achados = produtos.filter(p => p.nome.toLowerCase().includes(chave));
  
  if (achados.length === 0) {
    console.log("Nenhum produto encontrado com esse nome.");
    return;
  }
  
  console.log("--- Produtos Encontrados ---");
  achados.forEach(p => {
    const subtotal = (p.preco * p.quantidade).toFixed(2);
    console.log(`Encontrado: ${p.nome} (R$${p.preco.toFixed(2)} × ${p.quantidade} = R$${subtotal})`);
  });
  console.log("----------------------------");
}

/**
 * Calcula e exibe o valor total de todos os produtos em estoque.
 */
function totalEmEstoque() {
  // Usa reduce para somar o valor total (preço * quantidade) de cada item
  const total = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0).toFixed(2);
  
  console.log("\n--- Valor Total em Estoque ---");
  console.log("Valor total em estoque: R$", total);
  console.log("------------------------------");
}

// Loop principal do programa
(function main() {
  console.log("Sistema de Cadastro de Produtos");
  while (true) {
    const op = menu();
    if (op === "1") {
      cadastrarProduto();
    } else if (op === "2") {
      listarProdutos();
    } else if (op === "3") {
      buscarPorNome();
    } else if (op === "4") {
      totalEmEstoque();
    } else if (op === "0") {
      console.log("Saindo...");
      break; 
    } else {
      console.log("Opção inválida. Por favor, digite um número de 0 a 4.");
    }
  }
})();