const categoriesBlock = document.querySelector('.categories');
const productsBlock = document.querySelector('.products');
const productInfoBlock = document.querySelector('.product-info');

console.log('categoriesBlock:', categoriesBlock);
console.log('productsBlock:', productsBlock);
console.log('productInfoBlock:', productInfoBlock);

const categories = ['Електроніка', 'Одяг', 'Косметіка'];
const products = {
    Електроніка: ['Смартфони', "Комп'ютери", 'Монітори'],
    Одяг: ['Джинси', 'Кофти', 'Білизна'],
    Косметіка: ['Креми', 'Гелі для душу', 'Шампуні']
};

function displayCategories() {
    categoriesBlock.innerHTML = '';
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', () => {
            displayProducts(category);
            productInfoBlock.innerHTML = '';
        });
        categoriesBlock.appendChild(categoryButton);
    });
}

function displayProducts(category) {
    productsBlock.innerHTML = '';
    products[category].forEach(product => {
        const productButton = document.createElement('button');
        productButton.textContent = product;
        productButton.addEventListener('click', () => displayProductInfo(product));
        productsBlock.appendChild(productButton);
    });
}

function displayProductInfo(product) {
    productInfoBlock.innerHTML = '';
    const productTitle = document.createElement('h2');
    productTitle.textContent = product;
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Купити';
    buyButton.addEventListener('click', () => {
        displayOrderForm(product);
    });
    productInfoBlock.appendChild(productTitle);
    productInfoBlock.appendChild(buyButton);
}

function displayOrderForm(product) {
    productInfoBlock.innerHTML = '';

    const orderForm = document.querySelector('.order-form');
    orderForm.style.display = 'block';

    const backButton = document.createElement('button');
    backButton.textContent = 'Назад';
    backButton.addEventListener('click', () => {
        displayProductInfo(product);
        orderForm.style.display = 'none';
    });

    const errorDisplay = document.getElementById('error');
    const orderInfoDisplay = document.getElementById('orderInfo');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const city = document.getElementById('city').value.trim();
        const delivery = document.getElementById('delivery').value.trim();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        const quantity = document.getElementById('quantity').value.trim();

        if (!fullName || !city || !delivery || !paymentMethod || !quantity) {
            errorDisplay.textContent = 'Будь ласка, заповніть всі обов\'язкові поля.';
            return;
        }

        const orderDetails = {
            product: product,
            fullName,
            city,
            delivery,
            paymentMethod: paymentMethod.value === 'cashOnDelivery' ? 'Післяплата' : 'Оплата банківською карткою',
            quantity,
            comment: document.getElementById('comment').value.trim()
        };

        displayOrderInfo(orderDetails);
    });

    productInfoBlock.appendChild(backButton);
}

function displayOrderInfo(order) {
    const orderInfoDisplay = document.getElementById('orderInfo');
    orderInfoDisplay.innerHTML = `
        <h2>Інформація про замовлення</h2>
        <p><strong>Товар:</strong> ${order.product}</p>
        <p><strong>ПІБ покупця:</strong> ${order.fullName}</p>
        <p><strong>Місто:</strong> ${order.city}</p>
        <p><strong>Склад Нової пошти:</strong> ${order.delivery}</p>
        <p><strong>Спосіб оплати:</strong> ${order.paymentMethod}</p>
        <p><strong>Кількість продукції:</strong> ${order.quantity}</p>
        <p><strong>Коментар до замовлення:</strong> ${order.comment}</p>
    `;

    const orderForm = document.getElementById('orderForm');
    const errorDisplay = document.getElementById('error');
    orderForm.reset();
    errorDisplay.textContent = '';
}
function displayOrderForm(product) {
    productInfoBlock.innerHTML = '';

    const orderForm = document.querySelector('.order-form');
    orderForm.style.display = 'block';

    const backButton = document.createElement('button');
    backButton.textContent = 'Назад';
    backButton.addEventListener('click', () => {
        displayProductInfo(product);
        orderForm.style.display = 'none';
    });

    const errorDisplay = document.getElementById('error');
    const orderInfoDisplay = document.getElementById('orderInfo');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const city = document.getElementById('city').value.trim();
        const delivery = document.getElementById('delivery').value.trim();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        const quantity = document.getElementById('quantity').value.trim();

        if (!fullName || !city || !delivery || !paymentMethod || !quantity) {
            errorDisplay.textContent = 'Будь ласка, заповніть всі обов\'язкові поля.';
            return;
        }

        const orderDetails = {
            product: product,
            fullName,
            city,
            delivery,
            paymentMethod: paymentMethod.value === 'cashOnDelivery' ? 'Післяплата' : 'Оплата банківською карткою',
            quantity,
            comment: document.getElementById('comment').value.trim()
        };

        displayOrderInfo(orderDetails);
    });

    productInfoBlock.appendChild(backButton);
}
window.onload = displayCategories;