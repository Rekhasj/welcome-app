// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubcribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubcribe: !prevState.isSubcribe}))
  }

  render() {
    const {isSubcribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank You! Happy Learning</p>
        {isSubcribe ? (
          <button className="button" type="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.onSubscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
