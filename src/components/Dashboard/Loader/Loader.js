import React from "react";
import {ClipLoader} from 'react-spinners';


function Loader(props) {

    return (
        <div className="spinner">
            <ClipLoader
                className={"cus"}
                sizeUnit={"px"}
                size={100}
                color={'#208c65'}
                loading={true}
            />
        </div>
    )
}

export default Loader