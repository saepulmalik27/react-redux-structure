import React, { Component } from 'react'

 class BookList extends Component {

    renderList() {
      
        return this.props.books && this.props.books.map((book, key) => {
           return  <li key={key} onClick={() => this.props.selectBook(book)}>{book.title}</li>
        })
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}



export default  BookList;