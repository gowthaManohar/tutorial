import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoincrement = () => {
    const {mango} = this.state

    this.setState(previous => ({mango: previous.mango + 1}))
  }

  bananaincrement = () => {
    const {mango} = this.state

    this.setState(previous => ({banana: previous.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-card">
          <h1 className="fruitshead">
            Bob ate <span className="span">{mango}</span> mangoes
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit">
              <img
                alt="Mango"
                className="fruitimg"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.mangoincrement} className="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                alt="Banana"
                className="fruitimg"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.bananaincrement} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
