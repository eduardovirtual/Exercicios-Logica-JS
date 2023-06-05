// Página 46 Exercícios A ~ K

// Exercício A
// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer
function tabuada() {
    let multiplicando = Number(prompt("Qual tabuada deseja? "));

    let contadora = 1;

    while (contadora <= 10) {
        const resultado = multiplicando * contadora;
        console.log(multiplicando + " x " + contadora + " = " + resultado + "<br>");
        contadora++;
    }
}


// Exercício B
// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
function numerosInteiros() {
    let soma = 0;

    let contadora = 1;

    while (contadora < 101) {
        soma = Number(soma + contadora);

        contadora++;
    }
    console.log(soma);
}


//Exercício C
//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
function somarpares() {
    let soma = 0;
    let i = 1;
    while (i <= 500) {
        if (i % 2 == 0) {
            soma += i;
        }
        i++;
    }
    console.log(soma);
}


// Exercício D
// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
// se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
// se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
function impar() {
    let i = 0;
    while (i <= 20) {
        if (i % 2 != 0) {
            console.log(i);
        }
        i++;
    }
}


// Exercício E
// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
function potencia3() {
    let i = 0;
    let potencia = 1;
    while (i <= 15) {
        console.log(`3 elevado a ${i} é ${potencia}`);
        potencia *= 3;
        i++;
    }
}


// Exercício F
// Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
function potencianumero() {
    let base = Number(prompt("Digite o valor da base:"));
    let expoente = Number(prompt("Digite o valor do expoente:"));
    let resultado = 1;
    let i = 1;
    while (i <= expoente) {
        resultado *= base;
        i++;
    }
    console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}`);
}


// Exercício G
// Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
// Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
// pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
// valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
// é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.
function fibonacci() {
    let termo = 1;
    let anterior = 1;
    let proximo = 1;
    let i = 2;
    while (i <= 50) {
        console.log(termo);
        termo = anterior + proximo;
        anterior = proximo;
        proximo = termo;
        i++;
    }
}


// Exercício H
// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
// 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
// programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é:
// F= 9C + 160
//       5
// sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
function conversor() {
    let celsius = 10;
    while (celsius <= 100) {
        let fahrenheit = (9 * celsius) / 5 + 32;
        console.log(celsius + "°C = " + fahrenheit + "°F");
        celsius += 10;
    }
}


// Exercício I
// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
// somatório e a média aritmética dos valores lidos.
function mediaSoma() {
    let total = 0;
    let media = 0;
    let contador = 0;

    while (contador < 10) {
        let valor = Number(prompt(`Digite o ${contador + 1}º valor:`));
        total += valor;
        contador++;
    }

    media = total / contador;

    console.log(
        `O total do somatório é ${total} e a média aritmética é ${media}`
    );
}


// Exercício J
//  Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
// pares situados na faixa numérica de 50 a 70.
function mediaPares() {
    let numero = 50;
    let acumuladora = 0;
    let pares = 0;
    while (numero < 71) {
        if (numero % 2 == 0) {
            acumuladora = acumuladora + numero;
            pares += 1;
        }
        numero++;
    }
    let media = acumuladora / pares;
    console.log(
        "Esses são os números pares: " +
        pares +
        " Esse é o resultado da soma: " +
        media
    );
}


// Exercício K
// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
// banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
// nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
// do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
// calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.
function comodos() {
    let areaTotal = 0;
    while (true) {
        let nome = prompt("Digite o nome do cômodo:");
        let largura = Number(prompt("Digite a largura do cômodo em metros:"));
        let comprimento = Number(
            prompt("Digite o comprimento do cômodo em metros:")
        );
        let area = largura * comprimento;
        alert(`A área do cômodo ${nome} é ${area} metros quadrados.`);
        areaTotal += area;
        let continuar = prompt(
            "Deseja calcular a área de mais um cômodo? Digite SIM ou NAO."
        );
        if (continuar.toUpperCase() !== "SIM") {
            break;
        }
    }
    alert(`A área total da residência é ${areaTotal} metros quadrados.`);
}


// Página 50 Exercícios A ~ J

//Exercício A
// Apresentar os quadrados dos números inteiros de 15 a 200. 
function quadradosInteiros() {

    let contadora = 15;
    let resultado = 0;

    do {
        resultado = contadora * contadora;
        console.log(contadora + "² = " + resultado);
        contadora++;
    } while (contadora <= 200);

}


//Exercício B
// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 
function somaPares() {

    let soma = 0;
    let contador = 0;

    do {
        contador += 2;
        soma += contador;
    } while (contador <= 500);

    alert("Total das somas dos números pares de 1 a 500 é: " + soma);
}


//Exercício C
// Apresentar  todos  os  números  divisíveis  por  4  que  sejam  menores  que  200.  Para  verificar  se  o número  é  divisível  por  4,
// efetuar  dentro  da  malha  a  verificação  lógica  desta  condição  com  a instrução se,  perguntando  se  o  número  é  divisível;
// sendo,  mostre-o;  não  sendo,  passe  para  o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1. 
function divisivel() {

    let contador = 0;
    do {
        if (contador % 4 == 0) {
            alert(contador);
        }
        contador++;
    } while (contador <= 200);
}


//Exercício D
// Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez,
// obedecendo à seguinte regra: colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. 
// Ou seja, no primeiro quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos), 
// no  terceiro  quadro  colocam-se  4  grãos  (tendo  neste momento  7  grãos),  no  quarto  colocam-se  8 grãos  (tendo-se  então  15  grãos)
//  até  atingir  o  sexagésimo  quarto  (64o)  quadro.  Utilize  variáveis  do tipo real como acumuladores. 
function graosDeTrigo() {

    let acumuladora = 0, graos = 0, contador = 0

    do{
        contador++;
        graos = 2 ** (contador - 1)
        acumuladora += graos
        console.log(acumuladora)
    } while (contador <= 64)
}


//Exercício E
//Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido. 
function numInteiros() {

    let contador = 1, numero = 1, valor = 0, fatorial = 1, soma = 0

   do{
       valor = Number(prompt("Digite um valor: "))

       numero = 1;
       fatorial = 1;

       do{
           fatorial *= numero
           numero++
       } while(numero <= valor)
       
       alert("Fatoria do valor digitado"+fatorial)
 
       soma += fatorial
 
       contador++
   } while (contador <= 15)


   alert("O somatório das fatoriais é: "+soma)
}


//Exerício F
// Elaborar  um  programa  que  efetue  a  leitura  sucessiva  de  valores  numéricos  e  apresente  no  final  o total do somatório, 
// a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos  valores  enquanto  o  usuário  estiver  fornecendo 
// valores  positivos.  Ou  seja,  o  programa  deve parar  quando  o  usuário  fornecer  um  valor  negativo. Não  se  esqueça  que  o  usuário
//  pode  entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média. 
function calcPositivoNegativo() {

    let valor = 0, soma = 0, total = 0, media=0

    do{
        valor = Number(prompt("Digite um valor:"))
        soma += valor
        total++
        media = soma / total
    } while (valor > 0)

     alert("A soma de todos os numeros digitados é: "+soma)
     alert("A média de todos os numeros digitados é: "+media)
     alert("O total de numeros digitados é: "+total)
}


//Exercício G
// Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores  ímpares situados na faixa numérica de 1 a 10.
function valoresImpares() {

    let contador = 0;
    let fatorial = 0;

    do {
        contador++;

        if (contador % 2 !== 0) {
            fatorial = 1;

            for (let numero = contador; numero > 0; numero--) {
                fatorial *= numero;
            }

            alert("Fatorial de " + contador + " = " + fatorial);
        }

    } while (contador < 10);


}


//Exercício H
// Elaborar  um  programa  que  possibilite  calcular  a área  total  de  uma  residência  (sala,  cozinha, banheiro, quartos, 
// área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo.
//  Em seguida, deve apresentar a área do  cômodo  lido  e  também  uma  mensagem  solicitando  do  usuário  a  confirmação  de  continuar calculando  novos  cômodos.
//  Caso  o  usuário  responda  “NAO”,  o  programa  deve  apresentar  o  valor total acumulado da área residencial. 
function areaResidencial() {

    let comodo, continuar
    let largura = 0
    let comprimento = 0
    let area = 0
    let total = 0

    do{
        comodo = prompt("Digite o nome do comodo")
        largura = Number(prompt("Digite a largura do comodo:"))
        comprimento = Number(prompt("Digite o comprimento do comodo:"))

        area = largura * comprimento
        total += area

        alert("A área do comodo "+comodo+" é: "+area+"m²")

        continuar = prompt("Gostaria de calcular a área de mais comodos? (SIM/NAO)")
    } while(continuar == "SIM")

    alert("O total da área de todos os comodos calculados é: "+total+"m²")
}


//Exercício I
//  Elaborar  um  programa  que  efetue  a  leitura  de  valores  positivos  inteiros  até  que  um  valor  negativo seja  informado.
//  Ao  final  devem  ser  apresentados  o  maior  e  o  menor  valores  informados  pelo usuário
function leituraPositivosInteiros() {

    let valor = 0, maior = 0

    do{
        valor = Number(prompt("Digite um número"))

        if(valor > 0){
            if(valor > maior){
                maior = valor
            }
        }
    } while (valor >= 0)
    
    alert("O maior valor digitado foi: "+maior)
    alert("O menor valor digitado foi: "+valor)
}


//Exercício J
//  Elaborar  um  programa  que  apresente  o  resultado  inteiro  da  divisão  de  dois  números  quaisquer. 
// Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV.  A  solução  deve  ser  alcançada  com  a  
// utilização de  looping.  Ou  seja,  o  programa  deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 
function dividendo() {

    let divisor = Number(prompt("Digite um numero para ser divisor:"))
    let dividendo = Number(prompt("Digite um numero para se dividir:"))
    let quociente =0

    do{
        dividendo -= divisor
        quociente++
    } while(dividendo >= divisor)

   alert("O resultado inteiro da divisão é: "+quociente)
}


// Página 66 Exercícios A ~ K

//Exercício A
// Apresentar os quadrados dos números inteiros de 15 a 200. 
function quadradosInteiros() {

    let quadrado = 0

    for(let contador = 15; contador <= 200; contador++){
        quadrado = contador * contador
        console.log(contador + "² = " + quadrado);
    }

}


//Exercício B
//  Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 
function tabuada() {

    let numero = Number(prompt("Digite um número:"))
    let tabuada = 0
    
    for(let contador = 0; contador <= 10; contador++){
        tabuada = numero*contador
        alert(numero+" X "+contador+" = "+tabuada)
    }
}


//Exercício C
// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 
function somaInteiros() {

    let soma = 0

    for(let contador = 0; contador <= 100; contador++){
        soma += contador
    }

    alert("A soma de 1 ate 100 é: "+soma)
}


//Exercício D
//  Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 
function somaPares() {
    
    let soma = 0

    for(let contador = 0; contador <= 500; contador++){
        if(contador % 2 == 0){
            soma += contador
        }
    }
   
   alert("A soma dos números pares de 1 até 500 é: "+soma)
}


//Exercício E
// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha
// a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 
function imparesSituados() {

    for(let contador = 0; contador <= 20; contador++){
        if(contador % 2 !== 0){
            alert(contador)
        }
    }
}


//Exercício F
// Apresentar  todos  os  números  divisíveis  por  4  que  sejam  menores  que  200.  Para  verificar  se  o número  é  divisível  por  4,
//  efetuar  dentro  da  malha  a  verificação  lógica  desta  condição  com  a instrução se,  perguntando  se  o  número  é  divisível;  
// sendo,  mostre-o;  não  sendo,  passe  para  o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1. 
function divisiveisPor4() {

    for(let contador = 0; contador <= 200; contador++){
        if(contador % 4 == 0){
            alert(contador)
        }
    }
}


//Exercício G
// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado  que  qualquer  número  elevado
// a  zero  é  1,  e  elevado  a  1  é  ele  próprio.  Observe  que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
function potenciasVariadas() {

    let numero = 3
    let potencia = 1
    alert("3 elevado a 0 = 1 ")

    for(let contador = 1; contador <= 15; contador++){
        potencia *= numero
        alert("3 elevado a "+contador+" = "+potencia)
    }

}


//Exercício H
//  Elaborar  um  programa  que  apresente  como  resultado  o  valor  de  uma  potência  de  uma  base qualquer elevada a um expoente qualquer,
// ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não 
// pode ser utilizado o operador de exponenciação do portuguol (^). 
function potenciaBase() {

    let base = Number(prompt("Digite o valor da base:"))
    let expoente = Number(prompt("Digite o valor do expoente:"))
    let potencia = 1

    for(let contador = 1; contador <= expoente; contador++){
        potencia = base * potencia
    }

   alert(base+" elevado a "+expoente+" é igual a "+potencia)
}


//Exercicio I
//  Escreva  um  programa  que  apresente  a  série  de  Fibonacci  até  o  décimo  quinto  termo.  A  série  de Fibonacci  é  formada 
// pela  seqüência:  1,  1,  2,  3,  5, 8,  13,  21,  34,  ...,  etc.  Esta  série  se  caracteriza pela  soma  de  um  termo  atual  
// com  o  seu  anterior  subseqüente,  para  que  seja  formado  o  próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2,
//  o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 
function serieFibonacci() {

   alert(1)
   let contador = 1
   let atual = 1
   let fibonacci = 0
   let anterior = 0 

   for(let contador = 1; contador <= 14; contador++){
       fibonacci = anterior + atual
       alert(fibonacci)
       anterior = atual
       atual = fibonacci
   }

}


//Exercício J
//  Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius
// e finalizando em 100 graus Celsius. O programa   deve   apresentar   os   valores   das   duas   temperaturas.
function celsiusEmFahrenheit() {

    let fahrenheit = 0
    for(let celsius = 10; celsius <= 100; celsius++){
        fahrenheit = 1.8 * celsius + 32
        console.log(celsius+" graus celsius é igual a "+fahrenheit+" graus fahrenheit")
    }
}


//Exercício K
//  Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores  ímpares situados na faixa numérica de 1 a 10. 
function imparesSituados2() {

    let fatorial = 0;
    let numero = 0;
    let soma = 0;

    for (let contador = 1; contador <= 10; contador++) {
        if (contador % 2 !== 0) {
            fatorial = 1;
            numero = contador;

            for (numero = contador; numero >= 1; numero--) {
                fatorial *= numero;
            }

            alert(fatorial);

            soma += fatorial;
        }
    }

    alert("O somatório das fatoriais é: " + soma);

}
