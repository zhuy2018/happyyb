(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85ab456e"],{"1bc6":function(e,t,a){"use strict";var i=a("8b56"),s=a.n(i);s.a},2658:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail"},[a("div",{staticClass:"home_top"},[e._v("\n    "+e._s(e.title)+"\n  ")]),a("div",{staticClass:"content"},[a("p",[e._v("2016年，全省建设用地供应总量35.8万亩，同比增加4.1%，其中存量建设用地15.7万亩，占供地总量的43.9%。其中，工矿仓储用地7.7万亩，同比增加8.6%；商服及住宅用地8.8万亩，同比增加6.9%；基础设施用地及其他用地19.2万亩，同比增加1.3%。见下图。")]),a("div",{staticClass:"echartsWrap"},[a("div",{staticClass:"echartsItem"},[a("div",{staticClass:"eTitle"},[a("span",[e._v(e._s(e.echartsTitle[0]))])]),a("div",{staticStyle:{width:"100%"},attrs:{id:"zx"}})]),a("div",{staticClass:"echartsItem"},[a("div",{staticClass:"eTitle"},[a("span",[e._v(e._s(e.echartsTitle[1]))])]),a("div",{staticStyle:{width:"100%"},attrs:{id:"zz"}})])]),a("p",{staticClass:"hasMarTop"},[e._v("2016年，全省出让国有建设用地14.8万亩，土地出让合同价款3555.1亿元，同比分别增加10.2%、79.1%。其中，招拍挂方式出让土地13.9万亩，占土地出让总面积的93.9%；土地出让合同价款3489.5亿元，占土地出让合同总价款的98.2%。")]),a("p",{staticClass:"hasMarBtm"},[e._v("\n      2016年末，全省11个设区市监测城市综合地价4390元/平方米，同比增长5.1%，商业地价8362元/平方米，同比增长0.8%，住宅地价7350元/平方米，同比增长6.4%，工业地价829元/平方米，同比增长2.7%，总体呈现逐步上升、温和增长态势。见下表。\n    ")]),a("div",{staticClass:"content_tab"},[a("h4",[e._v("2015/2016年全省各设区市城市地价监测情况")]),a("div",{staticClass:"subUnit"},[e._v("单位：元/平方米")]),a("table",{attrs:{border:"0"}},[e._m(0),a("tbody",e._l(e.tabArr1,function(t){return a("tr",[a("td",[e._v(e._s(t.city))]),a("td",[e._v(e._s(t.age))]),a("td",[e._v(e._s(t.age1))]),a("td",[e._v(e._s(t.age2))]),a("td",[e._v(e._s(t.age3))]),a("td",[e._v(e._s(t.age4))]),a("td",[e._v(e._s(t.age5))]),a("td",[e._v(e._s(t.age6))]),a("td",[e._v(e._s(t.age7))])])}),0)])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[e._v("行政区")]),a("th",{attrs:{colspan:"2"}},[e._v("综合地价")]),a("th",{attrs:{colspan:"2"}},[e._v("商业地价")]),a("th",{attrs:{colspan:"2"}},[e._v("住宅地价")]),a("th",{attrs:{colspan:"2"}},[e._v("工业地价")])]),a("tr",[a("th",[e._v("2016")]),a("th",[e._v("2015")]),a("th",[e._v("2016")]),a("th",[e._v("2015")]),a("th",[e._v("2016")]),a("th",[e._v("2015")]),a("th",[e._v("2016")]),a("th",[e._v("2015")])])])}],o=(a("986a"),a("1e53"),a("24ce")),n={name:"jump",data:function(){return{title:this.$route.params.title,echartsTitle:["2011年以来全省土地供应出让情况（万亩）","2016年各市土地供应情况"],tabArr1:[{city:"杭州市",age:12997,age1:11838,age2:17366,age3:16546,age4:18828,age5:17061,age6:864,age7:825},{city:"宁波市",age:8582,age1:8032,age2:10346,age3:10337,age4:13808,age5:12669,age6:1514,age7:1448},{city:"温州市",age:5302,age1:4961,age2:10632,age3:10794,age4:10653,age5:9526,age6:1587,age7:1595},{city:"湖州市",age:1984,age1:1978,age2:4317,age3:4313,age4:2453,age5:2443,age6:454,age7:452},{city:"嘉兴市",age:1452,age1:1324,age2:3173,age3:3036,age4:1686,age5:1529,age6:610,age7:526},{city:"绍兴市",age:3578,age1:3563,age2:7630,age3:7645,age4:6346,age5:6302,age6:606,age7:604},{city:"金华市",age:3078,age1:3078,age2:9279,age3:9508,age4:6011,age5:5961,age6:482,age7:490},{city:"衢州市",age:2020,age1:2018,age2:6566,age3:6636,age4:4666,age5:4652,age6:343,age7:342},{city:"舟山市",age:4208,age1:3902,age2:7380,age3:7023,age4:6063,age5:5580,age6:598,age7:562},{city:"台州市",age:3750,age1:3744,age2:8363,age3:8468,age4:4600,age5:4598,age6:1592,age7:1558},{city:"丽水市",age:3908,age1:3863,age2:6935,age3:6949,age4:5734,age5:5658,age6:472,age7:477}]}},props:{index:String},methods:{detail:function(e){console.log(e)},back:function(){if(window.history.length<=1)return this.$router.push({path:"/"}),!1;this.$router.go(-1)},draw:function(e,t,a,i,s,n,l){var r=o.init(document.getElementById(e));r.setOption({title:{show:!1,padding:20,x:"center",textStyle:{fontSize:15,fontWeight:"bolder",color:"#000"},text:""},backgroundColor:"#f7f7f7",grid:{x:20,y:100,x2:40,y2:20,containLabel:!0},legend:{top:"12%",padding:[0,0,25,0],data:[{name:"工矿仓储用地",icon:"rect"},{name:"商服及住宅用地",icon:"rect"},{name:"基础设施用地等其他用地",icon:"rect"}]},yAxis:[{type:"category",show:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#363e83"}},splitLine:{show:!1,lineStyle:{color:"#363e83 "}},axisLabel:{textStyle:{color:"#000",fontWeight:"normal",fontSize:"12"}},data:["2011","2012","2013","2014","2015","2016"]},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0},splitLine:{show:!1}},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0},splitLine:{show:!1}}],xAxis:{type:"value",min:0,max:50,interval:10,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#363e83"}},splitLine:{show:!1,lineStyle:{color:"#363e83"}},axisLabel:{inside:!1,interval:0,textStyle:{color:"#000",fontWeight:"normal",fontSize:"12"}}},series:[{name:"工矿仓储用地",type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},itemStyle:{normal:{show:!0,color:i}},data:l},{name:"商服及住宅用地",yAxisIndex:1,type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},itemStyle:{normal:{show:!0,color:a}},data:n},{name:"基础设施用地等其他用地",yAxisIndex:2,type:"bar",stack:"总量",label:{normal:{show:!0,position:"insideRight"}},itemStyle:{normal:{show:!0,color:t}},data:s}]})},draw2:function(){var e=o.init(document.getElementById("zz"));e.setOption({title:{show:!1,padding:20,x:"center",textStyle:{fontSize:15,fontWeight:"bolder",color:"#000"},text:"2016年各市土地供应情况"},backgroundColor:"#f7f7f7",grid:{x:20,y:100,x2:20,y2:10,containLabel:!0},xAxis:{data:["杭州","宁波","温州","绍兴","舟山","嘉兴","台州","金华","湖州","丽水","衢州"],axisTick:{show:!1},axisLine:{show:!1,lineStyle:{fontSize:12,color:"#b4b5b7"}},axisLabel:{show:!0,textStyle:{color:"#333"},interval:-1,rotate:40}},yAxis:{name:"单位：万亩",axisTick:{show:!1},nameGap:40,nameTextStyle:{color:"#b4b5b7",fontSize:12},axisLine:{show:!1,lineStyle:{color:"#b4b5b7"}},axisLabel:{color:"#b4b5b7",fontSize:12,formatter:function(e,t){return e.toFixed(1)}},splitLine:{show:!1,lineStyle:{color:"#0177d4"}}},series:[{type:"bar",barWidth:13,itemStyle:{normal:{barBorderRadius:[10,10,10,10],color:"#21C392",label:{show:!0,position:"top",textStyle:{color:"black",fontSize:16}}}},data:[5.9,5.3,4,2.5,1.1,5.3,3,3,3.1,1.4,1.2]}]})}},mounted:function(){var e=[14.4,11.4,13,8.8,7.1,7.7],t=[13,11.2,16.5,11.4,8.2,8.8],a=[14.3,20.4,16.3,22,19,19.2];this.draw("zx","#1B7E61","#21C392","#09638E",e,t,a),this.draw2()},created:function(){},directives:{},components:{}},l=n,r=(a("1bc6"),a("6691")),g=Object(r["a"])(l,i,s,!1,null,"63e80966",null);t["default"]=g.exports},"8b56":function(e,t,a){}}]);
//# sourceMappingURL=chunk-85ab456e.2fa7274f.js.map