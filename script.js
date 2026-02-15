const productContainer=document.getElementById('productContainer');

//fetch api

async function getProducts(){
    const response=await fetch('https://fakestoreapi.com/products');

    const products=await response.json();

    //console.log(products)

    products.forEach((product)=>{
        let card=`<div class='product'>
                    <div>
                      <img class='image' src='${product.image}'>
                      <h3 class='title'>${product.title}</h3>
                      <p class='price'>$${product.price}</p>
                      <p>${product.category}</p>
                    </div>    
                    <div class='btns'>
                          <button class='addToCart'>Add to Cart</button>
                          <button class='buy'>Buy</button>
                    </div>   
                    <p class='rating'>${product.rating.rate}&#11088</p>       
                  </div>`;
        productContainer.insertAdjacentHTML('beforeEnd',card)
    })
}
getProducts()

/*
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));*/