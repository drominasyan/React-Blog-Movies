import React           from 'react'
import MovieBackground from '../../../images/download.jpg'
import {Link}          from 'react-router-dom'

const ImageComponent = (props) => {
    // console.log('PropsOfImages', props.date.results)
    return (
        props.date.results.map((item, index) => {
                return (
                    <Link to={`/movie/${item.id}`} key={index}>
                        <div className="card">
                            <div className="img-content">
                                <img width={185} height={278}
                                     src={item.poster_path
                                         ? `http://image.tmdb.org/t/p/w185/${item.poster_path}`
                                         : MovieBackground}
                                     alt="alt"/>
                                <div className="cardFooter">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            },
        )
    )
}
export default ImageComponent

