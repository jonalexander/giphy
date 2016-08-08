import React, { Component } from 'react';
import GiphyObject from './giphyObject'

const Store = []

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

export default Grid
