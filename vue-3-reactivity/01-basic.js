let price = 5
let quantity = 2
let total = 0

let dep = new Set()

let effect = () => {
    total = price * quantity
}

function track() {
    dep.add(effect)
}

function trigger() {
    dep.forEach(effect => effect())
}

track()
effect()

// console.log(total)

// quantity = 3;
// console.log(total)

// trigger()
// console.log(total)
