import './index.css'

const DisplayListItems = props => {
  const {listItems, onDeleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listItems

  const deleteList = () => {
    onDeleteList(id)
  }

  return (
    <li className="list-container">
      <p className="time-text">{timeAccessed}</p>
      <div className="content-container">
        <div>
          <img src={logoUrl} alt="domain logo" className="card-img" />
        </div>
        <p className="title">{title}</p>
        <p className="domain-text">{domainUrl}</p>
      </div>
      <button
        className="delete-container"
        type="button"
        data-testid="delete"
        onClick={deleteList}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default DisplayListItems
