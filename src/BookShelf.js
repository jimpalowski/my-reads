import React from 'react';
import Books from './Books'

class BookShelf extends React.Component {
    render() {
      console.log('THE PROPS IN BOOKSHELF: ', this.props)
        return (
            <div>
              {/* condtional */}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelfCurrent">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <Books passingBooks={this.props.passedBooks} />
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