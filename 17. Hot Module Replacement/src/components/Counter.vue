<template>
    <div>
        <h2>the count is {{count}}</h2>
        <p><button @click="count++">increment</button></p>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 };
        }
    }
</script>