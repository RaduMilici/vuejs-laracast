/**
 * Created by radu.milici on 03/07/2017.
 */

new Vue({
    el: '#app',
    data: {
        customTitle: 'js title',
        isLoading: false,
        buttonClicks: 0,
        buttonDisabled: false
    },
    methods: {
        toggleClass() {
            this.isLoading = !this.isLoading;
            if (this.buttonClicks++ >= 5) {
                this.buttonDisabled = true;
            }
        }
    }
});