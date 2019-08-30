var option1 ={
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
                ret +=  params["value"]+"%";
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
            roam: 'scale',
            hoverable: false,
            mapType: 'china',
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
                        {name: "杭州", value: 9.96},
						{name: "临安"}
					],
                    [
                        {name: "上海", value: 1},
                        {name: "临安"}
                    ],
                    [
                        {name: "金华", value: 0.41},
                        {name: "临安"}
                    ],
                    [
                        {name: "绍兴", value: 0.25},
                        {name: "临安"}
                    ],
                    [
                        {name: "苏州", value: 0.25},
                        {name: "临安"}
                    ],
                    [
                        {name: "宁波", value: 0.23},
                        {name: "临安"}
                    ],
                    [
                        {name: "嘉兴", value: 0.22},
                        {name: "临安"}
                    ],
                    [
                        {name: "衢州", value: 0.16},
                        {name: "临安"}
                    ],
                    [
                        {name: "湖州", value: 0.14},
                        {name: "临安"}
                    ],
                    [
                        {name: "深圳", value: 0.14},
                        {name: "临安"}
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
                    {name: "杭州", value: 9.96},
					{name: "上海", value: 1},
					{name: "金华", value: 0.41},
					{name: "绍兴", value: 0.25},
					{name: "苏州", value: 0.25},
					{name: "宁波", value: 0.23},
					{name: "嘉兴", value: 0.22},
					{name: "衢州", value: 0.16},
					{name: "湖州", value: 0.14},
					{name: "深圳", value: 0.14}
				]
            }
        }
    ]
};
console.log($("#continer2"));
var chart1 = echarts.init($("#continer2").get(0));
chart1.setOption(option1);





