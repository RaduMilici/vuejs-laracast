/**
 * Created by radu.milici on 04/07/2017.
 */
let source = { name: 'John Doe' };

new Vue({
    el: '#one',
    data: {
        user: source
    }
});

new Vue({
    el: '#two',
    data: {
        user: source
    }
});