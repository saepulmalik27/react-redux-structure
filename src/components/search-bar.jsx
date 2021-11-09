import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor (){
        super()
        this.state = {
            term : ''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    onFormSubmit = (evt) => {
        evt.preventDefault()
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }

    onInputChange = (evt) => {
        this.setState({ term: evt.target.value })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" onChange={this.onInputChange} value={this.state.term} />
                <button type="submit">Search</button>
            </form>
        )
    }
}
