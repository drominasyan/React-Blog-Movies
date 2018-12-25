import React          from "react";
import {RouteContext} from "../../ContextApi";

export function withRouterContext(Component) {
    return class extends React.Component {
        render() {
            return (
                <RouteContext.Consumer>
                    {
                        (value) =>{
                            return <Component {...this.props} value={value}/>
                        }
                    }
                </RouteContext.Consumer>
            )
        }
    }
}
 export default withRouterContext