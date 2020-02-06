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
			type: 'effectScatter',
			name: '\u786E\u8BCA\u4EBA\u6570-Scatter',
			coordinateSystem: 'geo',
			showEffectOn: 'render',
			rippleEffect: {
				show: true,
				brushType: 'stroke',
				scale: 2.5,
				period: 4
			},
			symbolSize: 12,
			data: [
				{
					name: '\u5E02\u5357\u533a',
					value: [
						120.38,
						36.07,
						2
					]
				},
				{
					name: '\u5E02\u5317\u533a',
					value: [
						120.38,
						36.08,
						4
					]
				},
				{
					name: '\u674E\u6CA7\u533A',
					value: [
						120.43,
						36.15,
						2
					]
				},
				{
					name: '\u5D02\u5C71\u533A',
					value: [
						120.47,
						36.1,
						2
					]
				},
				{
					name: '\u57CE\u9633\u533a',
					value: [
						120.37,
						36.3,
						1
					]
				},
				{
					name: '\u9EC4\u5C9B\u533A',
					value: [
						120.18,
						35.97,
						9
					]
				},
				{
					name: '\u5373\u58a8\u5e02',
					value: [
						120.45,
						36.38,
						4
					]
				},
				{
					name: '\u80F6\u5DDE\u5E02',
					value: [
						120.03,
						36.27,
						1
					]
				},
				{
					name: '\u5E73\u5EA6\u5E02',
					value: [
						119.95,
						36.78,
						3
					]
				},
				{
					name: '\u83B1\u897F\u5E02',
					value: [
						120.5,
						36.87,
						1
					]
				}
			],
			label: {
				show: false,
				position: 'top',
				margin: 8
			}
		},
		{
			type: 'heatmap',
			name: '\u786E\u8BCA\u4EBA\u6570-heatmap',
			coordinateSystem: 'geo',
			data: [
				{
					name: '\u5E02\u5357\u533a',
					value: [
						120.38,
						36.07,
						2
					]
				},
				{
					name: '\u5E02\u5317\u533a',
					value: [
						120.38,
						36.08,
						4
					]
				},
				{
					name: '\u674E\u6CA7\u533A',
					value: [
						120.43,
						36.15,
						2
					]
				},
				{
					name: '\u5D02\u5C71\u533A',
					value: [
						120.47,
						36.1,
						2
					]
				},
				{
					name: '\u57CE\u9633\u533a',
					value: [
						120.37,
						36.3,
						1
					]
				},
				{
					name: '\u9EC4\u5C9B\u533A',
					value: [
						120.18,
						35.97,
						9
					]
				},
				{
					name: '\u5373\u58a8\u5e02',
					value: [
						120.45,
						36.38,
						4
					]
				},
				{
					name: '\u80F6\u5DDE\u5E02',
					value: [
						120.03,
						36.27,
						1
					]
				},
				{
					name: '\u5E73\u5EA6\u5E02',
					value: [
						119.95,
						36.78,
						3
					]
				},
				{
					name: '\u83B1\u897F\u5E02',
					value: [
						120.5,
						36.87,
						1
					]
				}
			],
			pointSize: 20,
			blurSize: 20,
			label: {
				show: false,
				position: 'top',
				margin: 8
			},
			rippleEffect: {
				show: true,
				brushType: 'stroke',
				scale: 2.5,
				period: 4
			}
		}
	],
	legend: [
		{
			data: [
				'\u786E\u8BCA\u4EBA\u6570-Scatter',
				'\u786E\u8BCA\u4EBA\u6570-heatmap'
			],
			selected: {
				'\u786E\u8BCA\u4EBA\u6570-Scatter': true,
				'\u786E\u8BCA\u4EBA\u6570-heatmap': true
			},
			show: true,
			padding: 5,
			itemGap: 10,
			itemWidth: 25,
			itemHeight: 14
		}
	],
	tooltip: {
		show: true,
		trigger: 'item',
		triggerOn: 'mousemove|click',
		axisPointer: {
			type: 'line'
		},
		formatter(params) {
			return params.name + ' : ' + params.value[2];
		},
		textStyle: {
			fontSize: 14
		},
		borderWidth: 0
	},
	title: [
		{
			text: '\u9752\u5c9b\u5404\u533a\u5e02\u786e\u8bca\u4eba\u6570',
			padding: 5,
			itemGap: 10
		}
	],
	visualMap: {
		show: true,
		type: 'continuous',
		min: 0,
		max: 10,
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
			color: ' #154360 ',
			borderColor: '#111'
		},
		emphasis: {}
	}
};

