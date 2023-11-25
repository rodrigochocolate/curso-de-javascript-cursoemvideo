// Fazer um Verificador de Idade que mostra o sexo, idade e foto de acordo com os status do usuário
// 1    - Colocar o título 'Verificador de Idade' na página
// 2    - Pegar a idade do usuário
//  2.1     - Mostrar 'Ano de nascimento:' no canto da caixa
//  2.2     - Fazer um input do tipo number do lado do 'Ano de Nascimento:'
//  2.3     - Fazer um cálculo com o ano de nascimento do usuário para pegar sua idade
// 3    - Pegar o sexo do usuário
//  3.1     - Imprimir na tela 'Sexo:'
//  3.2     - Ao lado de 'Sexo:' fazer um input do tipo radio escrito Masculino
//  3.3     - Ao lado de 'Masculino'Fazer um input do tipo radio escrito Feminino
// 4    - Criar um botão de verificar na tela
//  4.1     - Usar a tag button para fazer um botão escrito 'Verificar'
// 5    - Mostrar os status do usuário
//  5.1     - Imprimir uma mensagem com o sexo e idade do usuário
// 6    - Colocar uma foto de uma pessoa de acordo com o status do usuário
//  6.1     - Deixar a foto no formato circular usando o paint.net
//  6.2     - Colocar a foto em uma tag img

function verificar() {
    // Calculando a idade do usuário
    const agora         = new Date()
    const anoAtual      = agora.getFullYear()
    const anoNascimento = document.querySelector('#anoNascimento').value
    const idade         = anoAtual - anoNascimento

    const divStatus       = document.querySelector('#status')
    let sexo = document.querySelector('input[name="sexo"]:checked').value

    if (sexo == 'masculino') {
        sexo = 'Homem'
        divStatus.innerHTML = `Detectamos um ${sexo} com ${idade} anos.`
    } else {
        sexo = 'Mulher'
        divStatus.innerHTML = `Detectamos uma ${sexo} com ${idade} anos.`
    }
}