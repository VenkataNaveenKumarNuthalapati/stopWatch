// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  onStart = () => {
    this.timerID = setInterval(() => {
      this.setState(preState => ({
        minutes:
          preState.seconds === 59 ? preState.minutes + 1 : preState.minutes,
        seconds: preState.seconds === 59 ? 0 : preState.seconds + 1,
      }))
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerID)
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState({
      minutes: 0,
      seconds: 0,
    })
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="watch-card">
          <div className="image-text">
            <img
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1 className="timer">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="button-container">
            <button className="start-btn" type="button" onClick={this.onStart}>
              Start
            </button>
            <button className="stop-btn" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button className="reset-btn" type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
