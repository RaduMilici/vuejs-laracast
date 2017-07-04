/**
 * Created by radu.milici on 04/07/2017.
 */

Vue.component('coupon', {
    props: ['code'],
    template: `<input type="text" :value="code" @input="updateCode($event.target.value)">`,
    methods: {
        updateCode(code) {
            this.$emit('input', code);
        }
    }
});

new Vue({
    el: '#app',
    data: {
        code: 'FREE'
    },
    methods: {
        onInput(event) {
            this.couponCode = event.target.value;
        }
    }
});
