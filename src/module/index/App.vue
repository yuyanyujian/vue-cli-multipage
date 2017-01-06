<template>
    <div>
        <img src="../../assets/img/logo.png">
        <p>我是index页面！看见我你就成功了！</p>
        <Hello></Hello>
    </div>
</template>
<style lang="less">
    @import "../../assets/less/reset.less";

    p{
        margin: 40px 0;
        font-size: 18px;
    }
</style>
<script>
    import Hello from '../../components/Hello.vue';

    export default {
        name: 'App',
        components: {
            Hello
        }
    };
</script>