import { useState, useRef } from "react"

function ReviewForm({ onAdd }) {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const nameInputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !text) return

    onAdd({
      id: Date.now(),
      name,
      text
    })

    setName("")
    setText("")

    nameInputRef.current.focus()
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="review-form-box">
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="review-form-box">
        <input
          type="text"
          placeholder="Reviews..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <button>SEND</button>
    </form>
  )
}

export default ReviewForm
