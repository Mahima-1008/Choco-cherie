import "../styles/reviews.css";

function Reviews() {
  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>

      <div className="reviews-slider">

        <div className="review-track">

          {/* REVIEW 1 */}
          <div className="review-card">
            <div className="review-top">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" />
              <div>
                <h4>Priya Sharma</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>Absolutely loved the chocolates! Premium quality & beautiful packaging.</p>
          </div>

          {/* REVIEW 2 */}
          <div className="review-card">
            <div className="review-top">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" />
              <div>
                <h4>Rahul Verma</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>Perfect gift option. Rich flavors and amazing experience!</p>
          </div>

          {/* REVIEW 3 */}
          <div className="review-card">
            <div className="review-top">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" />
              <div>
                <h4>Anjali Mehta</h4>
                <div className="stars">★★★★☆</div>
              </div>
            </div>
            <p>Customization made it very special. Loved it 💖</p>
          </div>

          {/* DUPLICATE FOR SMOOTH LOOP */}
          <div className="review-card">
            <div className="review-top">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" />
              <div>
                <h4>Priya Sharma</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>Absolutely loved the chocolates! Premium quality & beautiful packaging.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Reviews;