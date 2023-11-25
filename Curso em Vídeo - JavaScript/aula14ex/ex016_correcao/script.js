function contar() {
    const ini = document.getElementById('txti')
    const fim = document.getElementById('txtf')
    const pas = document.getElementById('txtp')
    const res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        ini.value = fim.value = pas.value = ''
        res.innerHTML = 'Impossível contar!'
    }
    
    else {
        res.innerHTML = 'Contando: <br>'
        const i = Number(ini.value)
        const f = Number(fim.value)
        let   p = Number(pas.value)

        if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i > f && p > 0) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

        else if (i > f && p < 0) {
            for (let c = i; c >= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

        else if (i < f && p > 0) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

        else {
            ini.value = fim.value = pas.value = ''
            res.innerHTML = 'Impossível contar!'
        }
    }
}