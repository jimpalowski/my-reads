import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'


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
  }

  componentDidMount(){
    this.getBooks()
      .then(results => {
          return results.json();
      )}.then(data => {
        let bookNames = data.results.map((books) => {
          return(
            <div key={books.author}>
              <img src={books.image} />
              </div>
          )
        })
        this.setState({books: books})
        console.log("state", books)
      })
    }

  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>({
          books
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
                books={this.state.books}
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
