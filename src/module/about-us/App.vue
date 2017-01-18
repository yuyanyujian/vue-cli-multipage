<template>
    <div>
        <header>
            <nav>
                <header-con></header-con>
                <h1>工业互联网时代先行者</h1>
            </nav>
        </header>
        <div class="product-body">
            <div class="bar-con">
                <div class="tab-bar">
                    <ul class="about-bar">
                        <li v-for="item in tabs" :class="{'active': isActive === item}" @click="rangeTab(item)">{{item}}</li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="about" v-show="isActive === '公司介绍'">
                        <section class="description">
                            <img src="../../assets/img/logo_03.png">
                            <p>北京寄云鼎城科技有限公司（NeuCloud）</p>
                            <p>成立于2013年9月，是国内领先的数字化创新平台提供商，致力于帮助企业客户实现数字化转型，提高核心竞争力，实现业务增长。</p>
                            <p>如今，企业都在寻求借助新兴技术实现数字化转型，而寄云科技始终走在技术的最前沿，综合了云计算、物联网、大数据等关键技术优势，推出了拥有自主产权的数字化创新平台完整解决方案。寄云科技追求的始终是“客户一体化”，通过SaaS服务平台、PaaS平台、企业应用商店、大数据分析服务及解决方案等产品线构建完整的全生命周期的一站式数字化创新平台，帮助企业成功转型数字化，优化业务流程，降低成本。</p>
                            <p>寄云PaaS平台为企业数字化提供全新IT架构支持，为用户提供敏捷、开放、高效的可定制方案，解决企业跨平台云管理的问题，从企业应用和云基础设施两个维度，为企业用户提供云资源和企业应用的配置、开发、监控、自动化运维和管理服务；寄云SaaS服务平台为软件和SaaS厂商提供软件SaaS化、SaaS服务快速交付、一站式SaaS运营门户构建、跨平台资源管理、多渠道发布等业务服务；企业应用商店打通了在线销售网络，针对国内中小企业客户分散、订阅式服务下的云服务厂商无法承受高额成本等一系列瓶颈提出完整的解决方案；而寄云专业的大数据业务能力，为用户对海量的结构性和非结构性数据提供分析服务，进行汇聚、梳理，挖掘应用数据的价值，针对不同的业务场景的预测分析，进行大数据分析模型的改进和组合提炼，进而做出改进和优化关键业务流程，对企业关键性业务进行指导。</p>
                            <p>寄云科技优化和整合国内的云计算、物联网、大数据产业资源，打造新的合作生态，为客户创造更高效的服务，推动中国产业数字化进程的快速发展。</p>
                        </section>
                        <section class="advantage">
                            <h3 class="article">我们的优势</h3>
                            <img src="../../assets/img/advantage.jpg">
                        </section>
                        <section class="time-line">
                            <h3 class="article">公司里程</h3>
                            <ul>
                                <li>
                                    <time>2013年9月</time>
                                    <span>公司成立</span>
                                </li>
                                <li>
                                    <time>2014年</time>
                                    <span>SaaS服务平台发布</span>
                                </li>
                                <li>
                                    <time>2015年</time>
                                    <span>天使轮融资发布</span>
                                </li>
                                <li>
                                    <time>2015年10月</time>
                                    <span>PaaS平台内测版本发布</span>
                                </li>
                                <li>
                                    <time>2016年4月</time>
                                    <span>PaaS1.0版本发布</span>
                                </li>
                                <li>
                                    <time>2016年4月</time>
                                    <span>Pre-A融资千万</span>
                                </li>
                                <li>
                                    <time>2016年9月</time>
                                    <span>大数据解决方案发布</span>
                                </li>
                                <li>
                                    <time>2017年1月</time>
                                    <span>PaaS2.0版本发布</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="honour" v-show="isActive === '公司荣耀'">
                        <ul class="clearfix">
                            <li>
                                <img src="../../assets/img/prize1.jpg">
                                <b>寄云科技荣获2016中国创新型软件企业推荐</b>
                                <p>在2016年中国软件产业合作高峰论坛中，寄云科技因建立的创新软件生态荣获该奖项。寄云科技致力于打造健康的软件生态，帮助ISV打破地域和成本的限制，直达数百万级别的用户桌面。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize2.jpg">
                                <b>寄云科技CEO时培昕博士荣获“云鼎奖——中国最具影响力人物奖”</b>
                                <p>本奖项经由独立第三方研究机构、产业联盟、行业组织、国际组织等多方人士组成的评审委员会评选和网络投票产生。寄云科技CEO时培昕博士是国内最早从事云计算和大数据相关领域研究的人员之一，是国内云计算行业的知名技术专家，在云计算研究、战略规划等方面做出了突出性的业绩。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize3.jpg">
                                <b>寄云科技荣获全球最具潜力企业奖</b>
                                <p>寄云科技因其领先的云服务模式、优秀的产品服务及解决方案脱颖而出，荣获全球最具潜力企业奖。通过软件云化/SaaS化、SaaS应用商店和PaaS平台构成了“产+销”云服务平台，寄云科技提供的大数据服务及解决方案，帮助行业用户挖掘企业数据的真正价值，通过优化和整合国内的云计算和大数据产业资源打造新的合作生态。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize4.jpg">
                                <b>寄云科技荣获《商业伙伴》杂志社颁发的“2016优秀云服务运营商”</b>
                                <p>此次获奖是商业伙伴咨询机构对国内云计算生态系统持续跟踪研究后所颁发。寄云科技因其先进的理念最终获得优秀云服务运营商奖项。寄云科技通过软件云化/SaaS化、SaaS应用商店和PaaS平台构成了“产+销”云服务平台，帮助企业冲破进入企业云服务市场的巨大阻力，帮助企业上云，构建云端应用。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize5.jpg">
                                <b>寄云PaaS平台荣获中国信息化推荐联盟和《网络运维与管理》杂志社联合颁发的“优秀创新项目奖”</b>
                                <p>寄云PaaS平台做为优异的资源、应用统一管理平台，可帮助企业快速构建高效可控的混合云方案，可屏蔽底层IaaS的复杂性，为应用提供更稳定的运行环境，提高运维人员在混合云（IaaS）运维管理的效率，减少IT运维人员的工作负担。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize6.jpg">
                                <b>寄云科技荣获Cloud China 2016云帆奖奖项</b>
                                <p>寄云PaaS平台为企业的开发者和IT运营者提供最佳的资源、应用的统一管理平台，能够轻松部署和管理跨公有云、私有云的企业应用和开发环境及组件，从云基础设施和企业应用两个维度，为企业用户提供云资源和企业应用的配置、 监控、自动化部署和管理等服务，降低企业云落地、云开发的门槛。支持统一管理多种公有云和私有云环境，并集成了如脚本执行、监控告警和应用部署等日常运维管理工具。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize7.jpg">
                                <b>寄云科技荣获至顶网2015年凌云奖最佳云生态厂商奖项</b>
                                <p>寄云科技是一家专业的企业云服务提供商，为用户提供便捷、易用、安全、可靠、高性价比的企业级云应用平台。寄云科技作为国内SaaS领域的先驱者，帮助软件厂商进行业务转型，在零代码改动和零前期投入的情况下，帮助厂商直面百万级企业销售机会，为打造国内健康的云生态做出了突出贡献。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize8.jpg">
                                <b>寄云SaaS服务平台荣获赛迪网2015年度最佳云应用平台奖项</b>
                                <p>寄云SaaS服务平台为软件厂商提供一站式销售、管理、营销服务，可帮助软件厂商进行业务转型，在零代码改动和零前期投入的情况下，帮助厂商直面百万级企业销售机会，为打造国内健康的云生态做出了贡献。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize9.jpg">
                                <b>寄云科技总经理时培昕荣获赛迪网2015年SaaS行业最具影响力人物</b>
                                <p>寄云科技总经理时培昕博士一直在推动国内SaaS行业整体发展而努力，在SaaS具有极大的影响力。时培昕博士为国内SaaS行业提供专业的指导和建议，为打造国内健康的云生态做出了突出贡献。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize10.jpg">
                                <b>寄云科技时培昕博士荣获商业伙伴2015方案商创新人物</b>
                                <p>时培昕博士因其创新的商业理念荣获该奖项。寄云科技的业务打通了云产业链条的各个环节，为渠道商、ISV带来了新的业务模式和增长点，为企业用户带来了丰富的即买即用的企业应用软件和简便的管理平台。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize11.jpg">
                                <b>2014中国IT产品满意度调查技术创新奖</b>
                                <p>该奖项在2014中国网络管理技术大会上，由中国电子信息产业发展研究院和《网络运维与管理》杂志社联合颁发，作为国内最权威的大型网络技术交流活动之一，“中国网络管理技术大会”被视为技术领先且应用最为广泛产品的权威展示平台，倍受业界重视与关注。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize12.jpg">
                                <b>《网络世界》2014年度企业云服务创新解决方案</b>
                                <p>《网络世界》年度创新奖由权威企业级媒体《网络世界》颁发，入选该奖项的产品和解决方案，代表引领行业、创新开拓的实力。</p>
                            </li>
                            <li>
                                <img src="../../assets/img/prize13.jpg">
                                <b>Cloud500榜单</b>
                                <p>Cloud500榜单是商业伙伴咨询机构对国内云计算生态系统持续跟踪研究的结果。入选Cloud500的企业，是国内最具实力的云计算公司的代表，也是中国云计算生态系统的骨干力量。</p>
                            </li>
                        </ul>
                        <div class="show-more">
                            <a href="javascript:;">显示更多</a>
                        </div>
                    </div>
                    <div class="dynamic" v-show="isActive === '最新动态'">
                        <ul>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic1.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/jiyun-rongzhilian-2129.html" target="_blank">寄云与荣之联达成战略合作 深耕工业互联网</a>
                                    <p>摘要：寄云科技与荣之联达成合作协议，双方将在工业互联网领域建立全面、深入的合作。寄云科技与荣之联将充分利用双方在技术积累和行业应用上的优势</p>
                                    <time> 2016-12-07</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic2.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/gongyehulianwang-2128.html" target="_blank">寄云推动工业互联网建设 释放数据价值</a>
                                    <p>摘要：寄云科技将打造更加全面的服务平台，借助云计算、大数据、物联网等新兴技术的力量，帮助企业构建全新的IT架构、实现数字化转型。</p>
                                    <time> 2016-11-16</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic3.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/jiyun-ruantongdongli-hezuo-2073.html" target="_blank">寄云科技与软通动力携手打造SaaS合作新生态</a>
                                    <p>摘要：北京寄云鼎城科技有限公司(以下简称：寄云科技)与软通动力信息技术(集团)有限公司(以下简称：软通动力)举行了中小企业云平台合作签约仪式</p>
                                    <time> 2016-10-27</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic4.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/jiyunkeji-yunjixingchuang-2111.html" target="_blank">寄云科技携手云极星创 加速产业云落地</a>
                                    <p>摘要：10月12日，寄云科技与云极星创达成战略合作，寄云PaaS平台、SaaS服务平台以及大数据等产品和服务将与云极星创综合云服务平台进行对接，双方将在研发、方案、推广和销售等方面进行全面整合，联手推动产业云在中国的落地和发展。</p>
                                    <time> 2016-10-17</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic5.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/shuzihuazhuanxing-2000.html" target="_blank">寄云科技全面布局云服务 助企业数字化转型</a>
                                    <p>摘要：寄云科技CEO时培昕博士在《企业PaaS助力数字化转型》的主题演讲中表示，当前的IT架构无法支撑企业数字化转型，寄云科技将打造更加全面的云服务，帮助企业构建全新的IT架构、实现数字化转型。</p>
                                    <time> 2016-09-23</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic6.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/jiyun-huawei-quanlianjie-1985.html" target="_blank">寄云科技亮相华为全联接大会 云生态进一步提速</a>
                                    <p>摘要：正在召开的主题为Shape the Cloud(塑造云时代)的华为全联接大会，也是华为历史上规模最大的面向ICT行业的全球生态大会。寄云科技作为国内领先的企业云服务提供商，也以华为企业云应用超市合作伙伴的身份应邀参加。</p>
                                    <time> 2016-09-06</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic7.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/zhongguancun-chuying-1982.html" target="_blank">寄云科技获选中关村雏鹰计划专项支持企业</a>
                                    <p>摘要：近日，中关村管委会官网发布了“2016年度雏鹰计划专项扶持资金支持企业名单”。寄云所打造的中国自主知识产权的“产+销”SaaS服务平台，正式为了帮助企业上云、构建云端应用，帮助企业冲破进入SaaS服务市场的巨大阻力。</p>
                                    <time> 2016-09-01</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic8.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/jiyun-zhongdianshuju-1984.html" target="_blank">寄云科技与中电数据达成战略合作共建医疗大数据平台</a>
                                    <p>摘要：日前，寄云科技与中电数据达成战略合作，此举有望将寄云的产品与技术优势与中电数据的行业管理优势相结合，而根据双方的协议，双方将联手规范和推动“互联网+健康医疗”服务，共同为医疗产业的标准化做出贡献。</p>
                                    <time> 2016-08-30</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic9.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/1983.html" target="_blank">软件进入SaaS时代　寄云致力共建SaaS合作新生态</a>
                                    <p>摘要：日前，在“第九届中国软件渠道大会暨2016中国软件生态大会”广州站上，寄云科技市场总监郭伟怡在演讲中表示，SaaS替代传统软件，只是时间问题;为了ISV、SaaS厂商和渠道能够更好地把握SaaS时代的新机遇，寄云正在通过打造SaaS服务平台，建立SaaS合作的新生态。</p>
                                    <time> 2016-08-26</time>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="img-con">
                                    <img src="../../assets/img/dynamic10.jpg">
                                </div>
                                <div class="info">
                                    <a href="http://www.neucloud.io/article/saas-tidai-ruanjian-1980.html" target="_blank">寄云科技：SaaS替代传统软件 只是时间问题</a>
                                    <p>摘要：SaaS替代传统软件，只是时间问题。IDC预测，未来5年，中国的SaaS产业将进入快速发展阶段。2014 年，中国SaaS 市场规模为3.88亿美元， 预计2019 年市场规模将达到12.23亿美元。</p>
                                    <time> 2016-08-18</time>
                                </div>
                            </li>
                        </ul>
                        <div class="show-more">
                            <a href="javascript:;">显示更多</a>
                        </div>
                    </div>
                    <div class="contact" v-show="isActive === '联系我们'">
                        <section class="find-us">
                            <b>如何找到我们？</b>
                            <p>电话：400-006-8118</p>
                            <p>邮箱：service@neucloud.cn</p>
                            <p>市场合作：marketing@neucloud.cn</p>
                            <div>
                                <p>新媒体：</p>
                                <ul class="medium clearfix">
                                    <li>
                                        <i>新浪微博</i>
                                        <img src="../../assets/img/weibo-code.png">
                                        <a href="http://weibo.com/neucloud" target="_blank">前往</a>
                                    </li>
                                    <li>
                                        <i>寄云科技微信公众号</i>
                                        <img src="../../assets/img/jiyun-code.png">
                                    </li>
                                    <li>
                                        <i>工业互联网时代公众号</i>
                                        <img src="../../assets/img/internet-code.png">
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section class="adress-list">
                            <b>地址：</b>
                            <ul class="adress">
                                <li>
                                    <p>北京总部：北京海淀区中关村软件园云基地C座415-418</p>
                                    <img src="../../assets/img/map1.jpg">
                                </li>
                                <li>
                                    <p>上海办事处：上海市宛平南路98号永丰国际广场银座9楼912室</p>
                                    <img src="../../assets/img/map2.jpg">
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <footer-con></footer-con>
    </div>
</template>
<script>
    import HeaderCon from '../../components/header-con.vue';
    import FooterCon from '../../components/footer-con.vue';
    export default {
        name: 'App',
        components: {
            'header-con': HeaderCon,
            'footer-con': FooterCon
        },
        data() {
            return {
                tabs: ['公司介绍', '公司荣耀', '最新动态', '联系我们'],
                isActive: '公司介绍'
            };
        },
        methods: {
            rangeTab(item) {
                this.isActive = item;
            }
        }
    };
</script>
<style lang="less">
    @import "../../assets/less/reset.less";
    *{
        box-sizing: border-box;
    }
    nav{
        background: url("../../assets/img/about-us.jpg") center center no-repeat;
    }
    .product-body{
        width: 100%;
        min-width: 1170px;
        margin-top: -30px;
        font-family: 'PingFang SC','Myriad Pro','Hiragino Sans GB','Microsoft YaHei',sans-serif;
        background: #F0F4FC;
    }
    .bar-con{
        width: 100%;
        padding-top: 70px;
    }
    .tab-bar{
        border-bottom: 1px solid #0070FF;
    }
    .about-bar{
        width: 950px;
        height: 56px;
        margin: 0 auto;
        li{
            float: left;
            width: 135px;
            line-height: 56px;
            text-align: center;
            color: #333;
            font-size: 20px;
            height: 56px;
            margin: 0 50px;
            cursor: pointer;
            box-sizing: border-box;
            &:hover{
                border-bottom: 2px solid #0070FF; 
            }
        }
        .active{
            border-bottom: 2px solid #0070FF;
        }
    }
    .tab-content{
        width: 1170px;
        margin: 0 auto;
        .show-more{
            padding-bottom: 150px;
            a{
                display: block;
                width: 356px;
                height: 40px;
                background-color: #0070FF;
                color: #fff;
                font-size: 18px;
                line-height: 40px;
                text-align: center;
                border-radius: 8px;
                margin: 0 auto;
            }
        }
    }
    .about{
        h3{
            color: #4A4A4A;
            margin-top: 70px;
            margin-bottom: 20px;
        }
        .article{
            margin-bottom: 30px;
            line-height: 23px;
            font-size: 24px;
        }
        .description{
            width: 575px;
            margin: 0 auto;
            padding-bottom: 10px;
            p{
                margin: 0 0 30px;
                line-height: 24px;
                text-align: justify;
            }
            img{
                display: block;
                margin: 80px auto 60px;
            }
        }
        .advantage{
            width: 100%;
            img{
                display: block;
                margin: 0 auto;
            }
        }
        .time-line{
            width: 100%;
            padding-bottom: 100px;
            ul{
                margin: 0 auto;
                width: 892px;
                font-size: 24px;
                color: #4A4A4A;
                li{
                    list-style: none;
                    background: url(../../assets/img/timeline-icon.png) no-repeat 8px 18px;
                    border-bottom: 1px solid #D3D9F0;
                    font-size: 18px;
                    line-height: 50px;
                    padding-left: 45px;
                    time{
                        display: inline-block;
                        width: 115px;
                    }
                }
            }
        }
    }
    .honour{
        ul{
            margin: 0 auto;
            padding: 60px 0;
            padding-bottom: 30px;
            li{
                position: relative;
                width: 340px;
                height: 560px;
                list-style: none;
                float: left;
                background-color: #E0E6F0;
                padding: 10px;
                margin-bottom: 50px;
                margin-right: 75px;
                b{
                    display: block;
                    padding: 0 10px;
                    color: #0070FF;
                    font-size: 20px;
                    margin: 18px 0;
                    text-align: justify;
                    line-height: 27px;
                    font-weight: 500;
                }
                p{
                    line-height: 24px;
                    padding: 0 10px;
                    text-align: justify;
                }
            }
            li:nth-child(3n+0){
                margin-right: 0;
            }
        }
    }
    .dynamic{
        ul{
            margin: 0 auto;
            padding: 50px 0;
            li{
                list-style: none;
                height: 180px;
                margin-bottom: 35px;
                .img-con{
                    width: 400px;
                    float: left;
                    img{
                        display: block;
                        width: 257px;
                        height: 180px;
                        margin: 0 auto;
                    }
                }
                .info{
                    width: 770px;
                    float: left;
                    position: relative;
                    height: 180px;
                    padding-left: 0px;
                    border-bottom: 1px solid #CFCFCF;
                    a{
                        display: block;
                        color: #0070FF;
                        font-size: 20px;
                        margin-bottom: 15px;
                        text-decoration: none;
                    }
                    p{
                        margin-bottom: 5px;
                        text-align: justify;
                        line-height: 24px;
                    }
                    time{
                        position: absolute;
                        bottom: 10px;
                        left: 0;
                    }
                }
            }
        }
    }
    .contact{
        section{
            width: 800px;
            margin: 0 auto;
            padding: 50px 0;
            b{
                display: block;
                color: #0070FF;
                font-size: 24px;
                margin-bottom: 30px;
                font-weight: 500;
            }
            p{
                font-size: 18px;
                margin: 0 0 10px;
            }
            div{
                margin-top: 70px;
                .medium{
                    width: 700px;
                    margin: 0 auto;
                    margin-top: 30px;
                    li{
                        list-style: none;
                        float: left;
                        width: 160px;
                        margin-right: 110px;
                        i{
                            display: block;
                            font-size: 14px;
                            font-style: normal;
                            text-align: center;
                            width: 160px;
                        }
                        img{
                            width: 160px;
                            height: 160px;
                            margin: 15px 0;
                        }
                        a{
                            display: block;
                            width: 100%;
                            color: #252525;
                            text-align: center;
                        }
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .adress{
                li{
                    list-style: none;
                    margin-bottom: 50px;
                    img{
                        width: 789px;
                        height: 220px;
                    }
                }
            }
        }
    }
</style>