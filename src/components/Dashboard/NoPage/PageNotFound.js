import PageNotFoundImg from "../../../images/404.png";
import {Link} from "react-router-dom";
import React from "react";
import "./PageNotFound.css"
export const PageNotFound = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="pageNotFound">
                        <img src={PageNotFoundImg} alt="ImG" width={500}/>
                        <div className="contentPageNotFound">
                            <h1>Oops... !</h1>
                            <p>Page Available for only Logged in users</p>
                        </div>
                        <Link className={"goLogin"} to="/">GO TO HOMEPAGE</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

