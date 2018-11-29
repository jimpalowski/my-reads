import React from 'react'
import Book from './Book'

class Books extends React.Component {
 
    render() {
      console.log('THE PROPS IN BOOKS: ', this.props)
        return (
          <div className="bookshelf-allbooks">
            <div className="bookshelf-books-current">
              <ol className="books-grid">
                <li>
                  <Book bookPassed={this.props} />
                </li>
              </ol>
          </div>
            <div className="bookshelf-books-want">
              <ol className="books-grid">
                <li>
                  <Book bookPassed={this.props} />
                </li>
              </ol>
            </div>
            <div className="bookshelf-books-read">
              <ol className="books-grid">
                <li>
                    <Book bookPassed={this.props} />
                </li>
              </ol>
            </div>
        </div>
        )
    }
}
export default Books