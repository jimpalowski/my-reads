import React from 'react'
import Book from './Book'

class Books extends React.Component {
 
    render() {
        return (
          <div className="bookshelf-allbooks">
            <div className="bookshelf-books-current">
              <ol className="books-grid">
{/*               
                {
                  books.sort((a, b) => {
                    return a.title > b.title;
                  }).map((books) => (
                    <li key={books.id}>
                    <Book 
                        id={ books.id }
                        authors={ books.authors }
                        title={ books.title }
                        imageLinks={ books.imageLinks }
                        // shelf={ books.shelf }
                        bookPassed={this.props}
                        // updateShelf={ updateShelf } 
                        />
                  </li>
                  ))
                } */}

              </ol>
          </div>
            <div className="bookshelf-books-want">
              <ol className="books-grid">
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">1776</div>
                    <div className="book-authors">David McCullough</div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="bookshelf-books-read">
                  <ol className="books-grid">
                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">The Hobbit</div>
                        <div className="book-authors">J.R.R. Tolkien</div>
                      </div>
                    </li>
                  </ol>
                </div>
            </div>
        )
    }
}
export default Books