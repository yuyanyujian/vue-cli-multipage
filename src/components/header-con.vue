<template>
    <div class="wrapper">
        <div class="navbar-con clearfix">
            <div class="nav-logo">
                <img src="../assets/img/logo_01.png" alt="logo">
            </div>
            <div class="nav-bar">
                <ul class="navbars clearfix">
                    <li class="tabs-con" :class="{'active': isActive === 'index'}" @mouseover="over('index')">
                        <a class="tabs" href="index.html">首页</a>
                    </li>
                    <li class="tabs-con" :class="{'active': isActive === 'solution'}" @mouseover="over('solution')">
                        <a class="tabs" href="solution.html">解决方案 <span class="caret"></span></a>
                        <ul class="down-con" v-show="isActive === 'solution'">
                            <li>
                                <div>
                                   <h4>技术解决方案</h4>
                                   <p><a href="industrial-internet.html">工业物联网</a><a href="data-fusion.html">数据的高效融合</a><a href="edge-calculation.html">边缘计算</a><a href="digital-transformation.html">敏捷的IT</a></br><a href="industry-cloud.html">行业云生态</a></p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="tabs-con" :class="{'active': isActive === 'product'}" @mouseover="over('product')">
                        <a class="tabs" href="product.html">产品和服务 <span class="caret"></span></a>
                        <ul class="down-con" v-show="isActive === 'product'">
                            <li>
                                <div>
                                    <h4>工业物联网平台</h4>
                                    <p><a href="industry-bd-platform.html">工业数据分析套件</a><a href="bigdata-platform.html">工业分析应用开发套件</a></br><a href="industry-bd-storage.html">工业数据接入存储套件</a></p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>工业物联网网关</h4>
                                    <p><a href="industrial-networking-gateway.html">工业网关</a></p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>云应用开发与管理平台</h4>
                                    <p><a href="cloud-app-market.html">云应用市场套件</a><a href="cloud-app-develop-platform.html">云应用开发套件</a><a href="cloud-resource-manage-platform.html">云资源管理套件</a></p>
                                </div> 
                            </li>
                        </ul>
                    </li>
                    <!-- <li class="tabs-con" :class="{'active': isActive === 'resouce'}" @mouseover="over('resouce')">
                        <a class="tabs" href="#">资源 <span class="caret"></span></a>
                        <ul class="dropdown-con" v-show="isActive === 'resouce'">
                            <li class="default-li"><a href="white-books.html">白皮书</a></li>
                            <li class="default-li"><a href="videos.html">视频</a></li>
                            <li class="default-li"><a href="cases.html">案例</a></li>
                        </ul>
                    </li> -->
                    <li class="tabs-con" :class="{'active': isActive === 'join'}" @mouseover="over('join')">
                        <a class="tabs" href="join_us.html">加入我们</a>
                    </li>
                    <li class="tabs-con" :class="{'active': isActive === 'about'}" @mouseover="over('about')">
                        <a class="tabs" href="about-us.html">关于我们</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'header',
        data() {
            return {
                isActive: 'index'
            };
        },
        methods: {
            over(val) {
                this.isActive = val;
            }
        }
    };
</script>
<style lang="less" scoped>
ul ol{list-style: none;}
.wrapper{
    width: 100%;
    min-width: 1170px;
    height: 100px;
    background-color: rgba(0,0,0,.07);
    padding: 0;
    margin: 0;
}
.navbar-con{
    width: 1170px;
    height: 100px;
    margin: 0 auto;
}
.nav-logo{
    width: 180px;
    height: 100px;
    line-height: 100px;
    float: left;
    padding-left: 40px;
    box-sizing: border-box;
}
.nav-bar{
    float: left;
    width: 990px;
    height: 100px;
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 85px !important;
    color: #fff;
    .navbars{
        .tabs-con{
            position: relative;
            float: left;
            width: 139px;
            height: 100px;
            .tabs{
                display: inline-block;
                width: 139px;
                height: 100px;
                line-height: 100px;
                text-align: center;
                color: #fff;
                .caret {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-left: 2px;
                    vertical-align: middle;
                    border-top: 4px solid;
                    border-right: 4px solid transparent;
                    border-left: 4px solid transparent;
                }
            }
            .down-con {
                position: absolute;
                top: 103px;
                width: 450px;
                font-size: 14px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 4px;
                transition: all ease .5s;
                padding-bottom: 20px;
                li{
                    float: none;
                    width: 100%;
                    margin-top: 20px;
                    div{
                        width: 370px;
                        margin: 0 auto;
                        h4{
                            color: #333;
                            font-size: 18px;
                            margin: 10px 0;
                        }
                        p{
                            a{
                                font-size: 14px;
                                color: #333;
                                margin-right: 22px;
                                line-height: 28px;
                                &:hover{
                                    color: #262626;
                                    background-color: #f5f5f5;
                                }
                            }
                        }
                    }
                }
            }
        }
        .active{
            background: none;
            border-bottom: 2px solid #fff;
            border-bottom-color: rgba(255,255,255,.7);
        }
    }
}
</style>