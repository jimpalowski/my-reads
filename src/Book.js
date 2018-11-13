import React, { Component } from 'react'

class Book extends React.Component {

    render() {
        return (
            <div>
                <p>Title: {this.props.title}</p>
               <p>Author: {this.state.author}</p> 
            </div>
        )
    }
}

export default Book