/*echarts.util.mapData.params.params.HZ= {
       getGeoJson: function (callback) {
           $.getJSON('../js/plugins/hz.json', function (data) {
               // 压缩后的地图数据必须使用 decode 函数转换
               callback(echarts.util.mapData.params.decode(data));
           });
       }
   }*/
var cityMap = {
	"杭州市": hz,
    "宁波市": nb,
    "温州市": wz,
    "嘉兴市": jx,
    "湖州市": hzs,
    "绍兴市": sx,
    "金华市": jh,
    "衢州市": qz,
    "舟山市": zs,
    "台州市": tz,
    "丽水市": ls
};
/*var cityMap = {
    "杭州市": "330100",
    "宁波市": "330200",
    "温州市": "330300",
    "嘉兴市": "330400",
    "湖州市": "330500",
    "绍兴市": "330600",
    "金华市": "330700",
    "衢州市": "330800",
    "舟山市": "330900",
    "台州市": "331000",
    "丽水市": "331100"
};*/
var mapchart = echarts.init(document.getElementById('ditu'));
var mapdata = [];

//初始化绘制全国地图配置
var consumeMap = {
	timeline:{
        data:["1","2","3","4","5","6","7","8","9","10","11","12"],
        lineStyle:{
            color:'#0637f7',
            type:'solid'
        },
        checkpointStyle:{
            color : '#4DBFE8'
        },
        label : {
            show: true,
            interval: 'auto',
            rotate: 0,
            textStyle: {
                color: '#0637f7',
                fontSize:"14"
            },
            formatter : function(s) {
                return s+"月";
            }
        },
        controlStyle:{
            itemSize: 15,
            itemGap: 5,
            normal : {
//              color : '#0637f7'
            },
            emphasis : {
//              color : '#0637f7'
            }
        },
        axisType: 'category',
        x:'35px',
        width:'90%',
        autoPlay : false,
        playInterval : 3000
    },
    options: [
        {
            color:'#fff',
            //tooltip : {'trigger':'item'},
            tooltip : {
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c} 条'
            },
            dataRange: {
                min: 100,
                max: 20000,
                text:['高','低'],
                realtime: false,
                calculable : true,
                color: ['#ff0000','#b6edf0'],
                x:520,
                y:320,
                textStyle:{
                    color:"#0637f7",
                    fontSize:14
                }
            },
            /*series : [
                {
                    name:'短信发送量',
                    type:'map',
                    mapType: '浙江',
                    mapLocation:{height:'500px',x:0,y:0},  //地图的大小
                    dataRangeHoverLink:false,
                    //hoverable:false,  //取消选中高亮状态
            		selectedMode : 'single',
                    itemStyle:{
                        normal:{
                            label:{
                                show:true,
                                textStyle: {
                                    fontSize:14,
                                    color: '#fff'
                                }
                            },
                            borderColor:'#136db2', //每一个块的边框颜色
                            borderWidth:3
                        },
                        emphasis: {                 // 也是选中样式
                            borderColor:'#fff',
                            borderWidth:3,
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize:14,
                                    color: '#000'
                                }
                            }
                        }
                    },
                    data: [
                        {name: '杭州市',value: 13000},
                        {name: '温州市',value: 16000},
                        {name: '宁波市',value: 8000},
                        {name: '舟山市',value: 12000},
                        {name: '台州市',value: 11000},
                        {name: '金华市',value: 6000},
                        {name: '衢州市',value: 10000},
                        {name: '绍兴市',value: 9000},
                        {name: '嘉兴市',value: 15000},
                        {name: '丽水市',value: 13000},
                        {name: '湖州市',value: 5000}
                    ]
                }
            ]*/
        },
        {
            series: [{
            	dataRangeHoverLink: false,
				//hoverable:false,  //取消选中高亮状态
				selectedMode: 'single',
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 16600},
                    {name: '宁波市', value: 17800},
                    {name: '舟山市', value: 12200},
                    {name: '台州市', value: 13100},
                    {name: '金华市', value: 9600},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 20000},
                    {name: '丽水市', value: 10300},
                    {name: '湖州市', value: 9500}
                ]
            }]
        },
        {
            series: [{
            	dataRangeHoverLink: false,
				//hoverable:false,  //取消选中高亮状态
				selectedMode: 'single',
                data: [
                    {name: '杭州市', value: 13300},
                    {name: '温州市', value: 10600},
                    {name: '宁波市', value: 11800},
                    {name: '舟山市', value: 15200},
                    {name: '台州市', value: 10100},
                    {name: '金华市', value: 3200},
                    {name: '衢州市', value: 6000},
                    {name: '绍兴市', value: 14900},
                    {name: '嘉兴市', value: 13000},
                    {name: '丽水市', value: 17300},
                    {name: '湖州市', value: 10500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 13600},
                    {name: '宁波市', value: 9800},
                    {name: '舟山市', value: 13200},
                    {name: '台州市', value: 9100},
                    {name: '金华市', value: 10200},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 10000},
                    {name: '丽水市', value: 19300},
                    {name: '湖州市', value: 12500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 16600},
                    {name: '宁波市', value: 17800},
                    {name: '舟山市', value: 12200},
                    {name: '台州市', value: 13100},
                    {name: '金华市', value: 9600},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 20000},
                    {name: '丽水市', value: 10300},
                    {name: '湖州市', value: 9500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 13300},
                    {name: '温州市', value: 10600},
                    {name: '宁波市', value: 11800},
                    {name: '舟山市', value: 15200},
                    {name: '台州市', value: 10100},
                    {name: '金华市', value: 3200},
                    {name: '衢州市', value: 6000},
                    {name: '绍兴市', value: 14900},
                    {name: '嘉兴市', value: 13000},
                    {name: '丽水市', value: 17300},
                    {name: '湖州市', value: 10500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 13600},
                    {name: '宁波市', value: 9800},
                    {name: '舟山市', value: 13200},
                    {name: '台州市', value: 9100},
                    {name: '金华市', value: 10200},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 10000},
                    {name: '丽水市', value: 19300},
                    {name: '湖州市', value: 12500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 16600},
                    {name: '宁波市', value: 17800},
                    {name: '舟山市', value: 12200},
                    {name: '台州市', value: 13100},
                    {name: '金华市', value: 9600},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 20000},
                    {name: '丽水市', value: 10300},
                    {name: '湖州市', value: 9500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 13300},
                    {name: '温州市', value: 10600},
                    {name: '宁波市', value: 11800},
                    {name: '舟山市', value: 15200},
                    {name: '台州市', value: 10100},
                    {name: '金华市', value: 3200},
                    {name: '衢州市', value: 6000},
                    {name: '绍兴市', value: 14900},
                    {name: '嘉兴市', value: 13000},
                    {name: '丽水市', value: 17300},
                    {name: '湖州市', value: 10500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 13600},
                    {name: '宁波市', value: 9800},
                    {name: '舟山市', value: 13200},
                    {name: '台州市', value: 9100},
                    {name: '金华市', value: 10200},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 10000},
                    {name: '丽水市', value: 19300},
                    {name: '湖州市', value: 12500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 10300},
                    {name: '温州市', value: 16600},
                    {name: '宁波市', value: 17800},
                    {name: '舟山市', value: 12200},
                    {name: '台州市', value: 13100},
                    {name: '金华市', value: 9600},
                    {name: '衢州市', value: 10000},
                    {name: '绍兴市', value: 10900},
                    {name: '嘉兴市', value: 20000},
                    {name: '丽水市', value: 10300},
                    {name: '湖州市', value: 9500}
                ]
            }]
        },
        {
            series: [{
                data: [
                    {name: '杭州市', value: 13300},
                    {name: '温州市', value: 10600},
                    {name: '宁波市', value: 11800},
                    {name: '舟山市', value: 15200},
                    {name: '台州市', value: 10100},
                    {name: '金华市', value: 3200},
                    {name: '衢州市', value: 6000},
                    {name: '绍兴市', value: 14900},
                    {name: '嘉兴市', value: 13000},
                    {name: '丽水市', value: 17300},
                    {name: '湖州市', value: 10500}
                ]
            }]
        }
    ]
};


function renderMap(map,data){
	console.log("renderMap:"+map);
	consumeMap.options[0].series = [
		{
				name: '短信发送量',
				type: 'map',
				mapType: map,
				mapLocation: {
					height: '500px',
					x: 0,
					y: 0
				}, //地图的大小
				dataRangeHoverLink: false,
//				hoverable:false,  //取消选中高亮状态
				selectedMode: 'single',
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								fontSize: 14,
								color: '#000'
							}
						},
						borderColor: '#136db2', //每一个块的边框颜色
						borderWidth: 1
					},
					emphasis: { // 也是选中样式
						borderColor: '#136db2',
//						color:'red',
						borderWidth: 1,
						label: {
							show: true,
							textStyle: {
								fontSize: 14,
								color: '#000'
							}
						}
					}
				},
                data: [
                    {name: '杭州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '温州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '宁波市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '舟山市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '台州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '金华市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '衢州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		           	{name: '绍兴市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		         	{name: '嘉兴市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '丽水市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
		            {name: '湖州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
                	//杭州
			        {name: '临安市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '淳安县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '建德市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '桐庐县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '富阳市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '余杭区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '拱墅区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '下城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '江干区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '西湖区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '上城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '滨江区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '萧山区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //宁波
			        {name: '慈溪市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '余姚市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '江北区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '镇海区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '海曙区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '江东区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '北仑区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '鄞州区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '奉化市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '宁海县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '象山县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //温州
			        {name: '永嘉县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '乐清市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '鹿城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '瓯海区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '龙湾区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '洞头县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '瑞安市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '文成县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '泰顺县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '平阳县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '苍南县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //嘉兴市
			        {name: '嘉善县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '秀洲区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '南湖区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '平湖市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '桐乡市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '海宁市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '海盐县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //嘉兴市
			        {name: '嘉善县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '秀洲区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '南湖区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '平湖市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '桐乡市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '海宁市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '海盐县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //湖州市
			        {name: '长兴县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '安吉县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '吴兴区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '南浔区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '德清县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //绍兴市
			        {name: '绍兴县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '越城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '上虞市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '诸暨市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '嵊州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '新昌县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //金华市
			        {name: '兰溪市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '浦江县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '义乌市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '金东区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '东阳市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '磐安县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '永康市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '武义县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '婺城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //衢州市
			        {name: '开化县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '常山县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '柯城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '衢江区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '龙游县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '江山市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //舟山市
			        {name: '嵊泗县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '岱山县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '定海区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '普陀区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //台州市
			        {name: '天台县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '三门县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '临海市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '仙居县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '黄岩区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '路桥区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '椒江区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '温岭市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '玉环县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        //丽水市
			        {name: '遂昌县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '松阳县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '莲都区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '缙云县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '青田县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '云和县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '龙泉市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '景宁畲族自治县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
			        {name: '庆元县',value: Math.round(Math.ceil(Math.random()*20)*1000)}]
        }
    ];
    for(var i=1; i < 12; i++){
    	consumeMap.options[i].series= [{
    		name: '短信发送量',
				type: 'map',
				mapType: map,
				mapLocation: {
					height: '500px',
					x: 0,
					y: 0
				}, //地图的大小
				dataRangeHoverLink: false,
				//hoverable:false,  //取消选中高亮状态
				selectedMode: 'single',
			itemStyle: {
				normal: {
					label: {
						show: true,
						textStyle: {
							fontSize: 14,
							color: '#000'
						}
					},
					borderColor: '#136db2', //每一个块的边框颜色
					borderWidth: 1
				},
				emphasis: { // 也是选中样式
					borderColor: '#136db2',
					borderWidth: 1,
//					color:'#fff',
					label: {
						show: true,
						textStyle: {
							fontSize: 14,
							color: '#000'
						}
					}
				}
			},
			data:[
			{name: '杭州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '温州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '宁波市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '舟山市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '台州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '金华市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '衢州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
           	{name: '绍兴市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
         	{name: '嘉兴市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '丽水市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
            {name: '湖州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //杭州
	        {name: '临安市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '淳安县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '建德市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '桐庐县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '富阳市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '余杭区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '拱墅区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '下城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '江干区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '西湖区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '上城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '滨江区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '萧山区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //宁波
	        {name: '慈溪市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '余姚市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '江北区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '镇海区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '海曙区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '江东区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '北仑区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '鄞州区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '奉化市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '宁海县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '象山县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //温州
	        {name: '永嘉县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '乐清市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '鹿城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '瓯海区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '龙湾区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '洞头县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '瑞安市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '文成县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '泰顺县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '平阳县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '苍南县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //嘉兴市
	        {name: '嘉善县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '秀洲区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '南湖区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '平湖市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '桐乡市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '海宁市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '海盐县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //嘉兴市
	        {name: '嘉善县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '秀洲区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '南湖区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '平湖市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '桐乡市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '海宁市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '海盐县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //湖州市
	        {name: '长兴县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '安吉县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '吴兴区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '南浔区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '德清县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //绍兴市
	        {name: '绍兴县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '越城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '上虞市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '诸暨市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '嵊州市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '新昌县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //金华市
	        {name: '兰溪市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '浦江县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '义乌市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '金东区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '东阳市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '磐安县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '永康市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '武义县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '婺城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //衢州市
	        {name: '开化县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '常山县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '柯城区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '衢江区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '龙游县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '江山市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //舟山市
	        {name: '嵊泗县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '岱山县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '定海区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '普陀区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //台州市
	        {name: '天台县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '三门县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '临海市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '仙居县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '黄岩区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '路桥区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '椒江区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '温岭市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '玉环县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        //丽水市
	        {name: '遂昌县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '松阳县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '莲都区',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '缙云县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '青田县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '云和县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '龙泉市',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '景宁畲族自治县',value: Math.round(Math.ceil(Math.random()*20)*1000)},
	        {name: '庆元县',value: Math.round(Math.ceil(Math.random()*20)*1000)}]
        }];
	};
    //渲染地图
    mapchart.setOption(consumeMap);
}

//绘制地图
function setInitMap(){
	d = [];
	for( var i=0;i<zhejiang.features.length;i++ ){
		d.push({
			name:zhejiang.features[i].properties.name
		})
	}
	mapdata = d;
	//注册地图
	echarts.registerMap('zhejiang', zhejiang);
	//绘制地图
	renderMap('zhejiang',d);
}
setInitMap();
/*$.getJSON('../map/province/zhejiang.json', function(data){
	d = [];
	for( var i=0;i<data.features.length;i++ ){
		d.push({
			name:data.features[i].properties.name
		})
	}
	mapdata = d;
	//注册地图
	echarts.registerMap('zhejiang', data);
	//绘制地图
	renderMap('zhejiang',d);
});*/


//地图点击事件
mapchart.on('click', function (params) {
	console.log("click:"+params.name +";;;"+ cityMap[params.name]);
	if( params.name in cityMap ){
		console.log("click -----------------         ");
		//显示县级地图
		var data = cityMap[params.name];
		echarts.registerMap(params.name, data);
		var d = [];
		for( var i=0;i<data.features.length;i++ ){
			d.push({name:data.features[i].properties.name});
		}
		renderMap(params.name,d);
		
		/*$.getJSON('../map/city/'+ cityMap[params.name] +'.json', function(data){
			echarts.registerMap( params.name, data);
			var d = [];
			for( var i=0;i<data.features.length;i++ ){
				d.push({
					name:data.features[i].properties.name
				})
			}
			renderMap(params.name,d);
		});*/
	}else{
		console.log("click ----  zhejiang");
		renderMap('zhejiang',mapdata);
	}
});