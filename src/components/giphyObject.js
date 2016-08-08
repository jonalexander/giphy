import React, { Component } from 'react';


class GiphyObject extends Component {
    constructor(props) {
      super(props)
      this.state = {hover: false}
    }

    toggleHoverState() {
      this.setState({
        hover: !this.state.hover
      })}

    render() {
      var still = this.props.data['images']['fixed_width_still']['url']
      var animated = this.props.data['images']['fixed_width']['url']

      var imgSrc = this.state.hover ? animated : still

      return (
        <img src={imgSrc}
          alt=""
          onMouseOver={this.toggleHoverState.bind(this)}
          onMouseOut={this.toggleHoverState.bind(this)}
          />
      )
    }
}

export default GiphyObject
