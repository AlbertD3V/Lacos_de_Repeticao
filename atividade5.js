//  Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual 
//ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let login = ''
let senha = ''

login = prompt('Informe o Usurio: ')
senha = prompt('Informe a senha: ')
while(login == senha){
    alert('Invalido! A senha não pode ser igual ao loguin')
    login = prompt('Informe o Usurio: ')
    senha = prompt('Informe a senha: ')

}
alert('Bem vindo')