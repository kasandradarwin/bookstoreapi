import React from 'react';

export default function Books(props){

    return (
        <div>
          <h1>These books are from the API</h1>
          {props.books.map((book) => {
            console.log(book)
            return (
              <div key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.body}</p>
                
              </div>
            );
          })}
        </div>
      );
    }