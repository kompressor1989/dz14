import { getData } from '../App.js'; 

class Cart {
    add(id) {
        let dataCart = this.get();

        if (dataCart.includes(id)) return;

        dataCart.push(id);

        this.setLocal(dataCart);
    }

    remove() {

    }

    setLocal(dataCart) {
        if (!dataCart) dataCart = '';

        dataCart = JSON.stringify(dataCart);
        
        if (!dataCart) return;

        localStorage.setItem('dataCart', dataCart);
    }

    get() {
        let dataCart = localStorage.getItem('dataCart');
        if (dataCart && dataCart.length > 0) dataCart = JSON.parse(dataCart);
        
        if (dataCart && dataCart.length > 0) return dataCart;

        return [];
    }
    
    async updateWidget(widget) {
        let data = await getData();

        let dataCart = this.get();

        data = data.filter(item => dataCart.includes(item.id));

        let totalPrice = 0;

        data.forEach(item => {
            totalPrice += +item.price;
        });

        totalPrice = totalPrice.toFixed(2);

        let countElem = widget.querySelector('.header__cart_count');
        countElem.innerHTML = dataCart.length;

        let amountElem = widget.querySelector('.header__cart_amount');
        amountElem.innerHTML = '$ ' + totalPrice;
    }

    widget() {
        const elem = document.createElement('div');
        elem.classList.add('header__cart');

        elem.innerHTML = `
            <a href="/#cart"><img src="/components/images/basket.png"></a>
            <span class="header__cart_count">0</span>
            <span class="header__cart_amount">$0</span>
        `;

        return elem;
    }
}

class Page extends Cart {
    create() {
        this.elem = document.createElement('div');
        this.elem.classList.add('page');

        this.elem.innerHTML = `
            <div class="container">

                <h1>Cart</h1>
                <p>...</p>

            </div>
        `;

        return this.elem;
    }

    init() {
        this.create();

        return this.elem;
    }
}

const cart = new Page();

export { cart };
export default cart.init();