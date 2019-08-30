// 中下  自动切换
var mySwiper_two = new Swiper('.scroll_two',{
    autoplay : 5000,//可选选项，自动滑动
    loop: true,
    effect : 'fade',
    speed:1000, //切换  历时
    noSwiping:true,//不允许  滑动slide 配合class名一起使用才有用
});
//点击  切换 模块
$(".scroll_two .per_title").click(function(){
    mySwiper_two.swipeNext();
})
//鼠标划过  停止切换    //鼠标划出  开始自动切换
$(".scroll_two .swiper-slide").mouseover(function(){
    mySwiper_two.stopAutoplay();
}).mouseout(function(){
    mySwiper_two.startAutoplay();
})

var option4 = {
    color:[ '#00fcff', '#f89292'],
    //backgroundColor:"rgba(0,0,0,0.2)",
    title : {
//      text: '罗纳尔多 vs 舍普琴科',
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params,ticket,callback) {
            var res = params[0].indicator +'<br/>';
            //   console.log(params);
            var sum = parseFloat(params[0].value) +parseFloat( params[1].value);
            for (var i = 0, l = params.length; i < l; i++) {
                res += params[i].name +':'+ params[i].value +'人, 占比:'+Math.round(parseFloat(params[i].value)/sum*100)+'%'+ '<br/>';
            }
            setTimeout(function (){
                // 仅为了模拟异步回调
                callback(ticket, res);
            }, 1000);
            return 'loading';
        }
    },
    legend: {
        x : 'right',
        data:['市民游客','外来游客'],
        textStyle:{
            "color":"#fff",
            "fontSize":"16"
        }
    },
    calculable : false,
    polar : [
        {
            indicator :[
                {text : '天目山', max  : 150},
                {text : '太湖源', max  : 150},
                {text : '浙西大峡谷', max  : 150},
                {text : '大明山', max  : 150},
                {text : '八百里风情岛', max  : 150},
                {text : '神龙川风景区', max  : 150}
            ],
            name: {
                show: true,
                textStyle:{
                    color:"#fff",
                    fontSize : 16
                }
            },
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#48656a',
                    width: 2,
                    type: 'solid'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,0,250,0)','rgba(0,200,200,0)']
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 2,
                    color : '#48656a'
                }
            },
            radius : 130
        }
    ],
    series : [
        {
            name: '市民省外游客景区偏好',
            type: 'radar',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data : [
                {
                    value :[97, 42, 78, 94, 110, 96],
                    name : '市民游客',
                    symbol: 'circle',
                    symbolSize: 1,           // 可计算特性参数，空数据拖拽提示图形大小
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                type: 'solid'
                            }
                        }
                    }
                },
                {
                    value :[67, 62, 74, 95, 88, 92],
                    name : '外来游客'
                }
            ]
        }
    ]
};
//console.log($(".people_like")[1])
var chart4 = echarts.init($(".people_like")[0]);
chart4.setOption(option4);
// var chart44 = echarts.init($(".people_like")[1]);
// chart44.setOption(option4);


var option5 = {
    color:[ '#159CCC', '#159CCC'],
        calculable : false,
        grid:{
        backgroundColor:'rgba(0,0,0,0)',
            borderColor:'rgba(0,0,0,0)',
            x:'140px',
            y:'15px',
            x2:'47px',
            y2:'25px'
    },
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
            axisLabel:{
                show:true,
                interval: 'auto',
                formatter: '{value}人',
                textStyle:{
                    color:"#fff",
                    fontSize : 16
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#0ba4c0"
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
        tooltip : {
        show: true,
            formatter: "{b} : {c}人 "
    },
    yAxis : [
        {
            type : 'category',
            data :['天目山','太湖源','浙西大峡谷','大明山','八百里风情岛','神龙川风景区'],
            boundaryGap : [0, 0.01],
            axisLabel:{
                show:true,
                textStyle:{
                    color:"#fff",
                    fontSize : 16
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#0ba4c0"
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
        series : [
        {
            type:'bar',
            barCategoryGap : '58%',
            itemStyle: {
                normal:{

                    color: function (params){
                        var colorList = ['#49DDBD','#159CCC','#49DDBD','#159CCC','#49DDBD','#159CCC','#49DDBD','#159CCC','#49DDBD','#159CCC'];
                        return colorList[params.dataIndex];
                    }
                },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data:[18203, 23489, 29034, 104970, 131744, 630230]
        }
    ]
};
// console.log($(".spot_search")[0])
var chart5 = echarts.init($(".spot_search")[0]);
chart5.setOption(option5);
var chart55 = echarts.init($(".spot_search")[1]);
chart55.setOption(option5);