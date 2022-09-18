class Page {
    create() {
        this.elem = document.createElement('div');
        this.elem.classList.add('page');

        this.elem.innerHTML = `
            <div class="container">

                <h1>Contact</h1>
                <p>Telephone:
                Tel. +49 2591 950 50 (GER)
                <br>
                Tel. (01) 310 06 20 (A)
                <br>
                Tel. (061) 322 27 74 (CH)
                <br>
                Tel. +49 2591 950 26 (UK & International)<br>
                
                
                Order-Fax: 02591 950 25
                
                <p>You can contact us directly in person between:<br>
                Mo.-Thu. 08.00 - 16.00 hours (CET)
                Fr. 08.00 - 15.00 hours (CET)
                <br>
                Email: service@askari-hunting-shop.com</p>
                </p>

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