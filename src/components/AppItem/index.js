// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-item-app div-space">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
