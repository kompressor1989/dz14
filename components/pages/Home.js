class Page {
    create() {
        this.elem = document.createElement('div');
        this.elem.classList.add('page');

        this.elem.innerHTML = `
            <div class="container">

                <h1>ABOUT ASKARI</h1>
                <p>
                What began in 1990, with a range of 2,000 different products, developed continually over a period of time to offer a complete range for anglers, hunters and nature lovers. With over 40,000 different products from a vast assortment of items such as optics, bags, slings, clothing and footwear has placed Askari has placed itself at the forefront as Germany's leading mail order company for sport fishing.</p>

            </div>
        `;

        return this.elem;
    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Page().init();