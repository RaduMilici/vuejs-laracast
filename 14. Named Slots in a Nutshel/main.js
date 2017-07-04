/**
 * Created by radu.milici on 04/07/2017.
 */
Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header"></slot>
                </p>
                <button class="delete"></button>
            </header>
            <section class="modal-card-body">
                <p>
                    <slot>default slot content</slot>
                </p>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>`
});

new Vue({
    el: '#app',
    data: {
        showModal: false
    }
});