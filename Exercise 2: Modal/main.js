/**
 * Created by radu.milici on 04/07/2017.
 */
Vue.component('modal', {
    data() {
        return {
            isVisible: true
        }
    },
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    },
    template: `        
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>                
            </div>
            <button class="modal-close is-large" @click="$emit('close')"></button>
        </div>`
});

new Vue({
    el: '#app',
    data: {
        showModal: false
    }
});