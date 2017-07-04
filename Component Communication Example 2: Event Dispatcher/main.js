/**
 * Created by radu.milici on 04/07/2017.
 */
const event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="enter code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            event.$emit('coupon-applied');
        }
    }
});


new Vue({
    el: '#app',
    methods: {
        onCouponApplied() {
            console.log('coupon was applied');
        }
    },
    created() {
        event.on('coupon-applied', () => {
            console.log('coupon-applied');
        });
    }
});