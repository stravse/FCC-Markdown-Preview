import React from "react";
import "./scss/banner.scss"

function Banner(props){
    return (
        < div className="banner">{props.title}</div>
    )
}

export default Banner;