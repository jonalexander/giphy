import React, { Component } from 'react';
import './App.css';
import Search from './components/search'
import Grid from './components/grid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {results: null}
    this.executeSearch('trump')
  }

  handleSearch(query, event) {
    event.preventDefault()
    this.executeSearch(query)
  }

  executeSearch(query) {
    var cleanQuery = query.replace(' ', '+')

    fetch(`http://api.giphy.com/v1/gifs/search?q=${cleanQuery}&api_key=dc6zaTOxFJmzC`)
      .then( (response) => {return response.json()} )
      .then( (jsObject) => {this.successFunction(jsObject) } )
  }

  successFunction(results) {
    this.setState( {results: results.data} )
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)}/>
        <Grid results={this.state.results}
          className="grid"
          />
      </div>
    );
  }
}



export default App;
