let filteredProducts = [...products]

const productContainer = document.querySelector(".products-container")
const form = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

const displayProducts = ()=> {
    if(filteredProducts.length < 1){
        productContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`
        return;
    }

        productContainer.innerHTML = filteredProducts.map(( {id, title, image, price})=> {
    
            return `
            <article class="product" data-id = "${id}">
                <img
                    src="${image}"
                    class="product-img img"
                />
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">${price}</span>
                </footer>
            </article>`;
            })
            .join('');
    }
displayProducts()


// text filter
form.addEventListener('keyup', ()=> {
    // 'keyup' - when key is released

    const inputValue = searchInput.value
    filteredProducts = products.filter((product)=> {
        return product.title.toLowerCase().includes(inputValue);
    }); 
    displayProducts()
})


const companiesDOM = document.querySelector('.companies')

const displayButtons = ()=> {
    const buttons = ['all',...new Set(products.map((product)=> product.company))]
    companiesDOM.innerHTML = buttons.map((company)=> {
            return `<button class="company-btn" data-id = ${company}>${company}</button>`
    }).join('');
}

displayButtons()

companiesDOM.addEventListener('click', (e)=> {
    if(e.target.classList.contains("company-btn")){
        if(e.target.dataset.id === 'all'){
            filteredProducts = [...products]
        }
        else{
            filteredProducts = products.filter((product)=> {
                return e.target.dataset.id === product.company
            })
        }   
        searchInput.value = ''
        displayProducts()
    }
});