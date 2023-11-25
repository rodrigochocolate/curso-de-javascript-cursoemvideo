function verificar() {
    const data = new Date()
    const ano  = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res  = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        const fsex   = document.getElementsByName('radsex')
        const idade  = ano - Number(fano.value)
        let   genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}