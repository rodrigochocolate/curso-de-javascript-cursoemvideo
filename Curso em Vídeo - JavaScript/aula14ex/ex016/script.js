function contar() {
    const ini = document.getElementById('ini')
    const fim = document.getElementById('fim')
    const pas = document.getElementById('pas')

    const res = document.getElementById('res')
    let html  = '<p>Contando:<br>'

    if (ini.value === '' || fim.value === '' || pas.value === '') {
        res.innerHTML = 'Impossível contar!'
    }

    else {
        if (Number(pas.value) === 0) {
            alert('Passo inválido! Considerando PASSO 1')
            pas.value = '1'
        }
        for (let i = Number(ini.value); i <= Number(fim.value); i += Number(pas.value)) {
            html += `${i}👉 `
        }

        html += '🏁</p>'
        res.innerHTML = html
    }
}
