import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import {TbSend} from 'react-icons/tb'
import {GoMention} from 'react-icons/go'
import {BsEmojiLaughing} from 'react-icons/bs'
import DisplayItem from '../DisplayItem'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']
const color = ['green', 'blue', 'black', 'orange', 'grey']

class Welcome extends Component {
  state = {
    userText: '',
    userListDetails: [],
    isMentionOn: false,
    isEmojiOn: false,
  }

  onChangeUserText = event => {
    this.setState({userText: event.target.value})
  }

  onClickEmoji = () => {
    this.setState(prevState => ({isEmojiOn: !prevState.isEmojiOn}))
  }

  onClickMention = () => {
    this.setState(prevState => ({isMentionOn: !prevState.isMentionOn}))
  }

  onClickSend = event => {
    event.preventDefault()
    const {userText} = this.state

    const index = Math.floor(Math.random() * userList.length)
    const userName = userList[index]

    const colorIndex = Math.floor(Math.random() * color.length)
    const bgColor = color[colorIndex]

    const date = new Date()
    const userTime = date.toLocaleTimeString()

    const newUserText = {
      id: uuid4(),
      message: userText,
      name: userName,
      bgColorName: bgColor,
      time: userTime,
    }
    this.setState(prevState => ({
      userListDetails: [...prevState.userListDetails, newUserText],
      userText: '',
    }))
  }

  render() {
    const {userText, userListDetails, isMentionOn, isEmojiOn} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Chat Page</h1>
        <hr className="separator" />
        <ul className="display-card">
          {userListDetails.map(eachUser => (
            <DisplayItem key={eachUser.id} userTextDetails={eachUser} />
          ))}
        </ul>
        <ul className="emoji-display-card">
          {isEmojiOn
            ? emojisList.map(eachUser => (
                <li className="emoji">
                  <img src={eachUser.emojiUrl} alt={eachUser.emojiName} />
                </li>
              ))
            : ''}
        </ul>
        <ul className="name-display-card">
          {isMentionOn ? userList.map(eachUser => <li>{eachUser}</li>) : ''}
        </ul>
        <form className="input-card" onSubmit={this.onClickSend}>
          <div className="user-input-card">
            <input
              type="text"
              placeholder="Enter your message"
              className="input"
              value={userText}
              onChange={this.onChangeUserText}
            />
            <button
              type="button"
              className="mention-button"
              onClick={this.onClickEmoji}
            >
              <BsEmojiLaughing size={30} />
            </button>
            <button
              type="button"
              className="mention-button"
              onClick={this.onClickMention}
            >
              <GoMention size={30} />
            </button>
          </div>

          <button type="submit" className="send-button">
            <TbSend size={30} />
          </button>
        </form>
      </div>
    )
  }
}

export default Welcome
