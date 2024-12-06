import './styles.css'
import odinImage from './odin-lined.png'

const image = document.createElement('img')
image.src = odinImage

document.body.appendChild(image)

console.log('heyo')

const item = new Object()

console.log(item)

const atom = {
    value: 1,

    addValue: function (value) {
        return atom.value + value
    },
}

const lukeSkywalker = 'Luke Skywalker'

// bad
const obj = {
    lukeSkywalker: lukeSkywalker,
}

// bad
const bad = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
}

let myArray = ['one', 'two', 'three']

var indexMap = myArray.reduce(function (memo, item, index) {
    memo[item] = index
}, {})

console.log(indexMap)

class B {
    construtor() {}
}

class A extends B {
    constructor() {
        super()
    } // Would throw a ReferenceError.
}

var obj2 = {
    my_pref: 1,
}

console.log(obj2)
