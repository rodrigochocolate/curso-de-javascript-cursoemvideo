// Validação necessária
// 1 - Não adicionar o valor se o valor já estiver na lista
// 2 - Não adicionar o valor se o valor for menor que 1 ou maior que 100
// 3 - Não adicionar o valor se o a caixa de entrada estiver vazia

function adicionar() {
    const htmlNum  = document.getElementById('txtn')
    const htmlNums = document.getElementById('lista-nums')
    const htmlRes  = document.getElementById('res')

    if (htmlNum.value.length == 0 || nums.indexOf(Number(htmlNum.value)) > -1 || Number(htmlNum.value) < 1 || Number(htmlNum.value) > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        nums.push(Number(htmlNum.value))
        
        const option = document.createElement('option')
        option.value = nums.length - 1
        option.text  = `Valor ${htmlNum.value} adicionado.`
        
        htmlNums.appendChild(option)

        htmlNum.value = ''
        htmlRes.innerHTML = ''
    }
}

function finalizar() {
    const htmlRes = document.getElementById('res')

    if (nums.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let totalNums = nums.length
        let maiorNums = 0
        let menorNums = 0
        let somaNums  = 0
        let mediaNums = 0

        for (let i in nums) {
            if (i == 0) {
                menorNums = nums[i]
            }
            if (nums[i] > maiorNums) {
                maiorNums = nums[i]
            }
    
            if (nums[i] < menorNums) {
                menorNums = nums[i]
            }
    
            somaNums += nums[i]
            if (i == nums.length - 1) {
                mediaNums = somaNums / nums.length
            }
        }
    
        htmlRes.innerHTML  = `<p>Ao todo, temos ${totalNums} número(s) cadastrados.</p>`
        htmlRes.innerHTML += `<p>O maior valor informado foi ${maiorNums}.</p>`
        htmlRes.innerHTML += `<p>O menor valor informado foi ${menorNums}.</p>`
        htmlRes.innerHTML += `<p>Somando todos os valores, temos ${somaNums}.</p>`
        htmlRes.innerHTML += `<p>A média dos valores digitados é ${mediaNums}.</p>`
    }
}

const nums = []