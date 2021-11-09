import React, { Component } from 'react'

export default class BookDetail extends Component {
    render() {

        if (!this.props.book) {
            return (
                <div>Please Select the book for see the details</div>
                )
        }
        return (
            <div>
                <h3>Detail for</h3>
                <h4>title : { this.props.book.title}</h4>
                <h4>pages : {this.props.book.pages}</h4>
            </div>
        )
    }
}
