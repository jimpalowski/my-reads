import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>
          books)
          console.log(books)
      })
    }
  
  findBook = (book) => {
    BooksAPI.search(book)
      .then((book) => {
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
      })
  }

    handleEventChange = (event) => {

    }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage></SearchPage>
        ) : (
          <div className="list-books">
            <BookShelf></BookShelf>
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
