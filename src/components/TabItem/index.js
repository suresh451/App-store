import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="list-item">
      <button className="tab-color" onClick={onClickTabItem} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
