let product = document.querySelectorAll('.product');
let buttons = document.getElementsByTagName('button');
let btnOpen = document.querySelector('.open');

function createCart() {
    let cart = document.createElement('div');
    let field = document.createElement('div');
    let title = document.createElement('h2');
    let close = document.createElement('button');

    title.textContent = 'В нашей корзине:';
    close.textContent = 'Закрыть';

    cart.classList.add('cart');
    field.classList.add('cart-field');
    close.classList.add('close');

    document.body.appendChild(cart);
    cart.appendChild(title);
    cart.appendChild(field);
    cart.appendChild(close);
}

function addCart() {
    let cartField = document.querySelector('.cart-field');

    for (let i = 0; i < buttons.length - 1; i++) {
        buttons[i].addEventListener('click', function () {
            let productItem = product[i].cloneNode(true);
            let btn = productItem.querySelector('button');

            // Создаем кнопку убрать и помещаем внутрь клона
            let delBtn = document.createElement('button');
            delBtn.textContent = 'Убрать';
            productItem.appendChild(delBtn);

            cartField.appendChild(productItem);
            btn.remove();

            // Прячем продукт
            product[i].hidden = true;

            // При клике на убрать возвращаем hidden = false и удаляем клон
            delBtn.addEventListener('click', function () {
                productItem.remove();
                product[i].hidden = false;
            })

        });
    }
}

createCart();
addCart();


let cart = document.querySelector('.cart');
let btnClose = document.querySelector('.close');

btnOpen.addEventListener('click', function () {
    cart.style.display = 'block';
})
btnClose.addEventListener('click', function () {
    cart.style.display = 'none';
})
