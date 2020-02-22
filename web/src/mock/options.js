import clinic from '../dataset/clinic-coord';

export const renderOption = {
	animation: true,
	animationThreshold: 2000,
	animationDuration: 1000,
	animationEasing: 'cubicOut',
	animationDelay: 0,
	animationDurationUpdate: 300,
	animationEasingUpdate: 'cubicOut',
	animationDelayUpdate: 0,
	color: [
		'#c23531',
		'#2f4554',
		'#61a0a8',
		'#d48265',
		'#749f83',
		'#ca8622',
		'#bda29a',
		'#6e7074',
		'#546570',
		'#c4ccd3',
		'#f05b72',
		'#ef5b9c',
		'#f47920',
		'#905a3d',
		'#fab27b',
		'#2a5caa',
		'#444693',
		'#726930',
		'#b2d235',
		'#6d8346',
		'#ac6767',
		'#1d953f',
		'#6950a1',
		'#918597'
	],
	series: [
		{
			name: '',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: clinic.map(([key, value]) => {
				return {
					name: key,
					value
				};
			}),
			symbolSize() {
				return 10;
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			label: {
				formatter: '{b}',
				position: 'right',
				show: false
			},
			itemStyle: {
				color: 'purple',
				shadowBlur: 10,
				shadowColor: '#333'
			},
			zlevel: 1
		}
	],
	// Legend: [
	// 	{
	// 		data: [
	// 			'\u786E\u8BCA\u4EBA\u6570-Scatter',
	// 			'\u786E\u8BCA\u4EBA\u6570-heatmap'
	// 		],
	// 		selected: {
	// 			'\u786E\u8BCA\u4EBA\u6570-Scatter': true,
	// 			'\u786E\u8BCA\u4EBA\u6570-heatmap': true
	// 		},
	// 		show: false,
	// 		padding: 5,
	// 		itemGap: 10,
	// 		itemWidth: 25,
	// 		itemHeight: 14
	// 	}
	// ],
	tooltip: {
		show: true,
		trigger: 'item',
		triggerOn: 'mousemove|click',
		axisPointer: {
			type: 'line'
		},
		formatter(params) {
			return params.name;
		},
		textStyle: {
			fontSize: 14
		},
		borderWidth: 0
	},
	title: [
		{
			text: '定点医院分布图',
			padding: 5,
			itemGap: 10
		}
	],
	visualMap: {
		show: false,
		type: 'continuous',
		min: 0,
		max: 30,
		inRange: {
			color: [
				'#50a3ba',
				'#eac763',
				'#d94e5d'
			]
		},
		calculable: true,
		inverse: false,
		splitNumber: 5,
		orient: 'vertical',
		showLabel: true,
		itemWidth: 20,
		itemHeight: 140,
		borderWidth: 0
	},
	geo: {
		map: '\u9752\u5c9b',
		roam: true,
		itemStyle: {
			color: ' #fff',
			borderColor: '#222222'
		},
		emphasis: {}
	}
};

