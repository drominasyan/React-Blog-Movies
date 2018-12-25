import React, {Component} from 'react';
import axios              from 'axios';
import {withRouter}       from 'react-router-dom';
import Loader             from '../Loader/Loader';
import styled             from 'styled-components';

const Text = styled.h1`color: ${(props) => props.theme}`;

class SimilarMovies extends Component {

	constructor(props) {
		super(props);
		this.state = {
			movieId: this.props.id,
			status: '',
			list: [],
			loadedImagesCount: 0,
			preLoader: false,
			fetched: false,
		};
	}

	similarMovies = (url) => {
		axios.get(url).then((response) => {
			console.log(response.data.results.length);
			this.setState({
				status: response.status,
				list: response.data.results,
				// fetched: true,
			});
		});
	};

	componentDidUpdate(prevProps, prevState) {
		let images = [];
		if (this.state.list !== prevState.list) {
			// const node = document.createElement("DIV");
			// node.className = "hiddenImages";
			// console.log(this.state.list)
			this.state.list.map((item, index) => {
				images[index] = new Image();
				images[index].src = 'http://image.tmdb.org/t/p/w185/' +
					item.poster_path;
				// node.appendChild(images[index]);

				images[index].onload = () => {
					this.setState((state) => {
						return {
							loadedImagesCount: state.loadedImagesCount + 1,
						};
					});
				};
			});
		}

		if (this.state.loadedImagesCount !== prevState.loadedImagesCount &&
			this.state.loadedImagesCount === this.state.list.length) {
			this.setState({
				preLoader: true,
			});
		}
	}

	componentDidMount() {
		this.similarMovies(
			`https://api.themoviedb.org/3/movie/${this.state.movieId}/similar?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US&page=1`);
	}

	render() {

		return (
			<div className="container similarMovies">

				{this.state.fetched && this.state.list.length === 0 ? <Text
						theme={'white'}>There is no any similar movies</Text> :
					this.state.status === 200 && this.state.preLoader ?
						this.state.list.map((item, index) =>
							<img
								onClick={() => {
									this.props.history.push(
										`/movie/${item.id}`);
									return this.props.change(item.id);
								}
								}
								key={index}
								src={'http://image.tmdb.org/t/p/w185/' +
								item.poster_path}
								alt={item.title}
								className={'similarMoviesImages'}
							/>,
						)
						: <Loader/>
				}
			</div>
		);
	}
}

export default withRouter(SimilarMovies);