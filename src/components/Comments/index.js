import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    contactlist: [],
    name: '',
    comment: '',
  }

  deletefunction = id => {
    const {contactlist} = this.state
    const newres = contactlist.filter(each => each.id !== id)
    return this.setState({contactlist: newres})
  }

  likingsubject = id => {
    this.setState(prevState => ({
      contactlist: prevState.contactlist.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  changeinputvalue = event =>
    // console.log(event.target.value)
    this.setState({name: event.target.value})

  changetextvalue = event =>
    // console.log(event.target.value)
    this.setState({comment: event.target.value})

  submitbutton = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomIndex = Math.floor(Math.random() * 6)
    console.log(randomIndex)
    const classnameIndex = initialContainerBackgroundClassNames[randomIndex]
    const newContact = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      initialclass: classnameIndex,
    }
    this.setState(myprevstate => ({
      contactlist: [...myprevstate.contactlist, newContact],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {contactlist, name, comment} = this.state
    console.log(contactlist)
    return (
      <div className="bg_container">
        <h1 className="main_heading">Comments</h1>
        <div className="header">
          <form onSubmit={this.submitbutton} className="left">
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              value={name}
              onChange={this.changeinputvalue}
              className="input_value"
              type="text"
              placeholder="Your Name"
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={this.changetextvalue}
              className="text_area"
              rows="8"
            />
            <button className="add_comment" type="submit">
              Add Comment
            </button>
          </form>

          <div className="right">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr className="horizontal_line" />
        <div className="footer">
          <div className="my">
            <p className="total_comment">{contactlist.length}</p>
            <p className="comment">Comment</p>
          </div>
          <ul className="list_of_items">
            {contactlist.map(each => (
              <CommentItem
                key={each.id}
                namelist={each}
                likedfunction={this.likingsubject}
                deletefunction={this.deletefunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
