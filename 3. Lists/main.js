/**
 * Created by radu.milici on 03/07/2017.
 */

new Vue({
    el: '#app',
    data: {
        names: ['joe', 'marry', 'jane', 'jack'],
        username: null
    },
    methods: {
        addName() {
            if (this.username) {
                this.names.push(this.username);
                this.username = null;
            }
        }
    }
});