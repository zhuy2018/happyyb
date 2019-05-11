var option1 = {
    color:["#2EC7C9","#B6A2DE"],
    tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
            align:'center',
            fontSize:16
        },
        trigger: 'item',
        formatter: "{b} <br/> {c}人 ({d}%)"
    },
    legend: {
        x : 'right',
        textStyle:{
            color:"#FFFFFF",
            fontSize:16
        },
        data:['其他游客','首站乡村游游客']
    },
    series : [{
        type:'pie',
        radius : '60%',
        center: ['50%', '60%'],
        itemStyle : {
            normal : {
                label : {
                    textStyle:{
                        fontSize:16
                    }
                },
            }
        },
        data:[{value:139130, name:'首站乡村游游客'},{value:199193, name:'其他游客'}]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('left_percent'));
chart1.setOption(option1);


var option2 = {
    grid:{
        x:75,
        x2:0,
        y:50,
        y2:30,
        borderWidth:0
    },
    tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
            align:'center',
            fontSize:16
        },
        trigger: 'item',
        formatter: "{b} {c}人"
    },
    xAxis : [{
        type : 'category',
        splitLine :'false',//不显示分割线
        axisLabel:{
            textStyle:{
                color:"#FFFFFF",
                fontSize:16
            }
        },
        boundaryGap : [0, 0.01],
        data : ["杨溪村", "观山村", "凌口村", "白沙村", "双庙村", "大峡谷村", "大山村", "石门村", "天目山村落", "新峰村", "湍口温泉村落", "指南村", "龙上村", "白水涧村", "百园村", "上庄村", "太阳村"]
    }],
    yAxis : [{
        type : 'value',
        axisLabel:{
            formatter: '{value}人',
            textStyle:{
                color:"#FFFFFF",
                fontSize:16
            }
        },
        splitLine :'false'
    }],
    series : [{
        type:'bar',
        barCategoryGap:'70%', //类目间柱形距离，默认为类目间距的20%，可设固定值
        itemStyle: {
            normal:{
                color: function(params) {
                    var colorList = ['#159CCC','#49DDBD'];
                    return colorList[params.dataIndex%2]
                }
            }
        },
        data : [10555, 15354, 6567, 1349, 1565, 925, 60, 244, 7144, 813, 5722, 4386, 241, 837, 4068, 1637, 77663],
        markPoint : {
            itemStyle: {
                normal:{
                    color: '#159CCC',
                    label : {
                        textStyle:{
                            fontSize:16
                        }
                    }
                }
            },
            data :[{type : 'max', name: '最大值'}, {type : 'min', name: '最小值'}]
            /*(rightData != undefined && rightData != null && rightData.length > 0) ?
                [{type : 'max', name: '最大值'}, {type : 'min', name: '最小值'}]:[]*/
        }
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart2 = echarts.init(document.getElementById('right_percent'));
chart2.setOption(option2);
