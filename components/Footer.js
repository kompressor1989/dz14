class Footer {
    create() {
        this.elem = document.createElement('footer');
        this.elem.classList.add('footer');

        this.elem.innerHTML = `
            <div class="container">

                <div class="footer__logo">
                    <a href="/"><img src="/components/images/banner_colour.png" /></a>
                </div>

                <div class="footer__contacts">
                    Ocean Day<br>
                    Kosmonavtov 68 str., Minsk<br>
                    +375293221640
                </div>

            </div>
        `;

        return this.elem;
    }

    init() {
        this.create();

        return this.elem;
    }
}

export default new Footer().init();