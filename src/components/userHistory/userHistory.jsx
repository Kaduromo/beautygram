import { useState } from "react"

function UserHistory({ history, img }) {
  const [historyState, setHistoryState] = useState(history)

  const historyClass =
    "user-history__image" + `${historyState ? " user-history__historyes" : ""}`

  const handleClick = () => setHistoryState(false)

  return (
    <button className="user-history" onClick={handleClick}>
      <div className={historyClass}>
        <img src={img} alt="2615" />
      </div>
    </button>
  )
}

export default UserHistory
