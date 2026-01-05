import ReviewCard from "./ReviewCard"

function ReviewList({ reviews, onDelete }) {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <ReviewCard
          key={review.id}
          review={review}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ReviewList
