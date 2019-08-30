//下边导航栏 鼠标划过 显示文字
$(".bar_bot a").mouseover(function(){
	$(".bar_right a span").hide();
	$(this).children("span").show();
}).mouseout(function(){
	$(".bar_bot a span").hide();
})

//上面 中间 图表
var option1 = {
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
          
var chart1 = echarts.init(document.getElementById('people_like'));
chart1.setOption(option1);


//上面 右边 字符云
var option2 = {
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
var chart2 = echarts.init(document.getElementById('spot_search')); 
chart2.setOption(option2); 


//下面  左边  折线图
var option3 = {
    title : {
//      text: '某楼盘销售情况',
//      subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis',
        formatter : "{a} <br/>{b} : {c}人"
    },
    legend: {
        x:"right",
        data:['游客人数'],
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    grid:{
        borderWidth:0   //去掉最外围边框
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    grid:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)',
        x:'63px',
        y:'35px',
        x2:'60px',
        y2:'65px'
    },
    xAxis : [
        {
            //	name:"日期",
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],
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
            splitLine:{show: false},//去除网格线
        }
    ],
    yAxis : [
        {
            //	name:"人数",
            type : 'value',
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
                    color:"#0BA4C0"
                }
            },
            splitLine:{
                show: false
            },
        }
    ],
    series : [
        {
            name:'游客人数',
            type:'line',
            smooth:false,
            itemStyle: {
                normal: {
                    color:"#49ddbd", //上方lengend的标志颜色
                    areaStyle: {
                        color: 'rgba(73,221,189,0.4)'
                    },
                    lineStyle:{
                        color:"#49ddbd"
                    }

                }
            },
            symbol:"circle", /*转折点圆圈的设置*/
            symbolSize:function(v){
                return 5
            },
            data:[123,98,136,189,156,102,142]
        }
    ]
};
var chart3 = echarts.init(document.getElementById('week_people')); 
chart3.setOption(option3); 

//下面 右边  柱形图
var option4 = {
    color:[ '#49DDBD', '#159CCC'],
    tooltip : {
        trigger: 'axis',
        formatter: function (params,ticket,callback) {
            var res = '';
            console.log(params);

//	            res+='到访人数:'+params[0].value+'人,占比:'+Math.round(parseFloat(params[0].value)/sum*100)+'%'
//	            var sum = parseFloat(params[0].value) +parseFloat( params[1].value);
            for (var i = 0, l = params.length; i < l; i++) {
                res += params[i].seriesName +'年<br/>';
                res += params[i].name +':'+ params[i].value +'人'+'<br/>';
            }
            setTimeout(function (){
                // 仅为了模拟异步回调
                callback(ticket, res);
            }, 1000);
            return 'loading';
        }
    },
    legend: {
        x: 'right',
        data:['2016','2017'],
        itemWidth:16,
        itemHeight:16,
        selected:true,
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    grid:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)'
    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            data :['1月','2月','3月','4月','5月','6月'],
            boundaryGap: true,
            splitLine:{
                show:false
            },
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
        }
    ],
    yAxis : [
        {
            type : 'value',
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
            name:'2016',
            type:'bar',
            data:[20, 49, 70, 232, 256, 767]

        },
        {
            name:'2017',
            type:'bar',
            data:[26, 59, 90, 264, 287, 707]

        }
    ]
};
var chart4 = echarts.init(document.getElementById('six_month')); 
chart4.setOption(option4);               