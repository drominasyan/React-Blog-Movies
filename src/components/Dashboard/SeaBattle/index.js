import React, {Component} from 'react';
import MyBoard            from './MyBoard/MyBoard';
import './style.css';

class MainBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<MyBoard/>
						</div>
						<div className="col-lg-6">
							{/*<OpponentBoard/>*/}
						</div>
					</div>
				</div>


			</>
		);
	}
}

export default MainBoard;
