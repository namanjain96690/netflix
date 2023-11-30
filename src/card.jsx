import React from "react";
import "./index.css";
import Img from "./img";
function Card(props){
    return(
    <>
    <div className="cards">
        <div className="card">
            <Img imgsr={props.imgsrc}/>
            <div className="card_info">
                <span className="card_category">
                 {props.cardcat}
                </span>
                <h3 classNme="card-title">{props.cardtit}</h3>
                <a href={props.cardhref}>
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
    </>
    )
}
export default Card;

