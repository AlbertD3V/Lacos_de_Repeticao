//  Faça um programa que calcule o mostre a média aritmética de N notas 
let not1 = 0
let not2 = 0
let not3 = 0
let not4 = 0
let n = 0;
let posicao = 1;
while( n < 4){
    not1 = parseFloat(prompt(`Informe a primeira nota do ${posicao} °  aluno: `))
    not2 = parseFloat(prompt(`Informe a segunda nota do ${posicao} °  aluno: `))
    not3 = parseFloat(prompt(`Informe a terceira nota do ${posicao} °  aluno: `))
    not4 = parseFloat(prompt(`Informe a quarta nota do ${posicao} °  aluno: `))

    soma = not1+not2+not3+not4
    media = soma/4
    document.write(`As notas do ${posicao}º aluno foram: <br> Primeira nota: ${not1}<br>Segunda nota: ${not2}<br>Terceira nota: ${not3}<br>Quarta nota: ${not4}<br> Sua média foi ${media}<br>`)
    if(media>=7){
        document.write('Aluno aprovado <br>')
    }
    else if(media == 10){
        document.write('Parabens! Excelente Aluno.<br>')
    }
    else if(media<7){
        document.write('REPROVADO.<br>')
    }
    else{
        document.write('NOTA INVALIDA.<br>')
    }
n++;
posicao++;


}