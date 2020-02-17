import React from 'react';
import * as echarts from 'echarts';
import {renderOption} from './mock/options';
import mapLayer from './geojson/qingdao';

class App extends React.Component {
	constructor(props) {
		super(props);
		echarts.registerMap('青岛', mapLayer);
	}

	componentDidMount() {
		const charts = echarts.init(document.querySelector('#main'), 'white', {renderer: 'canvas'});
		charts.setOption(renderOption);
	}

	render() {
		return (
			<section>
				<div
					id="main"
					style={{
						width: 900,
						height: 500
					}}
				/>
			</section>
		);
	}
}

export default App;
