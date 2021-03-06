import React from 'react'

class Book extends React.Component {
    constructor(props) {
        super(props);

        const { title, authors, imageLinks } = this.props;
            const { thumbnail } = imageLinks;
            //
            const { shelf } = this.state;
        this.state = {
            shelf : 'none'
            
        };
    }  

    handleChange(event) {
        this.setState({ 
            value: event.target.value 
        })
        console.log(this.state.value)
    }

    shelfChange (value) {
        const updateShelf  = this.props;
            updateShelf(this.props, value)
                this.setState({ 
                    shelf: value 
                });
    }

    componentDidMount () {
        const shelf = this.props
        this.setState({ 
            shelf 
        });
    }

    render() {

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ this.thumbnail }")` }}></div>
                        <div className="book-shelf-changer">
                            <select 
                                onChange={this.handleChange} 
                                value={ this.shelf }
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                </div>
                <div className="book-title" >{ this.title }</div>
                <div className="book-authors">{ this.authors }</div>
            </div>
        )
    }
}

export default Book