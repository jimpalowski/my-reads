import React from 'react';
import Books from './Books'

class BookShelf extends React.Component {
  
  filterBooks = (shelf) => {
    const { books } = this.props;
    return books.filter((book) => book.shelf === shelf);
    }
    render() {

      console.log("The current status if t:"+ this.filterBooks)
        return (
            <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelfCurrent">
                  <h2 className="bookshelf-title">{  }</h2>
                    <Books 
                      books={this.state.filterBooks}
                      filteringBooks={this.filterBooks}
                       />
                </div>
                <div className="bookshelfWant">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <Books />
                </div>
                <div className="bookshelfRead">
                  <h2 className="bookshelf-title">Read</h2>
                  <Books />
                </div>
              </div>
            </div>
            </div>
        )
    }    
}

export default BookShelf

