import React from "react";

import Card from "../Card"

import "./styles.css"

function info(props) {
    return (  
      <div className="container" >
        <Card total={props.info.books} title="Livros" mode={1} changeMode={props.changeMode}   />
        <Card total={props.info.authors} title="Autores" mode={2} changeMode={props.changeMode}  />
      </div>
    );
  }
  
  export default info;
