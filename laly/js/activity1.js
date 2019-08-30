var option1 = {
    grid:{
        x:80,
        x2:0,
        y:30,
        y2:25,
        borderWidth:0
    },
    tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
            align:'center'
        },
        trigger: 'item',
        formatter: "{b} {c}人"
    },
    xAxis : [ {
        type : 'category',
        splitLine : 'false',// 不显示分割线
        axisLabel : {
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        boundaryGap : [ 0, 0.01 ],
        data :['天目山','神龙川风景区','八百里风情岛','钱王陵','清凉峰','大明山','太湖源','柳溪江','东天目山','浙西大峡谷']
    }],
    yAxis : [{
        type : 'value',
        axisLabel : {
            formatter: '{value}人',
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        splitLine : 'false'
    }],
    series : [{
        name : '游客人数',
        type : 'bar',
        barCategoryGap : '70%', // 类目间柱形距离，默认为类目间距的20%，可设固定值
        itemStyle : {
            normal : {
                color : function(params) {
                    var colorList = [ '#159CCC', '#49DDBD' ];
                    return colorList[params.dataIndex % 2]
                }
            }
        },
        data :[170000, 150000, 140000, 130000, 120000, 110000 ,90000, 70000, 50000, 30000]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('spot_rank'));
chart1.setOption(option1);


var option2 = {
    grid:{
        x:60,
        x2:60,
        y:20,
        y2:0,
        borderWidth:0
    },
    xAxis : [{
        type : 'value',
        splitLine : 'false',
        show : false,
        position : 'top',
        boundaryGap : [ 0, 0.01 ]
    }],
    yAxis : [{
        type : 'category',
        splitLine : 'false',
        axisLine : {
            show : false,
        },
        axisLabel : {
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        data : [ '1小时', '2小时', '3小时', '4小时', '5小时' ]
    }],
    series : [{
        type : 'bar',
        barWidth : '30',
        itemStyle : {
            normal : {
                color : function(params) {
                    var colorList = [ '#D18120', '#BCAF0B', '#029489', '#017C52', '#035F9A' ];
                    return colorList[params.dataIndex]
                },
                barBorderRadius : 15,
                label : {
                    textStyle : {
                        color : '#FFFFFF',
                        fontSize:16
                    },
                    show : true,
                    formatter : '{c}人'
                }
            },
            emphasis : {
                barBorderRadius : 15,
            }
        },
        data :[5842, 7533, 8883, 10112, 12039]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart2 = echarts.init(document.getElementById('stay_time'));
chart2.setOption(option2);


var option3 = {
    color:["#2EC7C9","#B6A2DE","#5AB1EF"],
    legend: {
        orient : 'vertical',
        x : document.getElementById('first_self').offsetWidth / 2 +5,
        y : 2,
        itemGap:12,
        textStyle:{
            color:"#fff",
            fontSize:16
        },
        data:['大明山','浙西大峡谷','太湖源']
//      			data:['大明山 163,669','浙西大峡谷 83,338','太湖源 7,155']
    },
    tooltip :{
            show: true,
            formatter:function(params, ticket, callback) {
                var name = params["name"];
                if (name !='invisible') {
                    var ret = "<div align='center' style='padding:0pt;margin:0pt'><div style='font-size:18px;margin:0pt'>";
                    ret += name;
                    ret += "</div>";
                    ret += "<div align='center' style='font-size:18px;margin:0pt'>";
                    ret +=  params["value"]+"人";
                    ret += "</div></div>";
                    return ret;
                }

                return '';
            }
    },
    series : [
        {
            type:'pie',
            clockWise:false,
            radius : [125, 150],//半径
            itemStyle : {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            },
            data:[
            	{
            		value:80000,
					name:'大明山'
				},
				{
					value:80000,
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
						value:60000,
						name:'浙西大峡谷'
				},
				{
					value:100000,
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
					value:20000,
					name:'太湖源'
				},
				{
					value:140000,
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
    ],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart3 = echarts.init(document.getElementById('first_self'));
chart3.setOption(option3);

var option4 = {
    color:["#2EC7C9","#B6A2DE","#5AB1EF"],
    legend: {
        orient : 'vertical',
        x : document.getElementById('first_self').offsetWidth / 2 +5,
        y : 2,
        itemGap:12,
        textStyle:{
            color:"#fff",
            fontSize:16
        },
        data:['天目山','神龙川风景区','八百里风情岛']
//      			data:['大明山 163,669','浙西大峡谷 83,338','太湖源 7,155']
    },
    tooltip :{
        show: true,
        formatter:function(params, ticket, callback) {
            var name = params["name"];
            if (name !='invisible') {
                var ret = "<div align='center' style='padding:0pt;margin:0pt'><div style='font-size:18px;margin:0pt'>";
                ret += name;
                ret += "</div>";
                ret += "<div align='center' style='font-size:18px;margin:0pt'>";
                ret +=  params["value"]+"人";
                ret += "</div></div>";
                return ret;
            }

            return '';
        }
    },
    series : [
        {
            type:'pie',
            clockWise:false,
            radius : [125, 150],//半径
            itemStyle : {
                normal: {
                    label: {show:false},
                    labelLine: {show:false}
                }
            },
            data:[
                {
                    value:80000,
                    name:'天目山'
                },
                {
                    value:80000,
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
                    value:60000,
                    name:'神龙川风景区'
                },
                {
                    value:100000,
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
                    value:20000,
                    name:'八百里风情岛'
                },
                {
                    value:140000,
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
    ],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart4 = echarts.init(document.getElementById('first_bus'));
chart4.setOption(option4);