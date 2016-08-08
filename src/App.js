import React, { Component } from 'react';
import './App.css';

const Store = []

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

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {query: null}
  }

  handleChange(event) {
    this.setState( {query: event.target.value} )
  }

  handleClick(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form>
        <input className="search-bar"
          onChange={this.handleChange.bind(this)}
          type="text"
          placeholder="..."
          />
        <img src="/src/images/search_gradient_slow.gif"
          onClick={this.props.handleSearch.bind(null, this.state.query)}
          alt="Submit Search"
          width="64"
          />
      </form>
    )
  }
}

class Grid extends Component {
  render(){
    var counter = 0
    var results = this.props.results ? this.props.results : Store
    var arrayRows = [results.slice(0, 4), results.slice(4, 8), results.slice(8, 12), results.slice(12, 16), results.slice(16, 20)]

    return (
      <table>
        <tbody>
        {
          arrayRows.map( (arrayRow) => {
            return <TableRow data={arrayRow} key={counter++}/>
            } )
        }
        </tbody>
      </table>
    )
  }
}

class TableRow extends Component {
  render() {
    var counter = 0

    return (
      <tr>
        { this.props.data.map( (cell) => {
          return <TableCell data={cell} key={counter++} />
          })
        }
      </tr>
    )
  }
}

class TableCell extends Component {
  render() {
    var counter = 0
    return (
      <td>
        <GiphyObject data={this.props.data}
          key={counter++}
          />
      </td>
    )
  }
}

class GiphyObject extends Component {
    constructor(props) {
      super(props)
      this.state = {hover: false}
    }

    toggleHoverState() {
      this.setState( {hover: !this.state.hover} )
    }

    render() {
      var imgSrc=this.state.hover === true ? this.props.data['images']['fixed_width']['url'] : this.props.data['images']['fixed_width_still']['url']

      return (
        <img src={imgSrc}
          alt=""
          onMouseOver={this.toggleHoverState.bind(this)}
          onMouseOut={this.toggleHoverState.bind(this)}
          />
      )
    }
}

export default App;
