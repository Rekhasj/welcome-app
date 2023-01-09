import {AiOutlineLike} from 'react-icons/ai'
import {useState} from 'react'
import './index.css'

const DisplayItem = props => {
  const [count, setCount] = useState(0)
  const {userTextDetails} = props
  const {message, name, bgColorName, time} = userTextDetails
  const initial = name[0]
  console.log(userTextDetails)

  const onLike = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <li>
      <div className="name-card">
        <p className="initial" style={{backgroundColor: bgColorName}}>
          {initial}
        </p>
        <h1 className="name">{name}</h1>
        <span className="time">{time}</span>
      </div>
      <div className="message-card">
        <p className="message">{message}</p>
        <button type="button" className="like-button" onClick={onLike}>
          <AiOutlineLike />
        </button>
        <p className="count">Count: {count}</p>
      </div>
    </li>
  )
}

export default DisplayItem
