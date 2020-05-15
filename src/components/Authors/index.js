import React from "react";

import "./styles.css";
import spinner from "../../img/spinner.gif";

function Authors(props) {
  const authors = [];
  const books = props.books;

  books.forEach(element => {
    if(!authors.some(x => x.name === element.author))
      authors.push({
        name: element.author,
        books: books.filter(y => y.author === element.author)
          .sort((a,b) =>{
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
          })
          .map(y =>  {
            return {
              title: y.title,
              pages: y.pages
            }          
          })
      })
  });

  if(props.books.length > 0){
    return (      
      <div className="container">
        <table> 
          <caption>Autores</caption>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Livros</th>
            </tr>
          </thead>
          {authors.map((author, authorIndex ) =>(
          <tbody key={authorIndex}>
              <tr >
                <td>{authorIndex +1}</td>
                <td>{author.name}</td>
                <td>{author.books.length}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {author.books.map((book, bookIndex ) =>(
                    <ul key={bookIndex}>
                      <li>{book.title} - {book.pages} páginas</li>
                    </ul>
                  ))}
                </td>
                <td></td>
              </tr>
          </tbody>
            ))}
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
  
export default Authors;
