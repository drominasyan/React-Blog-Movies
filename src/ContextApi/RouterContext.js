import React, {Component} from 'react';
import {RouteContext}     from './index';

class RouterContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success: false,
			activeUser: '',
			updateUserData: this.updateUserData,
		};
	}

	updateUserData = (username) => {
		this.setState({
			activeUser: username,
			success: true,
		});
	};

	render() {
		return (
			<RouteContext.Provider value={'sss'}>
				{this.props.children}
			</RouteContext.Provider>
		);
	}
}

export default RouterContext;
