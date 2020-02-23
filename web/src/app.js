import React from 'react';
import * as echarts from 'echarts';
import {getOption} from './mock/options';
import mapLayer from './geojson/qingdao';

class App extends React.Component {
	constructor(props) {
		super(props);
		echarts.registerMap('青岛', mapLayer);
	}

	state = {
		mapType: 'clinic'
	}

	componentDidMount() {
		const {mapType} = this.state;
		this.charts = echarts.init(document.querySelector('#main'), 'white', {renderer: 'canvas'});
		this.charts.setOption(getOption(mapType));
	}

	onChangeType = e => {
		const type = e.currentTarget.value;
		this.setState({mapType: type}, () => {
			this.charts.setOption(getOption(type), {notMerge: true});
			this.charts.resize();
		});
	}

	render() {
		const {mapType} = this.state;

		return (
			<section>
				<div
					id="main"
					style={{
						width: '100vw',
						height: '100vh'
					}}
				/>
				<div
					style={{
						position: 'fixed',
						right: 100,
						bottom: 100
					}}
				>
					<div>
						<label style={{marginRight: 5}}>
							<input
								checked={mapType === 'clinic'}
								value="clinic"
								type="radio"
								className="nes-radio"
								name="export-type"
								onChange={this.onChangeType}
							/>
							<span>Clinic</span>
						</label>
					</div>
					<div>
						<label style={{marginRight: 5}}>
							<input
								checked={mapType === 'cured'}
								value="cured"
								type="radio"
								className="nes-radio"
								name="export-type"
								onChange={this.onChangeType}
							/>
							<span>Cured</span>
						</label>
					</div>
					<div>
						<label style={{marginRight: 5}}>
							<input
								checked={mapType === 'diag'}
								value="diag"
								type="radio"
								className="nes-radio"
								name="export-type"
								onChange={this.onChangeType}
							/>
							<span>Diag</span>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

export default App;
