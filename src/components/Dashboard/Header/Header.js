import React            from 'react';
import Logo             from '../../../images/vivaro.png';
import {Link, Redirect} from 'react-router-dom';
import './header.css';

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');

function Header() {
	const logout = () => {
		localStorage.removeItem('token');
		return <Redirect to={'/'}/>;
	};

	return (
		<div className="menu">
			<div className="container">
				<div className="row">
					<div className="header">
						<div className="logo">
							<img src={Logo}/>
						</div>
						<div className={'menuCustom'}>
							<Link to={'/'} onClick={logout}>
								Logout
							</Link>
							<Link to={'/'}>
								Movies
							</Link>
						</div>
					</div>
				</div>
			</div>
			<span className={'userInfo'}>
				Hello {username}
			</span>

		</div>
	);
}

export default Header;
