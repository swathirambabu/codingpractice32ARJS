// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventItemDetails

  const imageClassName = isActive ? 'image active' : 'image'

  const onClickTab = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-items">
      <button type="button" className="event-button" onClick={onClickTab}>
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
