import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {query: null}
  }

  handleChange(event) {
    this.setState( {query: event.target.value} )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSearch.bind(null, this.state.query)}>
        <input className="search-bar"
          id="search-bar"
          onChange={this.handleChange.bind(this)}
          type="text"
          placeholder="..."
          />
      </form>
    )
  }
}

export default Search
