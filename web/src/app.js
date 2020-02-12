import React from 'react';
import * as echarts from 'echarts';
import {Radio} from 'antd';
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
				<div>
					<Radio.Group defaultValue="a" buttonStyle="solid">
						<Radio.Button value="a">定点医院</Radio.Button>
						<Radio.Button value="b">2</Radio.Button>
						<Radio.Button value="c">3</Radio.Button>
						<Radio.Button value="d">4</Radio.Button>
					</Radio.Group>
				</div>
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
