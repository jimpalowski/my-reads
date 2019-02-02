import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'
import Book from './Book'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSearchPage: false,
      books:[],
    }
}
  componentWillMount(){
    this.getBooks()
    }

  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>
          books
        )
        console.log(books)
      })
  }
  
sortBooks =  (books) =>  
  books.sort((a, b) => {
    return a.title > b.title;
  }).map((books) => (
    <li key={books.id}>
    <Book 
        id={ books.id }
        authors={ books.authors }
        title={ books.title }
        imageLinks={ books.imageLinks }
        shelf={ books.shelf }
        bookPassed={this.state.books}
        // updateShelf={ updateShelf } 
        />
  </li>
  ))

  // updateBookShelf = (book, updatedShelf) => {
  //   const { books } = this.state;

  //   const bookIndex = books.findIndex((key) => {
  //     return key.id === book.id;
  //   });
  // }
  filterBooks = (books) => {
    return books.filter((book) => 
      book.shelf === books);
    }

  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            searchBooks={this.findBooks}
            shelfBooks={this.state.books}
            >
            </SearchPage>
        ) : (
          <div className="list-books">
            <BookShelf 
                books={ this.state.books }
                // updateBookShelf={ this.updateBookShelf }
                filteredBooks={ this.filterBooks }
                sortingBooks = { this.sortBooks }
            />
           <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
    
  }
  
  }
export default BooksApp
