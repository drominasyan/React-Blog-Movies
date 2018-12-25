import React, {Component} from 'react';
import MoviesContent from './MovesContent';
import  SimilarMovies from './similarMovies';
import "./movies.css"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.match.params.id,
            details: {},
            fetched: false,
            moviesContentFinished: false,
            similarMoviesFinished: false,
        };
    }



    movieChange = (id) => {
       this.setState({
           movieId: id
       })
    };

    render() {
        return (
            <>
                <MoviesContent  id={this.state.movieId}/>
                <SimilarMovies change={(id)=> this.movieChange(id,this.state.fetched)}  id={this.state.movieId}/>
            </>
        );
    }
}

export default Index;
