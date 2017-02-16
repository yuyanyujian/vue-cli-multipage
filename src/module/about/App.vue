<template>
    <div>
        <header-con></header-con>
        <p>我是关于页面！</p>
        <p>关......于......页面---about.html</p>
    </div>
</template>
<script>
    import HeaderCon from '../../components/header-con.vue';
    export default {
        name: 'App',
        components: {
            'header-con': HeaderCon
        }
    };
</script>
<style lang="less" scoped>
    @import "../../assets/less/reset.less";
    p{
        font-size: 24px;
        padding: 10px 0 0 100px;
    }
</style>