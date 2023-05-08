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
  


