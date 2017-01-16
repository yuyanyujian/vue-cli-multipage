<template>
    <div class="footer-con">
        <div class="feature">
            <div class="feature-con">
                <p class="feature-text">我们提供了在线的公有云平台和私有云两种交付模式</p>
                <a href="" class="feature-btn">在线体验</a>
                <a href="" class="feature-btn">咨询私有云</a>
            </div>
        </div>
        <div class="footer-top clearfix">
            <div class="footer-logo">
                <img src="../assets/img/logo_01.png" alt="logo">
                <ul class="link-icon clearfix">
                    <li><a href=""><img src="../assets/img/weixin.png" class="img-responsive" alt=""></a></li>
                    <li><a href=""><img src="../assets/img/weibo.png" class="img-responsive" alt=""></a></li>
                    <li><a href=""><img src="../assets/img/lianxi.png" class="img-responsive" alt=""></a></li>
                </ul>
            </div>
            <div class="footer-navbar thin">
                <h4>解决方案</h4>
                <p><a href="">工业互联网</a></p>
                <p><a href="">数字化转型</a></p>
            </div>
            <div class="footer-navbar">
                <h4>产品</h4>
                <p><a href="">工业大数据分析和应用平台</a></p>
                <p><a href="">大数据平台</a></p>
                <p><a href="">云应用市场</a></p>
                <p><a href="">云应用开发平台</a></p>
                <p><a href="">云资源管理平台</a></p>
                <p><a href="">工业物联网网关</a></p>
            </div>
            <div class="footer-navbar thin">
                <h4>公司介绍</h4>
                <p><a href="">了解寄云</a></p>
                <p><a href="">加入寄云</a></p>
            </div>
            <div class="footer-navbar">
                <h4>联系我们</h4>
                <p><img src="../assets/img/xin.png" class="message-icon" alt="">marking@neucloud.cn</p>
                <p><img src="../assets/img/dianhua.png" class="message-icon" alt="">400-006-8110</p>
                <p><img src="../assets/img/dizhi.png" class="message-icon" alt="">北京市海淀区东北旺西路8号</br>&nbsp;中关村软件园4号楼C座415-418</p>
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
        width: 127px;
        padding: 10px 0px;
    }
    .link-icon li{
        float:left;
        padding:10px 6px;
        list-style: none;
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
        background: url(../assets/img/ad_1.png) center center no-repeat;
        background-size: cover;
        text-align: center;
    }
    .feature-con{
        min-width: 1170px;
    }
    .feature-text{
        height:30px;
        line-height: 30px;
        color:#ffffff;
        font-size:20px;
        display:inline;
        margin-right:50px;
    }
    .feature-btn{
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        padding:8px 37px;
        color:#ffffff;
        font-size:16px;
        display:inline-block;
        margin:50px;
    }
</style>
