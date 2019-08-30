//创建和初始化地图函数：
function initMap(point) {
	createMap(point); //创建地图
	setMapEvent(); //设置地图事件
	addMapControl(); //向地图添加控件
	addMarker(); //向地图中添加marker
};
//创建地图函数：
function createMap(point) {
	var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
	// var point = new BMap.Point(116.403963,39.915119);//
	if (!point) {
		point = new BMap.Point(120.755506, 30.765592); // 定义一个中心点坐标
	}
	map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map; //将map变量存储在全局
};

//地图事件设置函数：
function setMapEvent() {
	map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
	map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard(); //启用键盘上下左右键移动地图
};
//地图控件添加函数：
function addMapControl() {
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE
	});
	map.addControl(ctrl_nav);
	//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({
		anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
		isOpen: 1
	});
	map.addControl(ctrl_ove);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({
		anchor: BMAP_ANCHOR_BOTTOM_LEFT
	});
	map.addControl(ctrl_sca);
};

var points = [{
	id: 1,
	name: '中国联通嘉兴禾城禾兴南路营业厅',
	address: '地址: 嘉兴市南湖区禾兴南路488号',
	tel: '电话: 0573-83702523',
	point: {
		x: 120.755506,
		y: 30.765592
	}
}, {
	id: 2,
	name: '地址: 嘉兴市秀洲区江南摩尔中央下沉广场',
	address: '地址: 嘉兴市秀洲区江南摩尔中央下沉广场',
	tel: '电话: 0573-83703999',
	point: {
		x: 120.715827,
		y: 30.769551
	}
}, {
	id: 3,
	name: '中国联通衢州柯城区长竿街营业厅',
	address: '地址: 衢州市柯城区长竿街22号',
	tel: '电话: 0570-8500892',
	point: {
		x: 118.880332,
		y: 28.962501
	}
}, {
	id: 4,
	name: '中国联通杭州体育场路营业厅',
	address: '地址: 杭州市下城区体育场路235号',
	tel: '电话: 0571-28988929',
	point: {
		x: 120.176016,
		y: 30.275298
	}
}, {
	id: 5,
	name: '中国联通杭州延安路营业厅（三楼）',
	address: '地址: 杭州市下城区延安路501号3楼',
	tel: '电话: 0571-28870875',
	point: {
		x: 120.169823,
		y: 30.271908
	}
}, {
	id: 6,
	name: '中国联通杭州太平门直街营业厅',
	address: '地址: 杭州市江干区太平门直街80号',
	tel: '电话: 0571-28988750',
	point: {
		x: 120.19986,
		y: 30.26536
	}
}, {
	id: 7,
	name: '中国联通杭州4号路营业厅',
	address: '地址: 杭州市江干区下沙4号大街时代山207号',
	tel: '电话: 0571-28980278',
	point: {
		x: 120.362744,
		y: 30.312673
	}
}, {
	id: 8,
	name: '中国联通杭州史家埭路营业厅',
	address: '地址: 杭州市余杭区临平镇史家埭路营业厅11号3楼',
	tel: '电话: 0571-26288822',
	point: {
		x: 120.311945,
		y: 30.428422
	}
}, {
	id: 9,
	name: '中国联通杭州春秋北路营业厅',
	address: '地址: 杭州市富阳市春秋北路226-1号',
	tel: '电话: 0571-23223142',
	point: {
		x: 119.950591,
		y: 30.062989
	}
}, {
	id: 10,
	name: '中国联通湖州北街营业厅',
	address: '地址: 湖州市吴兴区北街189-197号',
	tel: '电话: 0572-2700325',
	point: {
		x: 120.113068,
		y: 30.874791
	}
}, {
	id: 11,
	name: '中国联通湖州县前街营业厅',
	address: '地址: 湖州市长兴县雉城镇县前中街338号',
	tel: '电话: 0572-6616123',
	point: {
		x: 119.914895,
		y: 31.012313
	}
}, {
	id: 12,
	name: '中国联通湖州迎宾大道营业厅',
	address: '地址: 湖州市安吉县递铺镇迎宾大道229号',
	tel: '电话: 0572-5891516',
	point: {
		x: 119.687369,
		y: 30.635553
	}
}, {
	id: 13,
	name: '中国联通绍兴县笛扬路营业厅',
	address: '地址: 绍兴市绍兴县柯桥笛扬路789号',
	tel: '电话: 0575-84212065',
	point: {
		x: 120.490991,
		y: 30.081259
	}
}, {
	id: 14,
	name: '中国联通台州椒江云西路营业厅',
	address: '地址: 台州市椒江区云西路3号',
	tel: '电话: 0576-89895085',
	point: {
		x: 121.43947,
		y: 28.672245
	}
}, {
	id: 15,
	name: '中国联通台州路桥新安西街营业厅',
	address: '地址: 台州市路桥区新安西街463号',
	tel: '电话: 0576-82762199',
	point: {
		x: 121.372118,
		y: 28.583909
	}
}, {
	id: 16,
	name: '中国联通台州黄岩电大路营业厅',
	address: '地址: 台州市黄岩区桔乡大道220-228号',
	tel: '电话: 0576-84600009',
	point: {
		x: 121.284481,
		y: 28.65529
	}
}, {
	id: 17,
	name: '中国联通台州温岭万昌中路营业厅',
	address: '地址: 台州市温岭市万昌中路527-531号',
	tel: '电话: 0576-89686076',
	point: {
		x: 121.388962,
		y: 28.388138
	}
}, {
	id: 18,
	name: '中国联通舟山解放路营业厅',
	address: '地址: 舟山市定海区解放东路44号',
	tel: '电话: 0580-2956181',
	point: {
		x: 122.116133,
		y: 30.021462
	}
}, {
	id: 19,
	name: '中国联通金华义乌三挺路营业厅',
	address: '地址: 义乌市三挺路2号',
	tel: '电话: 0579-83921707',
	point: {
		x: 120.096987,
		y: 29.318644
	}
}, {
	id: 20,
	name: '中国联通金华婺州八一南街营业厅',
	address: '地址: 金华八一南街677号',
	tel: '电话: 0579-83928801',
	point: {
		x: 119.661696,
		y: 29.087075
	}
}, {
	id: 21,
	name: '中国联通金华永康九铃东路营业厅',
	address: '地址: 永康市九铃东路3284号',
	tel: '电话: 0579-87541158',
	point: {
		x: 120.047027,
		y: 28.900557
	}
}, {
	id: 22,
	name: '中国联通温州车站大道营业厅',
	address: '地址: 温州市鹿城区车站大道418号',
	tel: '电话: 0577-28826294',
	point: {
		x: 120.689079,
		y: 28.012824
	}
}, {
	id: 23,
	name: '中国联通温州龙湾永中永中东路营业厅',
	address: '地址: 温州市龙湾区永中永中东路130号',
	tel: '电话: 15168790699',
	point: {
		x: 120.835225,
		y: 27.923688
	}
}, {
	id: 24,
	name: '中国联通温州瓯海梧埏梧慈路营业厅',
	address: '地址: 温州市瓯海经济开发区梧慈路218-2号',
	tel: '电话: 0579-28826937',
	point: {
		x: 120.66776,
		y: 27.962768
	}
}, {
	id: 25,
	name: '中国联通宁波北仑新矸营业厅',
	address: '地址: 宁波市北仑区新矸镇明州路178号',
	tel: '电话: 0574-27688857',
	point: {
		x: 121.849076,
		y: 29.918039
	}
}, {
	id: 26,
	name: '中国联通宁波鄞州万达营业厅',
	address: '地址: 宁波市鄞州区四明中路978',
	tel: '电话: 0574-27825108',
	point: {
		x: 121.552895,
		y: 29.833635
	}
}, {
	id: 27,
	name: '中国联通宁波江东百丈营业厅',
	address: '地址: 宁波市江东区彩虹北路1号',
	tel: '电话: 0574-27823016',
	point: {
		x: 121.574895,
		y: 29.871006
	}
}, {
	id: 28,
	name: '中国联通宁波慈溪三北大街营业厅',
	address: '地址: 宁波慈溪市古塘街道三北西大街52-60号',
	tel: '电话: 0574-23661101',
	point: {
		x: 121.254789,
		y: 30.180202
	}
}, {
	id: 29,
	name: '中国联通宁波海曙天一营业厅',
	address: '地址: 海曙区车轿街77-79号',
	tel: '电话: 0574-27821736',
	point: {
		x: 121.563552,
		y: 29.875897
	}
}, {
	id: 30,
	name: '中国联通宁波余姚南雷路营业厅',
	address: '地址: 宁波余姚市南雷路226号',
	tel: '电话: 0574-22661000',
	point: {
		x: 121.163354,
		y: 30.046822
	}
}, {
	id: 31,
	name: '中国联通丽水莲都营业厅',
	address: '地址: 丽水市莲都区大洋路489号',
	tel: '电话: 0578-2088399',
	point: {
		x: 119.926688,
		y: 28.450299
	}
}];

// 写入地图名字，循环
function setMapName() {
	for (obj in points) {
		if (points[obj].name) {
			$('.mini_xxtyname').append('<div class="wayname" onclick="MapClick(this,' + obj + ')">' + points[obj].name + '</div>');
		}

	}
};
setMapName();

// 点击地图
function MapClick(obj,id) {
	var point = points[id];
	$("#mapName").html(point.name);
	$("#mapAddress").html(point.address);
	$("#mapTel").html(point.tel);

	$('.mini_yyt').show();
	var top = obj.offsetTop - $('.mini_xxtyname').scrollTop() - 50; // 地图设定为相对定位，那么先取当前点击对象的相对位置，先 减去当前的滚动距离 再 减去50 得到地图的相对位置
	$('.mini_yyt').css('top', top); // 控制地图位置

	// 处理点信息
	var p = new BMap.Point(point.point.x, point.point.y);
	initMap(p); //创建和初始化地图
}

//标注点数组
var markerArr = [{
	title: "禾兴南路营业厅",
	content: "中国联通嘉兴禾城禾兴南路营业厅",
	point: "120.755771|30.765592",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "嘉兴江南摩尔营业厅",
	content: "嘉兴江南摩尔营业厅",
	point: "120.717381|30.769675",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "衢州柯城长竿街营业厅",
	content: "衢州柯城长竿街营业厅",
	point: "118.880004|28.96292",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "中国联通杭州分公司",
	content: "中国联通杭州分公司",
	point: "120.176762|30.275236",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "杭州延安路营业厅",
	content: "杭州延安路营业厅",
	point: "120.169814|30.271908",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "杭州太平门直街营业厅",
	content: "杭州太平门直街营业厅",
	point: "120.19986|30.26536",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "杭州下沙4号路营业厅",
	content: "杭州下沙4号路营业厅",
	point: "120.362915|30.312689",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "临平史家埭路营业厅",
	content: "临平史家埭路营业厅",
	point: "120.31208|30.428438",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "杭州春秋北路营业厅",
	content: "杭州春秋北路营业厅",
	point: "119.950564|30.063114",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "湖州北街营业厅",
	content: "湖州北街营业厅",
	point: "120.113095|30.875023",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "湖州县前街营业厅",
	content: "湖州县前街营业厅",
	point: "119.915102|31.012483",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "湖州迎宾大道营业厅",
	content: "湖州迎宾大道营业厅",
	point: "119.687378|30.635662",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "绍兴县笛扬路营业厅",
	content: "绍兴县笛扬路营业厅",
	point: "120.491108|30.081478",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "台州椒江云西路营业厅",
	content: "台州椒江云西路营业厅",
	point: "121.439533|28.672213",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "台州路桥新安西街营业厅",
	content: "台州路桥新安西街营业厅",
	point: "121.372109|28.583877",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "台州黄岩电大路营业厅",
	content: "台州黄岩电大路营业厅",
	point: "121.284508|28.655417",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "台州温岭万昌中路营业厅",
	content: "台州温岭万昌中路营业厅",
	point: "121.388989|28.388202",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "舟山解放路营业厅",
	content: "舟山解放路营业厅",
	point: "122.116016|30.021525",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "金华三挺路营业厅",
	content: "金华三挺路营业厅",
	point: "120.097104|29.318597",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "金华婺州八一南街营业厅",
	content: "金华婺州八一南街营业厅",
	point: "119.661633|29.08717",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "金华永康九铃东路营业厅",
	content: "金华永康九铃东路营业厅",
	point: "120.046964|28.900573",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "温州车站大道营业厅",
	content: "温州车站大道营业厅",
	point: "120.689142|28.012904",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "温州龙湾永中永中东路营业厅",
	content: "温州龙湾永中永中东路营业厅",
	point: "120.835198|27.92372",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "温州瓯海梧埏梧慈路营业厅",
	content: "温州瓯海梧埏梧慈路营业厅",
	point: "120.667841|27.962927",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "宁波北仑新矸营业厅",
	content: "宁波北仑新矸营业厅",
	point: "121.850037|29.918211",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "宁波鄞州万达营业厅",
	content: "宁波鄞州万达营业厅",
	point: "121.552868|29.833588",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "宁波江东百丈营业厅",
	content: "宁波江东百丈营业厅",
	point: "121.57485|29.87099",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "宁波慈溪三北大街营业厅",
	content: "宁波慈溪三北大街营业厅",
	point: "121.254816|30.180249",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "宁波海曙天一营业厅",
	content: "宁波海曙天一营业厅",
	point: "121.563471|29.875944",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "宁波余姚南雷路营业厅",
	content: "宁波余姚南雷路营业厅",
	point: "121.163255|30.046822",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}, {
	title: "丽水莲都营业厅",
	content: "丽水莲都营业厅",
	point: "119.926571|28.450648",
	isOpen: 0,
	icon: {
		w: 21,
		h: 21,
		l: 0,
		t: 0,
		x: 6,
		lb: 5
	}
}];
//创建marker
function addMarker() {
	for (var i = 0; i < markerArr.length; i++) {
		var json = markerArr[i];
		var p0 = json.point.split("|")[0];
		var p1 = json.point.split("|")[1];
		var point = new BMap.Point(p0, p1);
		var iconImg = createIcon(json.icon);
		var marker = new BMap.Marker(point, {
			icon: iconImg
		});
		var iw = createInfoWindow(i);
		var label = new BMap.Label(json.title, {
			"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
		});
		marker.setLabel(label);
		map.addOverlay(marker);
		label.setStyle({
			borderColor: "#808080",
			color: "#333",
			cursor: "pointer"
		});
		(function() {
			var index = i;
			var _iw = createInfoWindow(i);
			var _marker = marker;
			_marker.addEventListener("click", function() {
				this.openInfoWindow(_iw);
			});
			_iw.addEventListener("open", function() {
				_marker.getLabel().hide();
			})
			_iw.addEventListener("close", function() {
				_marker.getLabel().show();
			})
			label.addEventListener("click", function() {
				_marker.openInfoWindow(_iw);
			})
			if (!!json.isOpen) {
				label.hide();
				_marker.openInfoWindow(_iw);
			}
		})()
	}
};
//创建InfoWindow
function createInfoWindow(i) {
	var json = markerArr[i];
	var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
	return iw;
};
//创建一个Icon
function createIcon(json) {
	var icon = new BMap.Icon("../img/ditu.png", new BMap.Size(json.w, json.h), {
		imageOffset: new BMap.Size(-json.l, -json.t),
		infoWindowOffset: new BMap.Size(json.lb + 5, 1),
		offset: new BMap.Size(json.x, json.h)
	})
	return icon;
};