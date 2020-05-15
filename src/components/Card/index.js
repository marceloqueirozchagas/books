import React from "react";

import "./styles.css"

function Card(props) {
    return (     
        <div className="card" onClick={() => props.changeMode(props.mode)}>
          <div className="lb-total">{props.total}</div>
          <div className="lb-title">{props.title}</div>
        </div>      
    );
  }
  
  export default Card;
