function ReviewCard({ review, onDelete }) {
  return (
    <div className="review-card">
      <button className="close" onClick={() => onDelete(review.id)}>
        ✕
      </button>

      <div className="stars">
        <img src="/public/images/estrellas.png" alt="estrellas" />
      </div>
      <p>{review.text}</p>
      <span>{review.name}</span>
    </div>
  )
}

export default ReviewCard
