// 左下  轮播图
var mySwiper_one = new Swiper('.scroll_one',{
    autoplay : 5000,//可选选项，自动滑动
    loop: true,
    effect : 'fade',
    speed:1000, //切换  历时
    noSwiping:true,//不允许  滑动slide 配合class名一起使用才有用
});
//点击  切换 模块
$(".scroll_one .per_title").click(function(){
    mySwiper_one.swipeNext();
})
//鼠标划过  停止切换    //鼠标划出  开始自动切换
$(".scroll_one .swiper-slide").mouseover(function(){
    mySwiper_one.stopAutoplay();
}).mouseout(function(){
    mySwiper_one.startAutoplay();
})
var option2 = {
    color:['#E98022', '#0DCCE0', '#EA4453', '#E3E23D', '#E164CB','#49D748','#616FF4'],
    tooltip: {
        trigger: 'axis',
        //formatter: "{a} <br/>{b} : {c}元人民币"
    },
    legend: {
        x : 'right',
        itemWidth:16,
        itemHeight:16,
        data:['旅游服务','餐饮','交通','零售','娱乐','住宿'],
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    grid:{
        borderColor:'rgba(0,0,0,0)',
        x:'105px',
        y:'40px',
        x2:'40px',
        y2:'35px'
    },
    calculable : false,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine:{
            show:false
        },
        data:['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel:{
            textStyle:{
                color:"#fff",
                fontSize : 16
            }
        },
        axisLine:{
            lineStyle:{
                color:"#0BA4C0"
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            show:true,
            interval: 'auto',
            formatter: '{value}元',
            textStyle:{
                color:"#fff",
                fontSize : 16
            }
        },
        axisLine:{
            lineStyle:{
                color:"#0BA4C0"
            }
        },
        splitLine:{
            show:false
        }
    },
    series : [
        {
            name:'旅游服务',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'餐饮',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'交通',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'零售',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'娱乐',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'住宿',
            type:'line',
            stack: '总量',
            data:[1020, 1132, 1101, 1134, 1290, 1530, 1520]
        }
    ]
};

// console.log($(".continer1")[0],$(".continer1")[1])
var chart2 = echarts.init($(".continer1")[0]);
chart2.setOption(option2);
var chart22 = echarts.init($(".continer1")[1]);
chart22.setOption(option2);


var option3 = {
    color:['#4E5AC0', '#606FF6', '#0D7894', '#159CCC', '#49DDBD'],
    legend: {
        x : 'right',
        itemWidth:16,
        itemHeight:16,
        data:['携程', '美团','同程','驴妈妈','其他'],
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    tooltip : {
        show : true,
        formatter : "{a} <br/>{b} : {c}张"
    },
    grid:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)',
        x:'49px',
        y:'35px',
        x2:'40px',
        y2:'35px'
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            data :['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel:{
                textStyle:{
                    color:"#fff",
                    fontSize : 16
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#0BA4C0"
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                show:true,
                interval: 'auto',
                formatter: '{value}张',
                textStyle:{
                    color:"#fff",
                    fontSize : 16
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#0BA4C0"
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
    series : [
        {
            name:'携程',
            type:'bar',
            stack: '总量',
            barWidth : 30,//柱图宽度
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'美团',
            type:'bar',
            stack: '总量',
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'同程',
            type:'bar',
            stack: '总量',
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'驴妈妈',
            type:'bar',
            stack: '总量',
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'其他',
            type:'bar',
            stack: '总量',
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
// console.log($(".continer55")[0])
var chart3 = echarts.init($(".continer55")[0]);
chart3.setOption(option3);
var chart33 = echarts.init($(".continer55")[1]);
chart33.setOption(option3);