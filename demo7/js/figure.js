var option1 = {
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
var chart1 = echarts.init(document.getElementById('sex_percent'));
chart1.setOption(option1);


var option2 = {
    color:[  '#D87A80', '#FFB980', '#5AB1EF','#B6A2DE','#2EC7C9' ],
    calculable : false,
    series : [
        {
            name:'金字塔',
            type:'funnel',
//		            width: '80%',
//		            height:'80%',
            x:'65px',
            y:'0px',
            x2:'65px',
            y2:'0px',
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
var chart2 = echarts.init(document.getElementById('people_age'));
chart2.setOption(option2);

var option3 = {
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
        x : document.getElementById('consume').offsetWidth / 2,
        y : 20,
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
var chart3 = echarts.init(document.getElementById('consume'));
chart3.setOption(option3);

var option4 = {
    color:[ '#159CCC', '#159CCC'],
    calculable : false,
    grid:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)',
        x:'55px',
        y:'35px',
        x2:'47px',
        y2:'35px'

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
        formatter: "{b} : {c}人"
    },
    yAxis : [
        {
            type : 'category',
            data :['嘉兴市','绍兴市','苏州市','杭州市','宁波市','上海市'],
            boundaryGap : [0, 0.01],
            axisLabel:{
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
            data:[1803, 2389, 2034, 10470, 13144, 13030]
        }
    ]
};
var chart4 = echarts.init(document.getElementById('source'));
chart4.setOption(option4);


var option5 ={
    color:[ '#2EC7C9', '#B6A2DE'],
    legend: {
        x : 'right',
        data:['省外','省内'],
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    tooltip : {
        show: true,
            formatter: "{a} <br/>{b} : {c}人 ({d}%)"
    },
    calculable : false,
        series : [
        {
            name:'游客分布',
            type:'pie',
            radius : '65%',
            center: ['50%', '60%'],
            itemStyle: {
                normal: {
                    // color: 各异,
                    label: {
                        textStyle : {
                            fontSize : 16
                        }
                    }
                }
            },
            data:[
                {value:30256, name:'省外'},
                {value:13605, name:'省内'}
            ]
        }
    ]
};
var chart5 = echarts.init(document.getElementById('provice'));
chart5.setOption(option5);


var option6 = {
    color:[ '#00fcff'],
    calculable : false,
    tooltip : {
        trigger: 'axis',
        formatter: function (params,ticket,callback) {
            var res = params[0].indicator +'<br/>';
            //	            console.log(params);

            res+='到访人数:'+params[0].value+'人,占比:'+Math.round(parseFloat(params[0].value)/27639*100)+'%'
//		            var sum = parseFloat(params[0].value) +parseFloat( params[1].value);
//		            for (var i = 0, l = params.length; i < l; i++) {
//		            	res += params[i].name +':'+ params[i].value +'人, 占比:'+Math.round(parseFloat(params[i].value)/sum*100)+'%'+ '<br/>';
//		            }
            setTimeout(function (){
                // 仅为了模拟异步回调
                callback(ticket, res);
            }, 1000);
            return 'loading';
        }
    },
    polar : [
        {
            indicator : [
                {text : '到访1次',max:10000},
                {text : '到访2次',max:10000},
                {text : '到访3次',max:10000},
                {text : '到访4次以上',max:10000}
            ],
            name : {
                formatter:'{value}',
                textStyle: {fontSize : 16,color:'#fff'}
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
                    value : [6520, 9520, 5036,6563],
                    name : '到访次数'
                }
            ]
        }
    ]
};
var chart6 = echarts.init(document.getElementById('visit'));
chart6.setOption(option6);
