import React from 'react';
import BooksAPI from './App'

class SearchPage extends React.Component {

  constructor () {
    super();
    this.state = {
        query: '',
        books: []
    };
}

    findBooks = (book) => {
    BooksAPI.search(book)
      .then((book) => {
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
      })
  }
  updateQuery = (query) => {
    const { searchBook } = this.props;

    this.setState({ query: query });
    const trimBook = query.trim();
    if (trimBook === '') {
        return;
    }
  }
    render() {
    const updateBookshelf = this.props;
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {

                }
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
  }
export default SearchPage