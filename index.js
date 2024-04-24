const cardContainer = document.getElementById('cardContainer');

function renderUI(products) {
    cardContainer.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
       
        cardContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img width='100px' height="250px" src="${products[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${products[i].title}</h5>
                        <p class="card-text">${products[i].price}</p>
                        <p class="card-area">${products[i].description}</p>
                    </div>
                </div>
            </div>
        `
       
    }
}

function sortPrice(price) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        if (price === 'asc') {
            data.sort((a, b) => a.price - b.price);
        } else if (price === 'desc') {
            data.sort((a, b) => b.price - a.price);
        }
        renderUI(data);
    });
}

sortPrice('asc'); 



