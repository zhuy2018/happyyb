// 右上  自动切换
var mySwiper_three = new Swiper('.scroll_three',{
    autoplay : 5000,//可选选项，自动滑动 ms
    loop: true,
    effect : 'fade',
    speed:1000, //切换  历时
    noSwiping:true,//不允许  滑动slide 配合class名一起使用才有用
});
//点击  切换 模块
$(".scroll_three .per_title").click(function(){
    mySwiper_three.swipeNext();
})
//鼠标划过  停止切换    //鼠标划出  开始自动切换
$(".scroll_three .swiper-slide").mouseover(function(){
    mySwiper_three.stopAutoplay();
}).mouseout(function(){
    mySwiper_three.startAutoplay();
})

var option6 = {
    backgroundColor:'rgba(0,0,0,0)',
    color : [ "#b66f77", "#418CC0" ],
    tooltip : {
        trigger : 'item',
        formatter : "{a} <br/>{b} : {c} ({d}%)",
        show : false
    },
    calculable : false,
    series : [ {
        name : '性别比例',
        type : 'pie',
        radius : [ '50%', '70%' ],
        avoidLabelOverlap : false,
        tooltip : {
            trigger : 'item',
            formatter : "{a} <br/>{b} : {c} ({d}%)",
            show : false
        },
        itemStyle : {
            normal : {
                label : {
                    show : false
                },
                labelLine : {
                    show : false
                }
            },
            emphasis : {
                label : {
                    show : false,
                    position : 'center',
                    textStyle : {
                        fontSize : '30',
                        fontWeight : 'bold'
                    }
                }
            }
        },
        data : [ {
            value :48,
            name : '女'
        }, {
            value :52,
            name : '男'
        }
        ]
    } ]
};
var chart6 = echarts.init($(".sex_percent1")[0]);
chart6.setOption(option6);
var chart66 = echarts.init($(".sex_percent1")[1]);
chart66.setOption(option6);


var option7 = {
    color:[  '#D87A80', '#FFB980', '#5AB1EF','#B6A2DE','#2EC7C9' ],
    calculable : false,
    series : [
        {
            name:'金字塔',
            type:'funnel',
//		            width: '80%',
//		            height:'80%',
            x:'65px',
            y:'40px',
            x2:'65px',
            y2:'40px',
            sort : 'ascending',
            itemStyle: {
                normal: {
                    // color: 各异,
                    label: {
                        position: 'right',
                        textStyle : {
                            fontSize : 16
                        }
                    }

                }
            },
            data:
                [
                    {value:20, name:'45-60岁'},
                    {value:40, name:'35-45岁'},
                    {value:60, name:'30-35岁'},
                    {value:80, name:'20-30岁'},
                    {value:100, name:'0-20岁'}
                ]
        }
    ]
};
var chart7 = echarts.init($(".people_age")[0]);
chart7.setOption(option7);


var option8 = {
    color:[ '#2EC7C9', '#B6A2DE', '#5AB1EF'],
    title: {
        text: '消费水平',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : '#72b6ea',
            fontFamily : '微软雅黑',
            fontSize : 36,
            // fontWeight : 'bolder'
        }
    },
    calculable : false,
    tooltip :
        {
            show: true,
            formatter:function(params, ticket, callback) {
                var name = params["name"];
                if (name !='invisible') {
                    var ret = "<div align='center' style='padding:0pt;margin:0pt'><div style='font-size:18px;margin:0pt'>";
                    ret += name;
                    ret += "</div>";
                    ret += "<div align='center' style='font-size:18px;margin:0pt'>";
                    ret +=  params["value"]+"%";
                    ret += "</div></div>";
                    return ret;
                }

                return '';
            }
        },
    legend: {
        orient : 'vertical',
        x : 300,
        y : 60,
        itemGap:12,
        data:['消费水平高','消费水平中等','消费水平低'],
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    series : [
        {
            name:'1',
            type:'pie',
            clockWise:false,
            radius : [125, 150],
            itemStyle : {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            },
            data:[
                {
                    value:50,
                    name:'消费水平高'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : {
                        normal : {
                            color: 'rgba(0,0,0,0)',
                            label: {show:false},
                            labelLine: {show:false}
                        },
                        emphasis : {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }
            ]
        },
        {
            name:'2',
            type:'pie',
            clockWise:false,
            radius : [100, 125],
            itemStyle : {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            },
            data:[
                {
                    value:30,
                    name:'消费水平中等'
                },
                {
                    value:70,
                    name:'invisible',
                    itemStyle : {
                        normal : {
                            color: 'rgba(0,0,0,0)',
                            label: {show:false},
                            labelLine: {show:false}
                        },
                        emphasis : {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }
            ]
        },
        {
            name:'3',
            type:'pie',
            clockWise:false,
            radius : [75, 100],
            itemStyle : {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            },
            data:[
                {
                    value:20,
                    name:'消费水平低'
                },
                {
                    value:80,
                    name:'invisible',
                    itemStyle : {
                        normal : {
                            color: 'rgba(0,0,0,0)',
                            label: {show:false},
                            labelLine: {show:false}
                        },
                        emphasis : {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }
            ]
        }
    ]
};
var chart8 = echarts.init($(".consume")[0]);
chart8.setOption(option8);
var chart88 = echarts.init($(".consume")[1]);
chart88.setOption(option8);