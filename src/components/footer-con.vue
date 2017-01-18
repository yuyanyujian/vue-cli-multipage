<template>
    <div class="footer-con">
        <div class="feature">
            <div class="feature-con">
                <a href="javascript:void(0)" onclick="_MEIQIA('showPanel')" class="feature-btn">联系我们</a>
            </div>
        </div>
        <div class="footer-top clearfix">
            <div class="footer-logo">
                <img src="../assets/img/logo_01.png" alt="logo">
                <ul class="link-icon clearfix">
                    <li>
                        <a href="javascript:;"><img src="../assets/img/weixin.png" alt=""></a>
                        <div>
                            <p>寄云科技微信公众号</p>
                            <img src="../assets/img/jiyun-code.png">
                        </div>
                    </li>
                    <li>
                        <a href="http://weibo.com/neucloud?sudaref=www.neucloud.cn&retcode=6102"><img src="../assets/img/weibo.png" alt=""></a>
                        <div>
                            <p>寄云科技新浪微博</p>
                            <img src="../assets/img/weibo-code.png">
                        </div>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="../assets/img/lianxi.png" alt=""></a>
                        <div>
                            <p>工业互联网时代公众号</p>
                            <img src="../assets/img/internet-code.png">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="footer-navbar thin">
                <h4>解决方案</h4>
                <p><a href="industrial-internet.html">工业大数据</a></p>
                <p><a href="data-fusion.html">数据的高效融合</a></p>
                <p><a href="edge-calculation.html">边缘计算</a></p>
                <p><a href="digital-transformation.html">敏捷的IT</a></p>
                <p><a href="industry-cloud.html">行业云生态</a></p>
            </div>
            <div class="footer-navbar">
                <h4>产品</h4>
                <p><a href="industry-bd-platform.html">工业数据分析套件</a></p>
                <p><a href="bigdata-platform.html">工业分析应用开发套件</a></p>
                <p><a href="industry-bd-storage.html">工业数据接入存储套件</a></p>
                <p><a href="industrial-networking-gateway.html">工业网关</a></p>
                <p><a href="cloud-app-market.html">云应用市场套件</a></p>
                <p><a href="cloud-app-develop-platform.html">云应用开发套件</a></p>
                <p><a href="cloud-resource-manage-platform.html">云资源管理套件</a></p>
            </div>
            <div class="footer-navbar thin">
                <h4>关于我们</h4>
                <p><a href="about-us.html">了解寄云</a></p>
                <p><a href="join-us.html">加入寄云</a></p>
            </div>
            <div class="footer-navbar">
                <h4>联系我们</h4>
                <p><img src="../assets/img/xin.png" class="message-icon" alt="">marketing@neucloud.cn</p>
                <p><img src="../assets/img/dianhua.png" class="message-icon" alt="">400-006-8110</p>
                <p><img src="../assets/img/dizhi.png" class="message-icon" alt="">北京市海淀区东北旺西路8号</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中关村软件园4号楼C座415-418</p>
            </div>
        </div>
        <div class="footer-bottom">
            <div>
                <p>&copy;2013-2016 北京寄云鼎城科技有限公司 版权所有<span>京ICP备13047557号</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {
            };
        }
    };
</script>
<style lang="less" scoped>
    .footer-con{
        width: 100%;
        min-width: 1170px;
        background: #232427;
    }
    .footer-top{
        width: 1170px;
        padding-top: 70px;
        height: 370px;
        margin: 0 auto;
    }
    .footer-logo{
        float: left;
        width: 245px;
        margin-top: 10px;
    }
    .footer-logo img{
        display: block;
    }
    .link-icon{
        width: 134px;
        padding: 10px 0px;
        li{
            position: relative;
            float: left;
            padding: 10px 7px;
            list-style: none;
            &:hover{
                div{
                    display: block;
                }
            }
            div{
                display: none;
                position: absolute;
                top: 60px;
                left: 1px;
                width: 134px;
                color: #ffffff;
                text-align: center;
                img{
                    width: 120px;
                    height: 120px;
                    margin: 10px auto;
                }
            }
        }
        li:nth-child(2){
            div{left: -43px;}
        }
        li:last-child{
            div{
                width: 143px;
                left: -91px;
            }
        }
    }
    .footer-navbar{
        float: left;
        width: 290px;
    }
    .thin{
        float: left;
        width: 170px;
    }
    .footer-navbar h4{
        font-size:16px;
        margin-bottom: 20px;
        color:#ffffff;
    }
    .footer-navbar p{
        font-size:14px;
        color: #A3A3A3;
        line-height: 26px;
        margin-bottom: 10px;
    }
    .footer-navbar a{
        font-size:14px;
        color: #A3A3A3;
        line-height: 26px;
        text-decoration: none;
    }
    .footer-navbar a:hover,a:focus{
        color:#ffffff;
        text-decoration: none;
    }
    .message-icon{
        margin:auto 8px auto 5px;
    }
    .footer-bottom{
        height:60px;
        border-top: 1px solid #403E3E;
        color: #7D7D7D;
        line-height: 60px;
    }
    .footer-bottom p{
        width: 1170px;
        font-size: 14px;
        margin: 0 auto;
    }
    .footer-bottom span{
        font-size: 14px;
        float: right;
    }
    .feature{
        width: 100%;
        min-width: 1170px;
        background: url(../assets/img/ad_1.jpg) center center no-repeat;
        background-size: cover;
        text-align: center;
    }
    .feature-con{
        min-width: 1170px;
    }
    .feature-btn{
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        padding:8px 37px;
        color:#ffffff;
        font-size:16px;
        display:inline-block;
        margin:25px;
    }
</style>
