 //variables
 const CartBtn = document.querySelector(".cart-btn");
 const clearCartBtn = document.querySelector(".clear-cart");
 const cartItems = document.querySelector(".cart-items");
 const cartTotal = document.querySelector(".cart-total");

 //get menu
 class Products {
 async getProducts() {
 try {
 let result = await fetch("products.json");
 return result;
} catch (error) {
	console.loh(error);
}
}
}

//local storage
class Storage{
 static saveProducts(products) {
 	localStorage.setItem("products", JSON.stringfy(products));
 };
}

document.addEventListener("DOMContentLoaded", ()=> {
	const ui = new UI ();
	const products = new Products();

	// get all menu
	products.getProducts().then(products => {
		Storage.saveProducts(products);
}) ;