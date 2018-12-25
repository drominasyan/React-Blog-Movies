import React, {Component}                         from 'react';
import LoginSignUp                                from '../Auth/index';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import {PageNotFound}                             from '../components/Dashboard/NoPage/PageNotFound';
import Index                                      from '../components/Dashboard/index';

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUser: '',
		};
	}

	render() {
		return (<Router>
				<>
					<PrivateRoute token={localStorage.getItem('token')}
					              path="/"/>
					<Route exact path="/auth" component={LoginSignUp}/>
					<Route path="/pageNotFound" component={PageNotFound}/>
				</>
			</Router>);
	}
}

const PrivateRoute = ({component: Component, ...rest}) => {
	return <Route {...rest} render={(props) => {
		return localStorage.getItem('token') == null
			? <Redirect to={'/auth'}/>
			: <Index {...props}/>;
	}}/>;
};

export default Routes;