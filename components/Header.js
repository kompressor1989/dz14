class Header {
    create() {
        this.elem = document.createElement('header');
        this.elem.classList.add('header');

        this.elem.innerHTML = `
            <div class="container">

                <div class="header__logo">
                    <a href="/"><img src="/components/images/banner.png"/></a>
                </div>

                <nav class="header__nav">
                    <ul>
                        <li class="tooltip"><a href="/">Home</a><span class="tooltiptext1">Go back to Home</span></li>
                        <li class="tooltip"><a href="/#shop">Shop</a><span class="tooltiptext2">Go shoping!</span></li>
                        <li class="tooltip"><a href="/#contact">Contact</a><span class="tooltiptext3">Contact Us</span></li>
                    </ul>
                </nav>

            </div>
        `;

        return this.elem;
    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Header().init();