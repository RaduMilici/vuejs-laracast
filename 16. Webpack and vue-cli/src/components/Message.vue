<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .box {
        background-color: lightgray;
        padding: 18px;
        border: 1px solid #c5c5c5;
        text-align: center;
    }
</style>