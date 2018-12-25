import React, {Component}               from 'react';
import {Button, FormControl, FormGroup} from 'react-bootstrap';
import axios                            from 'axios';
import {withRouter}                     from 'react-router-dom';

class Login extends Component {
	state = {
		userName: '', password: '', message: '', loginSuccessFull: false,
	};

	handleChangeLogin = (e) => {
		this.setState({
			userName: e.target.value,
		});
	};

	handleChangePassword = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	login = (e) => {
		e.preventDefault();
		const state = this.state;
		const props = this.props;

		axios.post('http://10.25.40.103:3001/auth/login', {
			userName: state.userName, password: state.password,
		}).then((response) => {
			if (response.data.token) {
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('username', response.data.firstName);
				props.history.push(`/`);
			} else {
				this.setState({
					loginSuccessFull: true,
				});
			}
		});
	};

	render() {
		return (<>
				<h3>Login</h3>
				<form>
					{this.state.loginSuccessFull
						? <span
							className={'loginErrorMessage'}>{this.state.message}</span>
						: null}
					<FormGroup controlId="formBasicLogin" required>
						<FormControl
							type="text"
							value={this.state.userName}
							placeholder="Name"
							onChange={this.handleChangeLogin}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					<FormGroup controlId="formBasicPassword" required>
						<FormControl
							type="text"
							value={this.state.password}
							placeholder="Password"
							onChange={this.handleChangePassword}
						/>
						<FormControl.Feedback/>
					</FormGroup>
					<Button bsClass="vivaDefault" type="submit"
					        onClick={this.login}>Submit</Button>
					<span className="pull-right switcher"
					      onClick={this.props.haveAccount}>Create Account instead ?</span>
				</form>
			</>

		);
	}
}

export default withRouter(Login);



