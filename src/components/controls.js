import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

const mapStateToProps = (state) => {
  return {
      isRunning: state.game.isRunning
  }
}

const mapDispatchToProps = () => {
  return {
      moveRight,
      moveLeft,
      moveDown,
      rotate
  }
}

class Controls extends Component {

  render() {
    return (
      <div className="controls">
        {/* left */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveLeft()
        }}>Left</button>

        {/* right */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveRight()
        }}>Right</button>

        {/* rotate */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.rotate()
        }}>Rotate</button>

        {/* down */}
        <button className="control-button" onClick={(e) => {
          if (!isRunning) { return }
          this.props.moveDown()
        }}>Down</button>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Controls)