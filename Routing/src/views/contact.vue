<template>
    <div class="columns">
        <div class="column is-4 has-text-centered"><p class="notification is-warning">CONTACT</p></div>
        <div class="column is-2 has-text-centered">
            <p class="notification">
                <button @click="increment">increment</button>
            </p>
        </div>
        <div class="column is-3 has-text-centered"><p class="notification">counter: {{counter}}</p></div>
        <div class="column is-3 has-text-centered"><p class="notification">random number: {{random() | round}}</p></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            };
        },
        methods: {
            increment() {
                this.counter++;
            },
            random() {
                return Math.random() * 100;
            }
        },
        filters: {
            round(num) {
                return Math.round(num);
            }
        }
    }
</script>