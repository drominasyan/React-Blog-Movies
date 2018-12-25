import React from "react";
import Header from "../Dashboard/Header/Header";

export function withHeader(Component) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <Header/>
                    <Component/>
                </>
            )
        }
    }
}

export default withHeader