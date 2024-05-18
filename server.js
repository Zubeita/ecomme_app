const CategoriesContainer=document.getElementById("categories-container")
async function getALLCategories (){
    try {
        const response = await fetch ("https://fakestoreapi.com/products/categories");
        const categories = await response.json();
        console.log(categories)

        categories.map(category=>{
            CategoriesContainer.innerHTML+="<p>"+category+"</p>"
        
        })
        
    } catch (error) {
        console.log(error)


        
    }
    
}
getALLCategories() 


const productsContainer = document.getElementById("products-container");

const getProducts = async ()=>{
    try {
        const response = await fetch ("https://fakestoreapi.com/products/");
        const products = await response.json();
        console.log(products)

        products.map(product=>{
            productsContainer.innerHTML+=`<div class="product">
            <img src="${product.image}"/>

            <div class="text-container">
                <p>${product.title}</p>
                <p>${product.price}</p>
                <p>${product.description}</p>
            </div>

        
            
            </div>`
            
        
        })
        
    } catch (error) {
        console.log(error)


        
    }

}

getProducts()