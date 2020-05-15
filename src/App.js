import React, { Component } from "react";

import Header from "./components/Header"
import Info from "./components/Info"
import Books from "./components/Books";
import Authors from "./components/Authors";

import "./styles.css"
import FirebaseService from "./services/FirebaseService"

export default class App extends Component{

  state = {
    mode: 1,
    books: [],
    info: {
      books:0,
      authors:0,
      pages:0
    }
  }

  componentDidMount(){
      this.loadBooks(null, null);
  }

  loadBooks = () =>{   
    FirebaseService.getBooks('livros',(dataReceived) => {
        if(dataReceived != null){
          const info = {
            books:dataReceived.length,
            authors: Array.from(new Set(dataReceived.map(x => { return x.author }))).length          
          }

          this.setState({books: dataReceived, info});
        }
    })
  }

  changeMode = (mode) => {console.log(mode)
    this.setState({mode: mode})
  }

  render(){
    const { books, info, mode } = this.state;

    return (
      <div className="App">
        <Header />
        <Info info={info} changeMode = {this.changeMode}/>
        
        {mode === 1 ? 
          <Books books={books} /> 
          :  
          <Authors books={books} />
        }
      </div>
    )
  }
}