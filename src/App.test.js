import React             from 'react';
import ReactDOM          from 'react-dom';
import App               from './App';
import LoginMethods      from './Auth/LoginMethods';
import Enzyme, {shallow} from 'enzyme';
import Adapter           from 'enzyme-adapter-react-16';
import {test}            from 'npm/lib/utils/module-name';

Enzyme.configure({adapter: new Adapter()});

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App/>, div);
});

describe('Login Form', () => {
	it('SignUp inputs counts', () => {
		const wrapper = shallow(<LoginMethods/>);
		expect(wrapper.find('button').length).toEqual(4);
	});
});
