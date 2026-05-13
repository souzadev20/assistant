import {enviarPergunta} from '../scripts/service.js'

// Capturando select
const selectCidade = document.querySelector('#city-select')
// Vigiando o evento click no select
selectCidade.addEventListener('click', () => {
    let cidadeSelecionada = selectCidade.value
    if(cidadeSelecionada != '') {
        setTimeout(() => {
            selectCidade.value = ''
        }, 2000)
        enviarPergunta(cidadeSelecionada)
        return console.log(cidadeSelecionada)
    }
})

const btnEnviar = document.querySelector('#send-btn')

btnEnviar.addEventListener('click', () => {
    const inputUser = document.querySelector('#user-input')
    const mensagemUser = inputUser.value
    
    if(mensagemUser === '') {
        alert('CAMPO VAZIO!')
        return
    }

    enviarPergunta(mensagemUser)
    document.querySelector('#user-input').value = ''
    return
})
