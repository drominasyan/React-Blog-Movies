import React, {Component, lazy, Suspense} from 'react'
import {withRouter}                       from 'react-router-dom'
import {RequestContexts}                  from '../../../ContextApi/index'
import {SideBarRightForPagination}        from '../../Layouts/SideBarRight'
import Button                             from '@material-ui/core/Button/Button'
import axios                              from 'axios'
import ContextsProvider
                                          from '../../../ContextApi/RequestContexts'
import Chat                               from '../Chat/chatMessage'
import Loader                             from '../Loader/Loader'
import './style.css'

import ImageComponent from './ImagesComponent'

export const request = (url) => {
    return axios.post(url).then((response) => {
        return response
    })
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
})

class Dashboard extends Component {

    componentDidUpdate(prevProps, prevState) {
        let images = []
        if (this.state.movies !== prevState.movies) {
            this.state.movies.results.map((item, index) => {
                images[index] = new Image()
                images[index].src = 'http://image.tmdb.org/t/p/w185/' +
                    item.poster_path
                images[index].onload = () => {

                    this.setState((state) => {
                        return {
                            loadedImagesCount: state.loadedImagesCount + 1,
                        }
                    })
                }
            })
        }
        if (this.state.loadedImagesCount !== prevState.loadedImagesCount &&
            this.state.loadedImagesCount === this.state.movies.results.length) {
            this.setState({
                preLoader: true,
            })
        }
    }

    render() {
        return (
            <ContextsProvider>
                <RequestContexts.Consumer>
                    {(value) => {
                        console.log("Sssssssssssssssssss", value.movies)
                        return <React.Fragment>
                            <div className="fullSearchBlock">
                                <div className="container">
                                    <input placeholder={'Search'}
                                           type="text"
                                           className={' movieInput'}
                                           onChange={value.search}/>
                                </div>
                            </div>
                            <Chat/>
                            <div className="container movies">
                                {value.fetched ? <ImageComponent date={value.movies} /> : <Loader/> }
                            </div>
                            <SideBarRightForPagination pageDate={{
                                total_pages: value.activePage,
                                pageChanger: value.pageChanger,
                                totalPages: value.totalPages,
                                activePage: value.activePage,
                            }}/>
                            <Button variant="contained" color="primary"
                                    className={styles.button}>User
                                Lists</Button>
                        </React.Fragment>
                    }}
                </RequestContexts.Consumer>
            </ContextsProvider>
        )
    }
}

export default withRouter(Dashboard)
