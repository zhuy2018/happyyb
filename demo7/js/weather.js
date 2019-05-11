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
        data:['市民游客','外来游客']
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
        data:[
            {value:9520, name:'外来游客'},
            {value:3650, name:'市民游客'}
        ]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('people_age'));
chart1.setOption(option1);


var option2 = {
    color:["#448FFF","#2EC7C9"],
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
        data:["长途汽车","自驾"]
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
        data:[
            {value:8402, name:"长途汽车"},
            {value:3254, name:"自驾"}
        ]
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart2 = echarts.init(document.getElementById('consume'));
chart2.setOption(option2);


var option3 = {
    grid:{
        x:60,
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
        data : ['天目山','太湖源','浙西大峡谷','大明山','八百里风情岛','神龙川风景区','清凉峰','柳溪江','钱王陵']
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
        data : [65230,13026,14563,36521,32650,20136,65483,32105,13650],
        markPoint : {
            itemStyle: {
                normal:{
                    color: '#159CCC', //'#49DDBD'
                    label : {
                        textStyle:{
                            fontSize:16
                        }
                    }
                }
            },
            data : [{type : 'max', name: '最大值'}, {type : 'min', name: '最小值'}]
            /*(pjykData != undefined && pjykData != null && pjykData.length > 0) ?
                [{type : 'max', name: '最大值'}, {type : 'min', name: '最小值'}]:[]*/
        }
    }],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart3 = echarts.init(document.getElementById('source'));
chart3.setOption(option3);
