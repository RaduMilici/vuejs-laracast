/**
 * Created by radu.milici on 04/07/2017.
 */
Vue.component('coupon', {
    template: '<input placeholder="enter code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            this.$emit('coupon-applied');
        }
    }
});

new Vue({
    el: '#app',
    methods: {
        onCouponApplied() {
            console.log('coupon was applied');
        }
    }
});