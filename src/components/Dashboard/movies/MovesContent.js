import React, {Component} from 'react';
import axios from "axios";
import Loader from "../Loader/Loader";


const MoviesContentChild = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="MovieContent">
                    <div className="col-lg-3">
                        <div className="rounded">
                            <img
                                src={'http://image.tmdb.org/t/p/w185/' + props.details.poster_path}
                                alt="alt"
                                className="img-responsive"/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="info">
                            <div className="col-lg-12 singleInfo">
                                <h1>{props.details.title} <span
                                    className="date">({props.details.release_date})</span></h1>
                                <hr/>
                                <div className={"overview"}>
                                    <h4>Overview</h4>{props.details.overview}
                                </div>
                            </div>

                            <div className={"vote_average col-lg-3"}><h4>Vote Everage </h4><span
                                className="circle">{props.details.vote_average}</span></div>
                            <div className={"vote_average col-lg-3"}><h4>Vote Counts</h4><span
                                className="circle">{props.details.vote_count}</span></div>
                            <div className={"popularity col-lg-3"}><h4>Popularity </h4><span
                                className="circle">{props.details.popularity}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


class MoviesContent extends Component {
    request = (url) => {
        axios.get(url).then((response) => {
            setTimeout(() => {
                this.setState({
                    fetched: true,
                    details: response.data
                });
            }, 200);


        });
    };

    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.id,
            details: {},
            fetched: false,
            messages: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.id !== prevProps.id) {
            this.request(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US`);
        }
        return false
    }

    componentDidMount() {
        this.request(`https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US`);
    }

    render() {
        return (
            <>
                {this.state.fetched ?
                    <MoviesContentChild details={this.state.details}/> : <div className={"fullContainer"}><Loader/></div>
                }
            </>
        );
    }
}

export default MoviesContent;
