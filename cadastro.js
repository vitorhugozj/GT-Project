'use strict'

const botaoSub = document.getElementById('button')

let usuarios = []

async function obterUsuarios() {
    const url = 'http://127.0.0.1:5080/usuario'
    const response = await fetch(url)
    usuarios = await response.json()
}

async function validarEmail(email) {
    await obterUsuarios()
    return usuarios.some(usuario => usuario.email === email)
}

async function enviarUsuarioParaBackend(usuarioLocal) {
    
    try {
        const url = 'http://127.0.0.1:5080/usuario'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarioLocal),
        }

        await fetch(url, options)
        return true

    } catch (error) {
        console.error('Erro ao comunicar com o backend:', error)
        alert('Erro ao comunicar com o servidor. Tente novamente.')
        return false
    }
}

function obterValoresDosCampos() {
    const nome = document.getElementById('userName').value
    const email = document.getElementById('userEmail').value
    const senha = document.getElementById('pass').value

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos.")
    }

    validarEmail(email).then(emailEmUso => {
        if (emailEmUso) {
            alert("Email já está em uso.")
        } else {
            const novoUsuarioLocal = {
                nome: nome,
                email: email,
                senha: senha
            }

            const validaCadastro = enviarUsuarioParaBackend(novoUsuarioLocal)


            if (validaCadastro){
                alert('Usuário Cadastrado')
                // Navega para login
            } else {
                alert('Erro ao Cadastrar User')
            }

        }
    })
}

botaoSub.addEventListener('click', obterValoresDosCampos)