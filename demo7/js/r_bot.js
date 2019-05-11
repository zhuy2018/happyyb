// 右下  自动切换
var mySwiper_four = new Swiper('.scroll_four',{
    autoplay : 5000,//可选选项，自动滑动 ms
    loop: true,
    effect : 'fade',
    speed:1000, //切换  历时
    noSwiping:true,//不允许  滑动slide 配合class名一起使用才有用
});
//点击  切换 模块
$(".scroll_four .per_title").click(function(){
    mySwiper_four.swipeNext();
})
//鼠标划过  停止切换    //鼠标划出  开始自动切换
$(".scroll_four .swiper-slide").mouseover(function(){
    mySwiper_four.stopAutoplay();
}).mouseout(function(){
    mySwiper_four.startAutoplay();
})

var option9 ={
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
} ;
var chart9 = echarts.init($(".center_percent")[0]);
chart9.setOption(option9);
var chart99 = echarts.init($(".center_percent")[1]);
chart99.setOption(option9);


var option0 = {
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
var chart0 = echarts.init($(".right_percent")[0]);
chart0.setOption(option0);
var chart00 = echarts.init($(".right_percent")[1]);
chart00.setOption(option0);