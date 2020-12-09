const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 20},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

const itemNames = items.map((item) => {
    return item.name
})

const item = items.find((item) => {
    return item.name === "Book"
})

items.forEach((item) => {
    //console.log(item.price)
})

const hasInexpensiveItems = items.some(item => {
    return item.price <= 50
})

const hasAllInexpensiveItems = items.every(item => {
    return item.price <= 0
})

const pricesSum = items.reduce((currentSum, item) => {
    return currentSum + item.price
}, 0)

const nums = [1,2,3,4,5]

const hasBook = nums.includes(2)
