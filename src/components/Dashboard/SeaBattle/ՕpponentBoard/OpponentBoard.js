import React, {Component} from 'react';

class OpponentBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boardLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
		};
	}

	render() {
		return (
			<table className={'boardTable'}>
				<tbody>
				{this.state.boardLetters.map((itemL, indexL) => {
					return <tr key={indexL}>
						{this.state.boardLetters.map((item, index) => {
							if (indexL < 9) {
								return <td
									onClick={this.valueGet}>{itemL} {index +
								1} </td>;
							} else {
								return <>
									<td onClick={this.valueGet}>
										{itemL} {index + 1}
									</td>
								</>;
							}
						})}</tr>;
				})}
				</tbody>
			</table>
		);
	}
}

export default OpponentBoard;
