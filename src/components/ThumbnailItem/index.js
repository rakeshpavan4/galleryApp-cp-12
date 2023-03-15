// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onCLick, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details

  const onChangeImage = () => {
    onCLick(id)
  }

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li>
      <button type="button" className="button" onClick={onChangeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
