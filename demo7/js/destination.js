var option1 ={
    color:[ '#2EC7C9', '#B6A2DE'],
    legend: {

        x : 'right',
        data:['国际','国内'],
        textStyle:{
            color:"#fff",
            fontSize : 16
        }
    },
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c}人 ({d}%)"
    },
    calculable : false,
    series : [
        {
            name:'国际国内出游比例\n',
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
                {value:23063, name:'国际'},
                {value:53026, name:'国内'}
            ]
        }
    ]
};
var chart1 = echarts.init(document.getElementById('nation_percent'));
chart1.setOption(option1);


var option2 ={
    backgroundColor:'rgba(0,0,0,0.2)',
    color: ['gold','aqua','lime'],
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
            ret +=  params["value"]+'人';
            ret += "</div></div>";
            return ret;
        }
        return name;
    }
},
    dataRange: {
        min : 0,
            max : 100,
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
            roam: true,
            hoverable: false,
            mapType: 'china',
            itemStyle:{
                normal:{
                    borderColor:'#0A6BB5',
                    borderWidth:2.5,
                    areaStyle:{
                        color: '#191A1B'
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
                        {name: "临安"},
                        {name: "宣州市", value: 19862}
                    ],
                    [
                        {name: "临安"},
                        {name: "黄山市", value: 7619}
                    ],
                    [
                        {name: "临安"},
                        {name: "无锡市", value: 6533}
                    ],
                    [
                        {name: "临安"},
                        {name: "苏州市", value: 5458}
                    ],
                    [
                        {name: "临安"},
                        {name: "南京市", value: 4699}
                    ],
                    [
                        {name: "临安"},
                        {name: "芜湖市", value: 3947}
                    ],
                    [
                        {name: "临安"},
                        {name: "合肥市", value: 3485}
                    ],
                    [
                        {name: "临安"},
                        {name: "滁州市", value: 3403}
                    ],
                    [
                        {name: "临安"},
                        {name: "常州市", value: 3344}
                    ],
                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 5
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    },
                    emphasis: {
                        label:{position:'top'}
                    }
                },
                data : [
                    {name: "宣州市", value: 19862},
                    {name: "黄山市", value: 7619},
                    {name: "无锡市", value: 6533},
                    {name: "苏州市", value: 5458},
                    {name: "南京市", value: 4699},
                    {name: "上饶市", value: 4417},
                    {name: "芜湖市", value: 3947},
                    {name: "合肥市", value: 3485},
                    {name: "滁州市", value: 3403},
                    {name: "常州市", value: 3344}
                ]
            }
        }
    ]
};
var chart2 = echarts.init(document.getElementById('destination'));
chart2.setOption(option2);
