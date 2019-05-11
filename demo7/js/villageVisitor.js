var option1 = {
    tooltip : {
        backgroundColor : '#19486e',
        borderColor : '#228f96',
        borderRadius : 10,
        borderWidth: 1,
        textStyle:{
            align:'center',
            fontSize:16
        },
        formatter: "{b} : {c}%"
    },
    series : [
        {
            type:'gauge',
            center : ['50%', '50%'],    // 默认全局居中
            radius : [0, '75%'],
            startAngle: 140,
            endAngle : -140,
            min: 0,                     // 最小值
            max: 100,                   // 最大值
            precision: 0,               // 小数精度，默认为0，无小数点
            splitNumber: 10,             // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color:[[0.2,"#2EC7C9"],[0.8,"#5AB1EF"],[1,"#D87A80"]],
                    width: 40
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 5,    // 每份split细分多少段
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#eee',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                    switch (v+''){
                        case '10': return '低';
                        case '50': return '中';
                        case '90': return '高';
                        default: return '';
                    }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize:16
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :40,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#eee',
                    width: 2,
                    type: 'solid'
                }
            },
            pointer : {
                length : '80%',
                width : 8,
                color : 'auto'
            },
            title : {
                show : true,
                offsetCenter: ['-65%', -10],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize : 20
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: ['-60%', 10],       // x, y，单位px
                formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontSize : 30
                }
            },
            data:[{value: 31, name: '乡村游客占比'}]
        }
    ],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart1 = echarts.init(document.getElementById('center_percent'));
chart1.setOption(option1);


var option2 = {
    color:[ '#B6A2DE', '#5AB1EF'],
    legend: {
        x : 'right',
        data:['乡村游客','景区游客'],
        textStyle:{
            color:"#fff",
            fontSize:"16"
        }
    },
    tooltip : {
        show: true,
        formatter: "{b} : {c} 人 ({d}%)"
    },
    calculable : false,
    series : [
        {
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
                {value:2397, name:'乡村游客'},
                {value:5187, name:'景区游客'}
            ]
        }
    ],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart2 = echarts.init(document.getElementById('right_percent'));
chart2.setOption(option2);


var option3 = {
    color:['#14936b', '#34b59e', '#3df5dd'],
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
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params,ticket,callback) {
            var res = params.name +' <br/>'+ params.data.name + ':' + params.data.value;
            setTimeout(function (){
                // 仅为了模拟异步回调
                callback(ticket, res);
            }, 1)
            return 'loading';
        }
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
        data : ["龙门秘境村落", "太湖源头村落", "忠孝文化村落", "耕织图村落", "红叶指南村村落", "大峡谷村", "白水涧村", "湍口温泉村落", "太阳公社村落", "天目山村落"]
    }],
    yAxis : [{
        type : 'value',
        splitLine :'false',//不显示分割线
        axisLabel:{
            formatter: '{value}人',
            textStyle:{
                color:"#FFFFFF",
                fontSize:16
            }
        },
    }],
    series : [
        {
            //name:'直接访问',
            type:'bar',
            barCategoryGap:'85%', //类目间柱形距离，默认为类目间距的20%，可设固定值
            stack: '总量',
            data:[
                {name: "大山村", value: 16},
                {name: "白沙村", value: 96},
                {name: "杨溪村", value: 51},
                {name: "凌口村", value: 166},
                {name: "指南村", value: 366},
                {name: "大峡谷村", value: 6},
                {name: "白水涧村", value: 83},
                {name: "湍口温泉村落", value: 448},
                {name: "双庙村", value: 73},
                {name: "天目山村落", value: 293}
            ]
        },
        {
            //name:'邮件营销',
            type:'bar',
            barCategoryGap:'85%', //类目间柱形距离，默认为类目间距的20%，可设固定值
            stack: '总量',
            data:[
                {name: "石门村", value: 30},
                {name: "", value: 0},
                {name: "新峰村", value: 142},
                {name: "观山村", value: 68},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "太阳村", value: 287},
                {name: "", value: 0},
            ]
        },
        {
            //name:'联盟广告',
            type:'bar',
            barCategoryGap:'85%', //类目间柱形距离，默认为类目间距的20%，可设固定值
            stack: '总量',
            data:[
                {name: "龙上村", value: 50},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "百园村", value: 135},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "", value: 0},
                {name: "上庄村", value: 87},
                {name: "", value: 0}
            ]
        }
    ],
    noDataLoadingOption:{
        effect: 'dynamicLine'
    }
};
var chart3 = echarts.init(document.getElementById('bot_percent'));
chart3.setOption(option3);
