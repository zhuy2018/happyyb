var option1 = {
    backgroundColor:'rgba(0,0,0,0.2)',
    color:['#2EC7C9', '#B6A2DE'],
    legend: {
        data:['市民游客', '外来游客'],
        textStyle:{
            color:"#fff",
            fontSize : 16
        },
        x:'right'
    },
    tooltip : {
        show : true,
        formatter : "{a} <br/>{b} : {c}人",
    },
    grid:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)'


    },
    calculable : false,
    xAxis : [
        {
            type : 'category',
            data :["太阳公社村落", "耕织图村落", "湍口温泉村落", "天目山村落", "忠孝文化村落", "红叶指南村村落", "龙门秘境村落", "白水涧村", "太湖源头村落", "大峡谷村"],
            axisLabel:{
                textStyle:{
                    color:"#fff",
                    fontSize : 16
                }
            },
            axisLine:{
                lineStyle:{
                    color:"#0BA4C0"
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
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
                    color:"#0BA4C0"
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
    series : [
        {
            name:'市民游客',
            type:'bar',
            stack: '总量',
            barWidth : 30,//柱图宽度
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:["135790", "91294", "27718", "25022", "22464", "12040", "11192", "6604", "4985", "785"]
        },
        {
            name:'外来游客',
            type:'bar',
            stack: '总量',
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[0, 0, 0, 0]
                }
            },
            data:["414254", "179417", "57338", "67546", "108066", "82157", "15331", "17828", "33880", "13855"]
        }
    ],
    noDataLoadingOption : {
        effect : 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('right_percent'));
chart1.setOption(option1);
