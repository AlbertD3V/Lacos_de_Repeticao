//  Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o
//valor seja inválido e continue pedindo até que o usuário informe um valor válido

let n = parseFloat(prompt('Informe um numero: '))
while((n< 0) || (n>10)){
    alert('Nota invalida')    
    n = parseFloat(prompt('Informe um numero: '))
    
}
alert('Nota ok')
document.write(n)