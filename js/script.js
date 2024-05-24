
//Web Storage

// localStorage ou sessionStorage

//setItem
//getItem
//removeItem
//clear

sessionStorage.setItem('produto', 'Monitor')

console.log(sessionStorage.getItem('produto'));

sessionStorage.removeItem('produto')

console.log(sessionStorage.getItem('produto'));

sessionStorage.setItem('produto', 'Monitor')
sessionStorage.setItem('preco', '1000')
sessionStorage.setItem('quantidade', '3')

//sessionStorage.clear()