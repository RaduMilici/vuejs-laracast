/**
 * Created by radu.milici on 04/07/2017.
 */
Vue.component('message', {
    props: ['title', 'body'],
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
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete"></button>
            </div>
            <div class="message-body">
                <p>{{body}}</p>
            <button @click="hideModal">hide modal</button>
            </div>
        </article>`
});

new Vue({
    el: '#app'
});