import { useState } from "react"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"

function Footer() {
  const [reviews, setReviews] = useState([])

  function addReview(review) {
    setReviews([...reviews, review])
  }

  function deleteReview(id) {
    setReviews(reviews.filter(r => r.id !== id))
  }

  return (
    <footer className="footer">
      <div className="container">
        <h2>Custommer Reviews</h2>

        <div className="footer-content">
          <ReviewForm onAdd={addReview} />
          <ReviewList reviews={reviews} onDelete={deleteReview} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
