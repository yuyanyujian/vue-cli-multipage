<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js Multipage App'
            };
        }
    };
</script>
<style scoped>
    h1{
        font-weight: normal;
    }
</style>
