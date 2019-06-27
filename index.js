const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual a sua jogada? Pedra, papel ou tesoura?', resposta => {
    const opcoes = {
        pedra: 1,
        papel: 2,
        tesoura: 3
    }
    
    if (resposta == 1) {
        console.log('Você escolheu pedra!')
    } else if (resposta == 2) {
        console.log('Você escolheu papel!')
    } else if (resposta == 3) {
        console.log('Você escolheu tesoura!')
    }

    const escolhaDoUsuario = opcoes[resposta]

    const escolhaDoComputador = Math.round(Math.random() * 2) + 1

    if (escolhaDoComputador == 1) {
        console.log('O computador escolheu pedra!')
    } else if (escolhaDoComputador == 2) {
        console.log('O computador escolheu papel!')
    } else if (escolhaDoComputador == 3) {
        console.log('O computador escolheu tesoura!')
    }

    if (escolhaDoUsuario === 1 && escolhaDoComputador === 3) {
        console.log('Você ganhou!')
    } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
        console.log('Você perdeu!');
    } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 1) {
        console.log('Empatou!');
    }

    if (escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
        console.log('Você ganhou!');
    } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 3) {
        console.log('Você perdeu!');
    } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 2) {
        console.log('Empatou!');
    }
    
    if (escolhaDoUsuario === 3 && escolhaDoComputador === 2) {
        console.log('Você ganhou!');
    } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 1) {
        console.log('Você perdeu!');
    } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 3) {
        console.log('Empatou!');
    }

    rl.close()
})