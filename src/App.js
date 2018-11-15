import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.getBooks = this.getBooks.bind(this);
    this.findBooks = this.findBooks.bind(this)
  }
  state = {
    showSearchPage: false,
    books: [{
      title: '',
      author: '',

    }],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>
          books
          )
          console.log(books)
      })
      
    }
  
  findBooks = (book) => {
    BooksAPI.search(book)
      .then((book) => {
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
      })
  }
  handleEventChange = (e) => {

  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            searchBooks={this.findBooks}></SearchPage>
        ) : (
          <div className="list-books">
            <BookShelf 
                passedBooks={this.props.getBooks}
                key={this.books}
                title={this.title}
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
