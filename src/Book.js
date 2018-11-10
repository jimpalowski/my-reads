import React, {Component} from 'react'

class Book extends React.Component {

    render() {
        return (
            <div>
               <p>Author: {this.state.title}</p> 
            </div>
        )
    }
}

export default Book