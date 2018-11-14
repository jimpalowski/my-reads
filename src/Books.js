import React from 'react'
import Book from './Book'

class Books extends React.Component {
 
    render() {
        return (
            <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <Book bookPassed={this.props.passingBooks} />
              </li>
            </ol>
          </div>
        )
    }
}
console.log("The books are " + Book)
export default Books