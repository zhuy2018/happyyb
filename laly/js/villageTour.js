var option1 ={
    backgroundColor : 'rgba(0,0,0,0)',
    grid : {
        x : 80,
        x2 : 80,
        y : 30,
        y2 : 30,
        borderWidth : 0
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
        trigger : 'item',
        formatter : "{b} {c}人"
    },
    xAxis : [ {
        type : 'value',
        splitLine : 'false',// 不显示分割线
        axisLabel : {
            formatter: '{value}人',
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        boundaryGap : [ 0, 0.01 ]
    } ],
    yAxis : [ {
        type : 'category',
        splitLine : 'false',// 不显示分割线
        axisLabel : {
            textStyle : {
                color : "#FFFFFF",
                fontSize:16
            }
        },
        data : ["大峡谷村", "大山村", "石门村", "龙上村", "杨溪村", "观山村"]
    } ],
    series : [ {
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
        data:[6, 16, 30, 50, 51, 68]
    } ],
    noDataLoadingOption : {
        effect : 'dynamicLine'
    }
} ;
var chart1 = echarts.init(document.getElementById('spot_tickit'));
chart1.setOption(option1);

var option2 = {
    color : ['#5AB1EF', '#B6A2DE', '#2EC7C9', '#D87A80'],
    tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
            align:'center',
            fontSize:16
        },
        trigger : 'item',
        formatter : "{b} : {c}人 ({d}%)"
    },
    legend : {
        x : 'right',
        textStyle:{
            color:"#FFFFFF",
            fontSize:16
        },
        data : [ '景区游客数', '乡村游客数', '外来游客数', '市民游客数' ]
    },
    series : [ {
        type : 'pie',
        radius : [ 0, 70 ],
        x : '20%',
        width : '40%',
        funnelAlign : 'right',
        itemStyle : {
            normal : {
                label : {
                    position : 'inner',
                    textStyle:{
                        color:"#FFFFFF",
                        fontSize:16
                    }
                },
                labelLine : {
                    show : false
                }
            }
        },
        data : [
            {value:679, name:'景区游客数'},
            {value:321, name:'乡村游客数'}
        ]
    }, {
        type : 'pie',
        radius : [ 100, 140 ],
        x : '60%',
        width : '35%',
        funnelAlign : 'left',
        itemStyle : {
            normal : {
                label : {
                    textStyle:{
                        fontSize:16
                    }
                },
            }
        },
        data : [
            {value:589, name:'市民游客数'},
            {value:1036, name:'外来游客数'}
        ]
    } ],
    noDataLoadingOption : {
        effect : 'dynamicLine'
    }
};
var chart2 = echarts.init(document.getElementById('tickit_rank'));
chart2.setOption(option2);
