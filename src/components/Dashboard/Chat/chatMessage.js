import React    from 'react';
import io       from 'socket.io-client';
import liveChat from '../../../images/speech-bubbles-comment-option.png';
import './chat.css';

class Chat extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			oldMessage: [],
			messages: [],
			currentMessage: '',
			visibleChat: true,
			token: localStorage.getItem('token'),
		};

		this.socket = io('http://10.25.40.103:3001');
		this.sendMessage = (event) => {
			event.preventDefault();
			this.socket.emit('chatMessage', this.state.currentMessage);
			this.setState({currentMessage: ''});
		};
		this.socket.on('chatMessage', function(data) {
			addMessage(data);
		});

		const addMessage = data => {
			this.setState({messages: [...this.state.messages, data]});
			// this.messagesEnd.scrollTop = this.messagesEnd.scrollHeight;
		};

	}

	visibleChat = () => {
		this.setState({
			visibleChat: !this.state.visibleChat,
		});
	};
	handleChange = ev => {
		this.setState({currentMessage: ev.target.value});
	};

	componentDidMount() {
		// const config = {
		// 	headers: {'authorization': 'Bearer ' + this.state.token},
		// };
		// axios.get('http://10.25.40.103:4000/profile', config,
		// ).then((response) => {
		// 	this.setState({
		// 		fetched: true,
		// 		oldMessage: response.data,
		// 	});
		// });
	}

	render() {
		return (
			<>
				{
					this.state.visibleChat ?
						<img src={liveChat} className={'chatUser'} alt=""
						     onClick={this.visibleChat}/> :
						<div className="chat">
							<div className="visibleChat">
								<h4 className="card-title">
									Write me please
									<i className="fa fa-angle-down closeChat"
									   onClick={this.visibleChat}> </i>
								</h4>
								<hr/>
								<div className="card-body">
									<div className="messages" ref={(el) => {
										this.messagesEnd = el;
									}}>
										{
											 this.state.oldMessage.map(item => console.log(item))
										}
										{this.state.messages.map(
											(item, index) => {
												return (
													<div
														key={index}>{item}</div>
												);
											})}
									</div>

								</div>
								<div className="chat-footer">
									<form>
										<input value={this.state.currentMessage}
										       type="text" placeholder="Message"
										       className="form-control ss"
										       onChange={this.handleChange}/>
										<button className="sendMessage"
										        onClick={this.sendMessage}/>
									</form>
								</div>
							</div>
						</div>
				}
			</>
		);
	}
}

export default Chat;