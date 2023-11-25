function gerarTabuada() {
    const num = document.getElementById('num')
    if (num.value === '') {
        alert('Por favor, digite um número!')
    } else {
        const tabuada = document.getElementById('tabuada')
        let html = ''
        
        for (let c = 1; c <= 10; c++) {
            html += `<p>${num.value} x ${c} = ${num.value * c}</p>`
        }
        
        tabuada.innerHTML = html
    }
}