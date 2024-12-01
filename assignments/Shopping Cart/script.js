let cart = [
    {
        title: 'Milk',
        category: 'Food',
        quantity: 3,
        price: 1.65
    },
    {
        title: 'Bread',
        category: 'Food',
        quantity: 2,
        price: 2.25
    },
    {
        title: 'Smartphone',
        category: 'Electronics',
        quantity: 1,
        price: 699.99
    },
    {
        title: 'Running Shoes',
        category: 'Fashion',
        quantity: 1,
        price: 49.99
    },
    {
        title: 'Book: The Hitchhiker\'s Guide to the Galaxy',
        category: 'Books',
        quantity: 1,
        price: 12.99
    },
    {
        title: 'Coffee Maker',
        category: 'Appliances',
        quantity: 1,
        price: 34.99
    },
    {
        title: 'Gaming Laptop',
        category: 'Electronics',
        quantity: 1,
        price: 1299.99
    },
    {
        title: 'Sunglasses',
        category: 'Fashion',
        quantity: 2,
        price: 19.99
    }
];


const cartItemsContainer = document.querySelector('#cartItems');
const totalPriceElement = document.querySelector('#totalPrice');


function calculateTotalCartPrice() {
    return cart.reduce((accum, item) => {
        return accum + (item.quantity * item.price);
    }, 0);
}

function displayCartItems() {
    let totalCartPrice = 0;
    
    cart.forEach(item => {
        let totalPrice = item.quantity * item.price;
        totalCartPrice += totalPrice;

        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        itemDiv.innerHTML = `
            <div class="item-title">${item.title}</div>
            <div class="item-price">$${totalPrice.toFixed(2)}</div>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });


    totalPriceElement.textContent = totalCartPrice.toFixed(2) ;
}

displayCartItems();