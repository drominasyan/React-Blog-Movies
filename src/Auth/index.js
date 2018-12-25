import React, {Component} from 'react';
import Login              from './Login';
import SignUp             from './SignUp';
import LoginMethods       from './LoginMethods';
import './auth.css';

class LoginSignUp extends Component {
	state = {
		haveAccount: false,
		logedIn: false,
	};
	
	haveAccount = () => {
		this.setState({
			haveAccount: !this.state.haveAccount,
		});
	};
	
	navigateProfile = () => {
		this.setState({
			logedIn: true,
		});
	};
	
	componentDidMount() {
	
	}
	
	render() {
		return (
			<>
				<div className={'LoginSignUpMain'}>
					<div className="mainForms">
						<div className="loginMethods ">
							<LoginMethods/>
						</div>
						<div className="LoginSignUp">
							{!this.state.haveAccount ?
								<Login navigateProfile={this.navigateProfile}
								       haveAccount={this.haveAccount}/> :
								<SignUp haveAccount={this.haveAccount}/>}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default LoginSignUp;
