var option1 = {
    backgroundColor:'rgba(0,0,0,0)',
    color:["#72B6EA","#E5CF0D","#2EC7C9","#B6A2DE","#FF656D","#FFB980","#3665C6"],
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
        formatter: "{b}<br/> {c}张 ({d}%)"
    },
    legend: {
        orient : 'horizontal',
        x : 'right',
        textStyle:{
            color:"#FFFFFF",
            fontSize:16
        },
        data:["携程","美团","去哪儿网","景点官网","淘宝"]
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
                        fontSize : '30',
                        fontWeight : 'bold'
                    }
                }
            }
        },
        data : [
            {value:3652, name:"携程"},
            {value:2652, name:"美团"},
            {value:1036, name:"去哪儿网"},
            {value:458, name:"景点官网"},
            {value:968, name:"淘宝"}
        ]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('spot_tickit'));
chart1.setOption(option1);


var option2 ={
    backgroundColor:'rgba(0,0,0,0)',
    grid:{
        x:140,
        x2:50,
        y:30,
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
        formatter: "{b} {c}张"
    },
    xAxis : [{
        type : 'value',
        splitLine : 'false',// 不显示分割线
        axisLabel : {
            formatter: '{value}张',
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        boundaryGap : [ 0, 0.01 ]
    }],
    yAxis : [{
        type : 'category',
        splitLine : 'false',// 不显示分割线
        axisLabel : {
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        data : ['浙西大龙湾','太湖源','清凉峰','天目山','大明山','神龙川风景区']
    }],
    series : [{
        type : 'bar',
        barCategoryGap : '35%',
        itemStyle : {
            normal : {
                color : function(params) {
                    var colorList = [ '#49DDBD', '#159CCC' ];
                    return colorList[params.dataIndex % 2]
                }
            }
        },
        data :[1900, 2900, 4500, 6000, 7000, 9000]
    }],
    noDataLoadingOption : {
        effect : 'dynamicLine'
    }
};
var chart2 = echarts.init(document.getElementById('tickit_rank'));
chart2.setOption(option2);
