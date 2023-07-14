import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {namelist, likedfunction, deletefunction} = props
  const {id, name, comment, isLiked, initialclass} = namelist
  const clickingthebutton = () => {
    likedfunction(id)
  }

  const clickingdeletebutton = () => deletefunction(id)
  //   console.log(id)
  //   console.log(namechar)
  const myresult = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="mylistitem">
      <div className="top">
        <p className={`para1 ${initialclass}`}>{name[0].toUpperCase()}</p>
        <p className="name_heading">{name}</p>
        <p className="dateclass">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment_class">{comment}</p>
      <div className="bottom">
        <button
          onClick={clickingthebutton}
          type="button"
          className={`mybutton ${isLiked ? 'active-btn' : 'unactive-btn'}`}
        >
          <img className="myimage" src={myresult} alt="like" /> Like
        </button>
        <button
          data-testid="delete"
          onClick={clickingdeletebutton}
          type="button"
          className="mybutton"
        >
          <img
            className="delete_btn"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal_line" />
    </li>
  )
}

export default CommentItem
