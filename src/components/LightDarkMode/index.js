// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    status: true,
    buttonText: 'Light Mode',

    container: 'dark',
  }

  changeMode = () => {
    const {status} = this.state
    console.log(status)

    if (status === true) {
      this.state.status = false
      this.state.buttonText = 'Dark Mode'

      this.state.container = 'light'

      this.setState(pre => pre)
    } else {
      this.state.status = true
      this.state.buttonText = 'Light Mode'

      this.state.container = 'dark'

      this.setState(pre => pre)
    }
  }

  render() {
    const {buttonText, container} = this.state

    return (
      <div className="bg-container">
        <div className={container}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="btnLight" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
