import React from "react";

import "./styles.css";
import spinner from "../../img/spinner.gif";

function Books(props) {
  const books = props.books;
  if(books.length > 0){
    return (      
      <div className="container">
        <table> 
          <caption>Livros</caption>
          <thead>
            <tr>
              <th></th>
              <th>Ano leitura</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Páginas</th>
            </tr>
          </thead>
          <tbody>
          {books.map((book, index ) =>(
              <tr key={book.key}>
                <td>{index +1}</td>
                <td>{book.year}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    );      
  }else{
    return(
      <div className="container">       
        <p><img src={spinner} alt="carregando" />carregando</p>
      </div>
    );
  }
}
  
export default Books;
