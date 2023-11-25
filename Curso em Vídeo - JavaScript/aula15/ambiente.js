const num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
// console.log(num)
// console.log(`O vetor tem ${num.length} elementos`)
// console.log(`O primeiro valor da array é ${num[0]}`)
const pos8 = num.indexOf(8)
const pos4 = num.indexOf(4)
console.log(num)
console.log(`O valor 8 está na posição ${pos8}`)
if (pos4 == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos4}`)
}
