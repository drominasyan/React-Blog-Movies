import React, {Component} from 'react'
import {RequestContexts}  from './index'
import axios              from 'axios'

class ContextsProvider extends Component {
   constructor(props){
       super(props)

       this.state = {
           movies: [],
           fetched: false,
           token: localStorage.getItem('userToken') !== null,
           preLoader: false,
           left: false,
           loadedImagesCount: 0,
           totalPages: '',
           activePage: '',
           pageChanger: this.pageChanger,
           search: this.search
       }
   }

    pageChanger = (page) => {
        this.setState({
            preLoader: false,
            loadedImagesCount: 0,
            activePage: page,
            fetched: false,
        })
        this.request(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=418a2c57e3a40a68638d0017f189fca9&page=' +
            page).then((response) => {
            this.setState({
                fetched: true,
                movies: response.data,
            })
        })
    }

    request = (url) => {
        return axios.post(url).then((response) => {
            return response
        })
    }

    search = (event) => {
        this.setState({
            preLoader: false,
            fetched: false,
        })
        const val = event.target.value.replace(/\s+/g, '+')

        if (val.length !== 0) {
            this.request(
                'http://api.themoviedb.org/3/search/movie?api_key=418a2c57e3a40a68638d0017f189fca9&query=' +
                val).then((response) => {
                this.setState({
                    movies: response.data,
                    preLoader: true,
                    fetched: true,
                })
            })
        } else {
            this.request(
                'https://api.themoviedb.org/3/movie/top_rated?api_key=418a2c57e3a40a68638d0017f189fca9')
                .then((response) => {
                    this.setState({
                        fetched: true,
                        preLoader: true,
                        movies: response.data,
                    })
                })
        }
    }

    componentDidMount() {
        this.request(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=418a2c57e3a40a68638d0017f189fca9')
            .then((response) => {
                this.setState({
                    fetched: true,
                    movies: response.data,
                    totalPages: response.data.total_pages,
                    activePage: response.data.page,
                })
            })
    }

    render() {
        return (
            this.state.fetched ? <RequestContexts.Provider value={this.state}>
                {this.props.children}
            </RequestContexts.Provider> : ''
        )
    }
}

export default ContextsProvider
