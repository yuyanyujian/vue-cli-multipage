<template>
    <div>
        <header-con></header-con>
        <p>欢迎来到基于vue2.0的多页面应用!</p>
        <p>我是首页！</p>
        <p>看到我，说明你已经成功了~~</p>
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