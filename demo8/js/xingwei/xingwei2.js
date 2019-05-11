var option1 = {
    backgroundColor:'rgba(0,0,0,0)',
    color:["#5ab1ef","#d87a80"],
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c}人({d}%)"
    },
    legend: {
        orient : 'horizontal',
        x : 'right',
        y:"10px",
        textStyle:{
            color:"#063f7f",
            fontSize:12
        },
        data:["男性","女性"]
    },
    series : [{
        type : 'pie',
        radius : [ '50%', '70%' ],
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
        data : [
            {value:458, name:"男性"},
            {value:968, name:"女性"}
        ]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('sex_percent'));
chart1.setOption(option1);


var option2 ={
    //	backgroundColor:'rgba(0,0,0,0.2)',
    color: ['gold','aqua','lime'],
    calculable : false,
    tooltip : {
        trigger: 'item',
        backgroundColor : 'rgba(38,90,68,0.9)',
        //formatter: '{b}'
        formatter: function(params, ticket, callback) {
            var name = params["name"];
            var index = name.indexOf(" > ");
            var rank;
            var ret = "<div align='center' style='padding:0pt;margin:0pt'><div style='font-size:18px;margin:0pt'>";
            if (params["value"]!='-') {
                //ret += name.substring(0, index);
                ret += name;
                rank = params["dataIndex"] + 1;
                ret += "</div>";
                ret += "<div align='center' style='font-size:18px;margin:0pt'>";
                ret +=  params["value"]+"";
                ret += "</div></div>";
                return ret;
            }
            return name;
        }
    },
    dataRange: {
        min : 0,
        max : 1500,
        calculable : true,
        show:false,
        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
        textStyle:{
            color:'#fff'
        }
    },
    series : [
        {
            type: 'map',
            roam: 'scale',
            hoverable: false,
            mapType: 'china',
            mapLocation:{
                "x": "center",
                "y": "center"
            },
            roam:true,
            itemStyle:{
                normal:{
                    borderColor:'#2EA7CE',
                    borderWidth:2.5,
                    areaStyle:{
                        color: '#33547F'
                    }
                }
            },
            data:[],
            markLine : {
                smooth:true,
                symbol: ['none', 'circle'],
                symbolSize : 1,
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:1,
                        borderColor:'rgba(30,144,255,0.5)'
                    }
                },
                data : [],
            },
            geoCoord: geoCoord
        },
        {
            type: 'map',
            mapType: 'china',
            data:[],
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        label:{
                            show:false
                        },
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data :[
                    [
                        {name: "河南", value: 996},
                        {name: "杭州"}
                    ],
                    [
                        {name: "新疆", value: 136},
                        {name: "杭州"}
                    ],
                    [
                        {name: "西藏", value: 598},
                        {name: "杭州"}
                    ],
                    [
                        {name: "云南", value: 635},
                        {name: "杭州"}
                    ],
                    [
                        {name: "四川", value: 240},
                        {name: "杭州"}
                    ],
                    [
                        {name: "甘肃", value: 652},
                        {name: "杭州"}
                    ],
                    [
                        {name: "广东", value: 247},
                        {name: "杭州"}
                    ],
                    [
                        {name: "福建", value: 2036},
                        {name: "杭州"}
                    ],
                    [
                        {name: "山东", value: 541},
                        {name: "杭州"}
                    ],
                    [
                        {name: "北京", value: 985},
                        {name: "杭州"}
                    ],
                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 5
                },
                effect : {
                    show: false,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    },
                    emphasis: {
                        label:{show:false}
                    }
                },
                data :[
                    // {name: "杭州", value: 9.96},
                    // {name: "上海", value: 1},
                    // {name: "金华", value: 0.41},
                    // {name: "绍兴", value: 0.25},
                    // {name: "苏州", value: 0.25},
                    // {name: "宁波", value: 0.23},
                    // {name: "嘉兴", value: 0.22},
                    // {name: "衢州", value: 0.12},
                    // {name: "湖州", value: 0.14},
                    // {name: "深圳", value: 0.14}
                ]
            }
        }
    ]
};
var chart2 = echarts.init(document.getElementById('from'));
chart2.setOption(option2);

var option3 = {
    color:[  '#D87A80', '#FFB980', '#5AB1EF','#B6A2DE','#2EC7C9' ],
    calculable : false,
    legend: {
        orient : 'horizontal',
        x : '0',
        y:"10px",
        textStyle:{
            color:"#063f7f",
            fontSize:12
        },
        data:["0-20岁","21-30岁","31-35岁","36-45岁","46-60岁"],
        itemGap:5,
        itemWidth:10,
        itemHeight:10
    },
    series : [
        {
            name:'金字塔',
            type:'funnel',
//		            width: '80%',
//		            height:'80%',
               x:'40px',
               y:'40px',
               x2:'40px',
               y2:'40px',
            sort : 'ascending',
            itemStyle: {
                normal: {
                    // color: 各异,
                    label: {
                        position: 'right',
                        textStyle : {
                            fontSize : 12
                        }
                    }

                }
            },
            data:
                [
                    {value:20, name:'46-60岁'},
                    {value:40, name:'36-45岁'},
                    {value:60, name:'31-35岁'},
                    {value:80, name:'21-30岁'},
                    {value:100, name:'0-20岁'}
                ]
        }
    ]
};
var chart3 = echarts.init(document.getElementById('age_chart'));
chart3.setOption(option3);

var option4 ={
    color:[ '#2EC7C9', '#B6A2DE'],
    legend: {
        x : 'right',
        y:"10px",
        data:['省外','省内'],
        textStyle:{
            color:"#063f7f",
            fontSize:"12"
        }
    },
    tooltip : {
        show: true,
        formatter: "{a}<br/>{b}:{c}人({d}%)"
    },
    calculable : false,
    series : [
        {
            name:'省内/外对比',
            type:'pie',
            radius : '65%',
//          x:'10px',
//          y:'10px',
            //center: ['50%', '50%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
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
var chart4 = echarts.init(document.getElementById('source'));
chart4.setOption(option4);

var option5 = {
    backgroundColor:'rgba(0,0,0,0)',
    color:["#72B6EA","#ffb980","#2EC7C9","#B6A2DE","#FF656D","#FFB980","#3665C6"],
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c}人({d}%)"
    },
    legend: {
        orient : 'horizontal',
        x : 'right',
        y:"10px",
        textStyle:{
            color:"#063f7f",
            fontSize:12
        },
        data:["公交司机","IT从业者","出租车司机","教师"],
        itemGap:0
    },
    series : [{
        type : 'pie',
        radius : [ '50%', '70%' ],
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
                    show : true,
                    position : 'center',
                    textStyle : {
                        fontSize : '28',
                        //fontWeight : 'bold'
                    }
                }
            }
        },
        data : [
            {value:3652, name:"公交司机"},
            {value:2652, name:"IT从业者"},
            {value:1036, name:"出租车司机"},
            {value:458, name:"教师"}
        ]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart5 = echarts.init(document.getElementById('work'));
chart5.setOption(option5);

var option6 = {
    color:[ '#2EC7C9', '#B6A2DE', '#5AB1EF'],
    title: {
        text: '消费水平',
        x: 'center',
        y: 'center',
       // itemGap: 20,
        textStyle : {
            color : '#72b6ea',
            fontFamily : '微软雅黑',
            fontSize : 18,
            // fontWeight : 'bolder'
        }
    },
    calculable : false,
    tooltip : {
        show: true,
        formatter: "{a}<br/>{b}:{d}%"
    },
    legend: {
        orient : 'vertical',
        x : document.getElementById('consume').offsetWidth / 2,
        y : 42,
        itemGap:12,
        data:['消费水平高','消费水平中等','消费水平低'],
        textStyle:{
            color:"#063f7f",
            fontSize:"12"
        }
    },
    series : [
        {
            name:'消费水平',
            type:'pie',
            clockWise:false,
            radius : [80, 105],
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
            name:'消费水平',
            type:'pie',
            clockWise:false,
            radius : [55, 80],
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
            name:'消费水平',
            type:'pie',
            clockWise:false,
            radius : [30,55],
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
var chart6 = echarts.init(document.getElementById('consume'));
chart6.setOption(option6);