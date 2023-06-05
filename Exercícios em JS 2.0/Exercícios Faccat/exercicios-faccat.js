// Lê o número antecessor ao que foi inserido (EX5)
function antecessor() {

  let numero = parseInt(prompt("Digite um número :"))

  let antecessor = numero - 1

  alert("O número antecessor do " + numero + " digitado foi: " + antecessor)
}


// Calcula a base de um triângulo (EX6)
function triangulo() {

  let base = parseInt(prompt("Qual a base do triangulo: "))
  let altura = parseInt(prompt("Qual a altura do triangulo:"))
  let resultado = base * altura / 2
  alert("A area do triangulo: " + resultado)
}


// Lê a idade da pessoa em anos, meses e dias (EX7)
function idade() {

  let anos = parseInt(prompt("Digite a idade em anos: "));
  let meses = parseInt(prompt("Digite quanto tempo faz desde o seu ultimo aniversario: "));
  let dias = parseInt(prompt("Digite Quantos dias faz desde o seu ultimo  mesversario: "));

  let idadeDias = anos * 365 + meses * 30 + dias;

  alert(`A idade dessa pessoa em dias é ${idadeDias} dias.`);
}


// Lê o número total de eleitores, votos brancos, nulos e válidos (EX8)
function eleicao() {

  let eleitores = parseInt(prompt("Digite o número total de eleitores: "));
  let votosBrancos = parseInt(prompt("Digite o número de votos em branco: "));
  let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
  let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

  // Calculo do percentual de cada tipo de voto em relação ao total de eleitores
  let percentualBrancos = (votosBrancos / eleitores) * 100;
  let percentualNulos = (votosNulos / eleitores) * 100;
  let percentualValidos = (votosValidos / eleitores) * 100;

  // Resultado do percentual
  alert(`Percentual de votos em branco: ${percentualBrancos}%`);
  alert(`Percentual de votos nulos: ${percentualNulos}%`);
  alert(`Percentual de votos válidos: ${percentualValidos}%`);
}


// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário. (EX9)
function salario() {

  let salario = parseFloat(prompt("Digite seu salario atual:"))

  let reajuste = parseFloat(prompt("Digite o percentual de reajuste:"))
  let salario_reajuste = salario + (reajuste * salario) / (100)

  alert("O novo salário é de R$ " + salario_reajuste)
}


// O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica
// com  a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de fábrica).
// Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  
// escrever  um  algoritmo  para  ler o  custo  de  fábrica  de  um  carro, calcular e escrever o custo final ao consumidor. (EX10)
function carro() {

  let valor_do_carro = parseFloat(prompt("Digita o valor de fabrica do carro:"))
  let impostos = valor_do_carro * 73 / 100
  let resultado = valor_do_carro + impostos

  alert("Os impostos sobre esse carro são de: " + impostos
    + " O custo final ao consumidor é de:" + resultado)
}


// Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais  uma  comissão
// também  fixa  para  cada  carro  vendido  e  mais  5% do  valor  das  vendas  por  ele efetuadas. 
// Escrever um algoritmo que leia o número de  carros por  ele vendidos, o valor total de suas vendas, o salário fixo e o valor 
// que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. (EX11)
function revendedora() {

  let salario_fixo = parseFloat(prompt("Seu salario é de: "));
  let valor_do_carro = parseFloat(prompt("Qual o valor do carro vendido: "));
  let carros_vendidos = parseFloat(prompt("Quantos carros você vendeu:"));

  let comissao1 = (5 / 100) * valor_do_carro;
  let comissao = comissao1 * carros_vendidos;
  let salario_total = salario_fixo + comissao;

  alert(
    "Sua comissão é de: " + comissao + " Seu salario total é de: " + salario_total);
}


// Algoritmo que lê uma temperatura em graus fahrenheit, calcular e escrever o valor correspondente em graus Celsius (EX12)
function fahrenheit() {

  let fahrenheit = parseFloat(prompt('Digite o valor em Fahrenheit:'))
  let c = (fahrenheit - 32) * (5 / 9)
  alert(fahrenheit + 'convertidos para Graus é:' + c)
}


// Faça  um  algoritmo  que  leia  três  notas  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:... (EX13)
function notas() {

  let nota_01 = parseFloat(prompt("Digite a primeira nota: "));
  let nota_02 = parseFloat(prompt("Digite a segunda nota: "));
  let nota_03 = parseFloat(prompt("Digite a terceira nota: "));

  let nota_final = ((nota_01 * 2) + (nota_02 * 3) + (nota_03 * 5)) / 10;

  alert("Sua  media final é: " + nota_final);
}


// Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10,
// caso contrário escrever NÃO É MAIOR QUE 10! (EX14) 
function verificaValor() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor > 10) {
    alert("É MAIOR QUE 10!");
  } else if (valor == 10) {
    alert("É IGUAL QUE 10!");
  } else {
    alert("NÃO É MAIOR QUE 10!");
  }
}


// Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). (EX15)
function positivoOuNegativo() {
  let valor = Number(prompt("Digite um valor:"));

  if (valor >= 0) {
    alert("O valor é positivo.");
  } else {
    alert("O valor é negativo.");
  }
}


// As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.
// Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra. (EX16)
function maca() {
  let quantidade = Number(prompt("Digite o número de maçãs compradas:"));

  let preco;

  if (quantidade < 12) {
    preco = 1.3;
  } else {
    preco = 1;
  }

  let custoTotal = quantidade * preco;

  alert("O custo total da compra é de: R$" + custoTotal);
}


// Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média aritmética  simples  e  escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado).
// Escrever também a média calculada. (EX17)
function mediaAritmetica() {
  let nota1 = Number(prompt("Digite a nota da 1ª avaliação:"));
  let nota2 = Number(prompt("Digite a nota da 2ª avaliação:"));

  let media = (nota1 + nota2) / 2;

  alert("A média do aluno é ." + media);

  if (media >= 6) {
    alert("O aluno foi aprovado.");
  } else {
    alert("O aluno não foi aprovado.");
  }
}


// Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá 
// ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). (EX18) 
function podeOuNaoVotar() {
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite o ano de nascimento:"));

  let idade = anoAtual - anoNascimento;

  if (idade >= 16) {
    alert("Você pode votar este ano.");
  } else {
    alert("Você não pode votar este ano.");
  }
}


// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. (EX19)
function escreveOMaiorNumero() {
  let valor1 = Number(prompt("Digite o primeiro valor:"));
  let valor2 = Number(prompt("Digite o segundo valor:"));

  if (valor1 > valor2) {
    alert("O primeiro valor é maior: " + valor1);
  } else {
    alert("O segundo valor é maior: " + valor2);
  }
}


// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. (EX20)
function escreveNumerosEmOrdemCrescente() {
  let valor1 = Number(prompt("Digite o primeiro valor:"));
  let valor2 = Number(prompt("Digite o segundo valor:"));

  if (valor1 < valor2) {
    alert(
      valor1 +
      " é menor que " +
      valor2 +
      ", então a ordem crescente é: " +
      valor1 +
      ", " +
      valor2
    );
  } else {
    alert(
      valor1 +
      " é maior que " +
      valor2 +
      ", então a ordem crescente é: " +
      valor2 +
      ", " +
      valor1
    );
  }
}


// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule
// a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia 
// e terminar no dia seguinte. (EX21)
function xadrezTempo() {
  let horaInicio = Number(
    prompt("Digite a hora de início do jogo (somente o valor inteiro):")
  );
  let horaFim = Number(
    prompt("Digite a hora de fim do jogo (somente o valor inteiro):")
  );

  let duracao = 0;

  if (horaInicio < horaFim) {
    duracao = horaFim - horaInicio;
  } else {
    duracao = 24 - horaInicio + horaFim;
  }

  alert("A duração do jogo foi de " + duracao + " horas.");
}


// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,
// cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas
// em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido
// trabalhadas (considere que o mês possua 4 semanas exatas). (EX22)
function jornada40hrs() {
  let horasTrabalhadas = Number(
    prompt("Digite o número de horas trabalhadas no mês:")
  );
  let salarioHora = Number(prompt("Digite o salário por hora:"));

  const HORAS_SEMANAIS = 40;
  const SEMANAS_MES = 4;
  let salarioTotal;

  if (horasTrabalhadas <= HORAS_SEMANAIS * SEMANAS_MES) {
    salarioTotal = horasTrabalhadas * salarioHora;
  } else {
    let horasExtras = horasTrabalhadas - HORAS_SEMANAIS * SEMANAS_MES;
    salarioTotal =
      HORAS_SEMANAIS * SEMANAS_MES * salarioHora +
      horasExtras * (salarioHora * 1.5);
  }

  alert("O salário total do funcionário é de: R$" + salarioTotal);
}


// Identifique erros na estrutura a seguir: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa,  (EX23)
// calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:
// - para sexo masculino:  peso ideal = (72.7 * altura) - 58 
// - para sexo feminino:  peso ideal = (62.1 * altura) - 44.7 
function pesoIdeal() {
  let nome = prompt("Digite seu nome:");
  let sexo = prompt("Digite seu sexo (M/F):");
  let altura = Number(prompt("Digite sua altura em metros:"));

  if (sexo.toUpperCase() === "M") {
    let peso_ideal = 72.7 * altura - 58;
    alert(nome + " seu peso ideal é" + peso_ideal + " kg.");
  } else {
    let peso_ideal = 62.1 * altura - 44.7;
    alert(nome + " seu peso ideal é " + peso_ideal + " kg.");
  }
}


// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão (EX24)
//  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total.
function salarioTotal() {
  let salarioFixo = Number(prompt('Digite o salário fixo do vendedor: '));
  let vendasTotal = Number(prompt('Digite o valor total das vendas do vendedor: '));
  let comissao01 = (vendasTotal * 3) / 100;
  let comissao02 = (1500 * 3 / 100) + ((vendasTotal - 1500) * 5 / 100);
  let salarioFinal01 = salarioFixo + comissao01;
  let salarioFinal02 = salarioFixo + comissao02;

  if (vendasTotal <= 1500) {
    alert('O salário final do vendedor é: R$ ' + salarioFinal01)
  }

  else {
    alert('O salário final do vendedor é: R$ ' + salarioFinal02)
  }
}


// Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito. Após,  calcular e escrever o saldo atual (EX25)
// (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever
//a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
function saldoConta() {
  let numeroConta = Number(prompt('Digite o número da sua conta: '));
  let saldo = Number(prompt('Digite o saldo da conta: '));
  let debito = Number(prompt('Digite o valor que foi retirado dela: '));
  let credito = Number(prompt('Digite o valor que vai ser depositado nela: '));
  let saldoAtual = (saldo - debito) + credito;

  if (saldoAtual >= 0) {
    alert(numeroConta + ' o seu saldo é de: R$ ' + saldoAtual + ' e está POSITIVO!');
  }

  else {
    alert(numeroConta + ' o seu saldo é de: R$ ' + saldoAtual + ' e está NEGATIVO!');
  }
}


//  Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade  mínima  em  estoque (EX26)
//  de  um  produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade média = quantidade máxima + quantidade mínima)/2).
// Se a quantidade em estoque for maior ou igual a  quantidade  média  escrever  a
//mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar compra'.
function reporEstoque() {
  let quantAtual = Number(prompt('Digite a quantidade atual do estoque: '));
  let quantMax = Number(prompt('Digite a quantidade máxima do estoque: '));
  let quanMin = Number(prompt('Digite a quantidade mínima do estoque: '));
  let quantMedia = (quantMax + quanMin) / 2;

  if (quantAtual >= quantMedia) {
    alert('NÃO EFETUAR COMPRA')
  }

  else {
    alert('EFETUAR COMPRA')
  }
}


// Ler um valor e escrever se é positivo, negativo ou zero. (EX27)
function positivoNegativo() {

  const valor = parseFloat(prompt("Digite um valor:"));

  if (valor > 0) {
    console.log("O valor é positivo.");
  } else if (valor < 0) {
    console.log("O valor é negativo.");
  } else {
    console.log("O valor é zero.");
  }
}


// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. (EX28)
function numeroMaior() {
  let numero01 = Number(prompt('Digite o primeiro número: '));
  let numero02 = Number(prompt('Digite o segundo número: '));
  let numero03 = Number(prompt('Digite o terceiro número: '));

  if (numero01 == numero02 || numero02 == numero03 || numero03 == numero01) {
    console.log('Os números não podem ser iguais. Tente novamente');
  }

  else if (numero01 > numero02 && numero01 > numero03) {
    console.log('O maior número é: ' + numero01);
  }

  else if (numero02 > numero01 && numero02 > numero03) {
    console.log('O maior número é: ' + numero02);
  }

  else {
    console.log('O maior número é: ' + numero03);
  }
}


// Ler  3  valores (considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores. (EX29)
function somaMaiores() {
  let numero01 = Number(prompt('Digite o primeiro número: '));
  let numero02 = Number(prompt('Digite o segundo número: '));
  let numero03 = Number(prompt('Digite o terceiro número: '));

  let soma01 = numero01 + numero02;
  let soma02 = numero02 + numero03;
  let soma03 = numero01 + numero03;

  if (numero01 == numero02 || numero02 == numero03 || numero01 == numero03) {
    console.log('Os números não podem ser iguais. Tente novamente');
  }

  else if (numero01 > numero03 && numero02 > numero03) {
    console.log('A soma dos dois maiores números é: ' + soma01);
  }

  else if (numero02 > numero01 && numero03 > numero01) {
    console.log('A soma dos dois maiores números é: ' + soma02);
  }

  else {
    console.log('A soma dos dois maiores números é: ' + soma03);
  }
}


// Ler  3  valores (considere  que  não  serão  informados  valores  iguais)  e  escrevê-los  em  ordem crescente.  (EX30)
function ordenarValores() {

  const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor:"));
  const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

  let menor, doMeio, maior;

  if (valor1 < valor2 && valor1 < valor3) {
    menor = valor1;
    if (valor2 < valor3) {
      doMeio = valor2;
      maior = valor3;
    } else {
      doMeio = valor3;
      maior = valor2;
    }
  } else if (valor2 < valor1 && valor2 < valor3) {
    menor = valor2;
    if (valor1 < valor3) {
      doMeio = valor1;
      maior = valor3;
    } else {
      doMeio = valor3;
      maior = valor1;
    }
  } else {
    menor = valor3;
    if (valor1 < valor2) {
      doMeio = valor1;
      maior = valor2;
    } else {
      doMeio = valor2;
      maior = valor1;
    }
  }

  console.log("Valores em ordem crescente: " + menor + ", " + doMeio + ", " + maior);
}


// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. (EX31)
// OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.
function verificarTriangulo() {

  const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
  const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
  const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("Os valores formam um triângulo.");
  } else {
    console.log("Os valores não formam um triângulo.");
  }
}


// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. (EX32)
// Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
function verificarVencedor() {

  const time1 = prompt("Digite o nome do time 1:");
  const golsTime1 = parseInt(prompt("Digite o número de gols marcados pelo time 1:"));

  const time2 = prompt("Digite o nome do time 2:");
  const golsTime2 = parseInt(prompt("Digite o número de gols marcados pelo time 2:"));

  if (golsTime1 > golsTime2) {
    console.log("O vencedor é o time " + time1 + ".");
  } else if (golsTime2 > golsTime1) {
    console.log("O vencedor é o time " + time2 + ".");
  } else {
    console.log("EMPATE");
  }
}


// Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, (EX33)
// caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.
function compararValores() {

  const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor:"));

  if (valor1 === valor2) {
    console.log("Números iguais");
  } else if (valor1 > valor2) {
    console.log("Primeiro é maior");
  } else {
    console.log("Segundo é maior");
  }
}


// Faça um teste de mesa e complete os valores: (EX34)
function testeVariaveis() {

  let x = Number(prompt('Digite o valor de x: '));
  let y = Number(prompt('Digite o valor de y: '));
  let z = (x * y) + 5
  let resposta

  if (z <= 0) {
    resposta = 'A'
  }

  else if (z <= 100) {
    resposta = 'B'
  }

  else {
    resposta = 'C'
  }

  console.log('Z: ' + z + ' Resposta: ' + resposta)
}


// Escreva  um  algoritmo  que  leia  o  número  de  litros  vendidos  e  o  tipo  de  combustível (EX35)
// (codificado  da seguinte  forma: A-álcool, G-gasolina),  calcule  e  imprima  o  valor  a  ser  pago  pelo  cliente 
// sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
function precoCombustivel() {

  let litros = Number(prompt('Digite a quantidade de litros vendidos: '));
  let tipoCombustivel = prompt('Informe o tipo de combustível (A-álccol,G-gasolina): ');
  let valorLitro = 0;
  let valorTotal = 0;

  if (tipoCombustivel == 'A' || tipoCombustivel == 'a') {
    if (litros <= 20) {
      valorLitro = 2.9 * 0.97
    }
    else {
      valorLitro = 2.9 * 0.95
    }
  }

  if (tipoCombustivel == 'G' || tipoCombustivel == 'g') {
    if (litros <= 20) {
      valorLitro = 2.9 * 0.96
    }
    else {
      valorLitro = 2.9 * 0.94
    }
  }

  valorTotal = litros * valorLitro

  alert('O valor a ser pago será de: R$ ' + valorTotal)
}


// Escreva  um  algoritmo  que  leia  as  idades  de  2  homens  e  de  2  mulheres (EX36)
// (considere  que  as  idades dos  homens  serão  sempre  diferentes  entre  si,  bem  como  as  das  mulheres).
// Calcule  e  escreva  a  soma das  idades  do  homem  mais  velho  com  a  mulher  mais  nova,  e  o  produto  das  idades
// do  homem  mais novo com a mulher mais velha. 
function idade() {

  let idadeHomem1 = Number(prompt('Digite a idade do primeiro homem:'));
  let idadeHomem2 = Number(prompt('Digite a idade do segundo homem: '));
  let idadeMaisVelho = 0;
  let idadeMaisNovo = 0;



  let idadeMulher1 = Number(prompt('Digite a idade da primeira mulher: '));
  let idadeMulher2 = Number(prompt('Digite a idade da segunda mulher: '));

  if (idadeHomem1 > idadeHomem2) {
    idadeMaisVelho = idadeHomem1;
  }

  else {
    idadeMaisVelho = idadeHomem2;
  }

  if (idadeMulher1 < idadeMulher2) {
    idadeMaisNovo = idadeMulher1;
  }

  else {
    idadeMaisNovo = idadeMulher2;
  }

  let somaIdades = idadeMaisVelho + idadeMaisNovo;
  console.log('A soma das idades do homem mais velho com a mulher mais nova é: ' + somaIdades)


  if (idadeHomem1 < idadeHomem2) {
    idadeMaisNovo = idadeHomem1;
  }

  else {
    idadeMaisNovo = idadeHomem2;
  }

  if (idadeMulher1 > idadeMulher2) {
    idadeMaisVelho = idadeMulher1;
  }

  else {
    idadeMaisVelho = idadeMulher2;
  }

  let produtoIdades = idadeMaisNovo * idadeMaisVelho

  console.log('O produto das idades do homem mais novo com a mulher mais velha é: ' + produtoIdades)
}


// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda  um  desconto (EX37)
// de  10%  sobre  este  total.  Escreva  um  algoritmo  para  ler  a  quantidade  (em  Kg)  de morangos e a quantidade (em Kg) 
// de maças adquiridas e escreva o valor a ser pago pelo cliente.
function feira() {

  let qtdMorangos = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
  let qtdMacas = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));

  let precoMorangos = 0;
  if (qtdMorangos <= 5) {
    precoMorangos = qtdMorangos * 2.5;
  } else {
    precoMorangos = qtdMorangos * 2.2;
  }


  let precoMacas = 0;
  if (qtdMacas <= 5) {
    precoMacas = qtdMacas * 1.8;
  } else {
    precoMacas = qtdMacas * 1.5;
  }


  let precoTotal = precoMorangos + precoMacas;

  if (precoTotal > 25 || (qtdMorangos + qtdMacas) > 8) {
    precoTotal *= 0.9;
  }


  alert(`O preço total a ser pago é: R$ ${precoTotal.toFixed(2)}`);

}


// Faça  um  algoritmo  para  ler  um  número  que  é  um  código  de  usuário.  Caso  este  código  seja diferente  de  um  código (EX38)
// armazenado  internamente  no  algoritmo  (igual  a 1234)  deve  ser  apresentada  a mensagem ‘Usuário inválido!’. 
// Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa  é 9999) 
// deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
function login() {

  let codigo = prompt("Digite o código de usuário:");


  if (codigo != "1234") {
    alert("Usuário inválido!");
  } else {
    let senha = prompt("Digite a senha:");

    if (senha != "9999") {
      alert("Senha incorreta!");
    } else {
      alert("Acesso permitido!");
    }
  }

}


// Para  A = V,  B = V  e  C = F,  qual o resultado da avaliação das expressões: (EX39)
function validacao() {

  const A = true;
  const B = true;
  const C = false;

  const a = (A && B) || (A ^ B);
  console.log("Resultado de (A e B) ou (A xou B):", a);

  const b = (A || B) && (A && C);
  console.log("Resultado de (A ou B) e (A e C):", b);

  const c = A || (C && B) ^ (A && !B);
  console.log("Resultado de (A ou C) e (B ou A) e (não B):", c);

}


// Faça  um  algoritmo  para  ler:  a  descrição  do  produto  (nome),  a  quantidade  adquirida  e  o  preço unitário. (EX40)
// Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto)
function totalPagar() {

  let descricao = prompt("Digite a descrição do produto:");
  let quantidade = Number(prompt("Digite a quantidade adquirida:"));
  let precoUnitario = Number(prompt("Digite o preço unitário:"));

  let total = quantidade * precoUnitario;

  let desconto = 0;

  if (quantidade <= 5) {
    desconto = total * 0.02;
  } else if (quantidade <= 10) {
    desconto = total * 0.03;
  } else {
    desconto = total * 0.05;
  }

  let totalAPagar = total - desconto;

  console.log("Descrição do produto:", descricao);
  console.log("Quantidade adquirida:", quantidade);
  console.log("Preço unitário:", precoUnitario);
  console.log("Total:", total.toFixed(2));
  console.log("Desconto:", desconto.toFixed(2));
  console.log("Total a pagar:", totalAPagar.toFixed(2));

}


// Faça  um  algoritmo  para  ler  as  3  notas  obtidas  por  um  aluno  nas  3 verificações  e  a  média  dos exercícios que fazem parte da avaliação. 
// Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno (EX41)
function mediaAproveitamento() {

  let n1 = parseFloat(prompt("Digite a primeira nota:"));
  let n2 = parseFloat(prompt("Digite a segunda nota:"));
  let n3 = parseFloat(prompt("Digite a terceira nota:"));
  let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

  let mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7;

  let conceito;
  if (mediaAproveitamento >= 9.0) {
    conceito = "A";
  } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0) {
    conceito = "B";
  } else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 7.5) {
    conceito = "C";
  } else {
    conceito = "D";
  }


  alert(`Média de aproveitamento: ${mediaAproveitamento.toFixed(1)}\nConceito: ${conceito}`);

}


// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes (EX42)
//requisitos deve ser satisfeito:
// - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos  e ter trabalhado no mínimo 25 anos. 
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa.
// O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'.
function aposentadoria() {

  let codigo = prompt("Informe o código do empregado:");
  let anoNascimento = parseInt(prompt("Informe o ano de nascimento do empregado:"));
  let anoIngresso = parseInt(prompt("Informe o ano de ingresso do empregado na empresa:"));


  let idade = new Date().getFullYear() - anoNascimento;
  let tempoTrabalho = new Date().getFullYear() - anoIngresso;


  if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    console.log(`Código: ${codigo}`);
    console.log(`Idade: ${idade} anos`);
    console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
    console.log("Requerer aposentadoria");
  } else {
    console.log(`Código: ${codigo}`);
    console.log(`Idade: ${idade} anos`);
    console.log(`Tempo de trabalho: ${tempoTrabalho} anos`);
    console.log("Não requerer");
  }

}


// Faça um teste de mesa e complete os seguintes valores das variáveis: (EX43)
function triangulo() {

  let a, b, c;
  a = Number(prompt("Digite o valor de a:"));
  b = Number(prompt("Digite o valor de b:"));
  c = Number(prompt("Digite o valor de c:"));

  if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if (a == b && b == c) {
      console.log("Triângulo Equilátero");
    } else if (a == b || b == c || a == c) {
      console.log("Triângulo Isósceles");
    } else {
      console.log("Triângulo Escaleno");
    }
  } else {
    console.log("Não é possível formar um triângulo");
  }

}


// Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, (EX44-46)
// para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido.
// (utilizar a estrutura REPITA).
function divisao() {

  let valor1, valor2, resultado;

  do {
    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor2 === 0) {
      alert("VALOR INVÁLIDO: O segundo valor não pode ser zero!");
    }

  } while (valor2 === 0);

  resultado = valor1 / valor2;

  alert("O resultado da divisão é: " + resultado);


}


// Reescreva o exercício anterior utilizando a estrutura ENQUANTO. (EX45-47)
function divisao2() {

  let valor1 = parseInt(prompt("Digite o primeiro valor: "));
  let valor2 = parseInt(prompt("Digite o segundo valor (não pode ser zero): "));

  while (valor2 === 0) {
    valor2 = parseInt(prompt("Valor inválido. Digite um valor diferente de zero: "));
  }

  let resultado = valor1 / valor2;

  console.log(`O resultado da divisão é ${resultado}`);

}


// Escreva  um  algoritmo  para  ler  as  notas  da  1a.  e  2a.  avaliações  de um  aluno,  calcule  e  imprima  a média (simples) desse aluno. (EX48~49)
// Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. 
function media() {

  let resposta = 'S';

  while (resposta === 'S') {
    let nota1 = Number(prompt("Digite a nota da primeira avaliação:"));
    while (nota1 < 0 || nota1 > 10) {
      nota1 = Number(prompt("Digite uma nota válida (0 a 10) para a primeira avaliação:"));
    }
    let nota2 = Number(prompt("Digite a nota da segunda avaliação:"));
    while (nota2 < 0 || nota2 > 10) {
      nota2 = Number(prompt("Digite uma nota válida (0 a 10) para a segunda avaliação:"));
    }
    let media = (nota1 + nota2) / 2;
    console.log("A média do aluno é: " + media.toFixed(2));
    resposta = prompt("NOVO CÁLCULO (S/N)?");
  }


}


// Escreva  um  algoritmo  para  imprimir  os  números  de  1  (inclusive)  a  10  (inclusive)  em  ordem crescente. (EX50)
function ordemCrescente() {

  for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
    
}


// Escreva  um  algoritmo  para  imprimir  os  números  de  1  (inclusive)  a  10  (inclusive)  em  ordem decrescente. (EX51)
function ordemDecrescente() {

  for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
    
}


// Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. (EX52)
function maiorQueCem() {

  for (let i = 101; i <= 110; i++) {
      console.log(i);
    }
    
}


// Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. (EX53~54)
function numeroInteiro() {

  let n = 0;
      while (n <= 0) {
          n = Number(prompt("Digite um valor maior que zero para N:"));
      }
      
      for (let i = 1; i <= n; i++) {
           console.log(i);
      }
}


// Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10). (EX55)
function tabuada8() {

  for (let i = 1; i <= 10; i++) {
      const resultado = i * 8;
      console.log(`8 x ${i} = ${resultado}`);
    }
    
}


// Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. (EX56)
function tabuada(){

  let valor = parseInt(prompt("Digite um valor entre 1 e 10:"));

      if (valor >= 1 && valor <= 10) {
          for (let i = 1; i <= 10; i++) {
              let resultado = valor * i;
              console.log(`${valor} x ${i} = ${resultado}`);
          }
      } else {
      console.log("Valor inválido. Digite um valor entre 1 e 10.");
      }

}


// Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS. (EX59)
function valoresNegativos() {

  let countNegativos = 0;


      for (let i = 1; i <= 10; i++) {
      
          let valor = prompt("Insira um valor:");

     
              if (valor < 0) {
                  countNegativos++;
              }
      }


  console.log("Foram lidos " + countNegativos + " valores negativos.");

}

// Ler  10  valores  e  escrever  quantos  desses  valores  lidos  estão  no  intervalo  [10,20]  (inlcuindo  os valores 10 e 20 no intervalo)
// e quantos deles estão fora deste intervalo. (EX60)
function valorIntervalo(){

  let valoresDentroIntervalo = 0;
  let valoresForaIntervalo = 0;

      for (let i = 0; i < 10; i++) {
          let valor = prompt("Digite um valor:");
      
              if (valor >= 10 && valor <= 20) {
                  valoresDentroIntervalo++;
              } else {
                  valoresForaIntervalo++;
              }
      }

  console.log(`Valores dentro do intervalo: ${valoresDentroIntervalo}`);
  console.log(`Valores fora do intervalo: ${valoresForaIntervalo}`);

}


// Ler 10 valores, calcular e escrever a média aritmética desses valores lidos. (EX61)
function mediaAritmetica(){

  let soma = 0;


      for (let i = 1; i <= 10; i++) {
          const valor = Number(prompt(`Digite o ${i}º valor:`));
          soma += valor;
      }


  const media = soma / 10;


  console.log(`A média aritmética dos valores lidos é ${media}.`);

}

//  Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo os valores lidos na soma).
// Considere que o segundo valor lido será sempre maior que o primeiro valor lido. (EX65)
function calcularSomaInteiros() {
  const valor1 = parseInt(prompt("Digite o primeiro valor:"));
  const valor2 = parseInt(prompt("Digite o segundo valor:"));

  let soma = 0;
  for (let i = valor1; i <= valor2; i++) {
    soma += i;
  }

  console.log("A soma dos inteiros é: " + soma);
}
