const addProducts = ()=>{
const productName = document.getElementById("product-name")
const productQuantity = document.getElementById("product-quantity")

const product = productName.value
const quantity = productQuantity.value

productName.value = ''
productQuantity.value = ''
console.log(product,quantity)
displayProducts(product,quantity)
saveProductsToLocalStorage(product,quantity)
}


const displayProducts =(product,quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement("li")
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li)
}

const storedShoppingCard =() =>{
    let cart = {}
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    } return cart;
}

const saveProductsToLocalStorage = (product,quantity) =>{
const cart = storedShoppingCard();
cart[product] = quantity; 
const cartStringified = JSON.stringify(cart)
localStorage.setItem("cart",cartStringified)
}

const displayProductFromLocalStorage = () =>{
const saveCard = storedShoppingCard ();
console.log(saveCard)

for(const product in saveCard){
    const quantity = saveCard[product]
    console.log(quantity)
    console.log(product)
displayProducts(product,quantity)
}
}
displayProductFromLocalStorage()