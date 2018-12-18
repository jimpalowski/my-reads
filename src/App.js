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
  

  // componentDidMount(){
  //     getBooks().then(books => {
  //         return results.json();
  //     )}
  //       .then(data => {
  //         let bookNames = data.results.map((books) => {
  //           return(
  //             <div key={bookNames.author}>
  //               <img src={bookNames.image} />
  //               </div>
  //           )
  //       })
  //       this.setState({books: books})
  //       console.log("state", books)
  //     })
  //   )}
  
  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>({
          books
        }))
      })
      
  }

  updateBookShelf = (book, updatedShelf) => {
    const { books } = this.state;

    const bookIndex = books.findIndex((key) => {
      return key.id === book.id;
    });
  }
  filterBooks = (books) => {
    return books.filter((book) => 
      book.shelf === books);
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
                updateBookShelf={ this.updateBookShelf }
                filterBooks={this.filterBooks}
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
