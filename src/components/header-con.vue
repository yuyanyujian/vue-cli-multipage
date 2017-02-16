<template>
    <div class="head-con">
        <h2>公共的“头部组件”</h2>
        <ul>
            <li><a href="index.html">首页</a></li>
            <li><a href="about.html">关于页面</a></li>
            <li><a href="info.html">详情页面</a></li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
.head-con{
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 50px;
    h2{
        font-weight: 200;
        font-size: 27px;
        text-align: center;
        margin: 20px auto 20px;
    }
    ul{
        width: 400px;
        height: 37px;
        margin: 0 auto;
        padding: 0;
        li{
            list-style: none;
            float: left;
            line-height: 37px;
            width: 33.3%;
            text-align: center;
            a{
                font-size: 15px;
                color: #4d5258;
                &:hover{
                    color: #0088ce;
                }
            }
        }
    }
}
</style>
