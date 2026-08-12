import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Mail, CheckCircle2, ShoppingBag, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import './ProductDetailPage.css';

const productsData = {
  'individual-mail': {
    id: 'individual-mail',
    title: 'Individual – Mail',
    price: 99.99,
    category: 'Mail Plans',
    image: 'https://pom-agency.online/wp-content/uploads/2025/08/iiii.png',
    features: [
      '1 mailbox included',
      '5GB for emails',
      'Cloud infrastructure',
      'Antivirus check'
    ],
    description: 'The Individual Mail Plan is designed for startups, freelancers, and small businesses looking for a single secure email address tied to their custom domain.'
  },
  'business-mail': {
    id: 'business-mail',
    title: 'Business – Mail',
    price: 499.99,
    category: 'Mail Plans',
    image: 'https://pom-agency.online/wp-content/uploads/2025/08/bbbb.png',
    features: [
      '3 mailboxes included',
      '30GB for emails',
      'Cloud infrastructure',
      'Antivirus check',
      'Full mobile sync support'
    ],
    description: 'The Business Mail Plan offers expanded mailbox capacity and 30GB total storage for growing teams requiring multi-device synchronization and priority deliverability.'
  },
  'professional-mail': {
    id: 'professional-mail',
    title: 'Professional – Mail',
    price: 999.99,
    category: 'Mail Plans',
    image: 'https://pom-agency.online/wp-content/uploads/2025/08/pppp.png',
    features: [
      '5 mailboxes included',
      '75GB for emails',
      'Cloud infrastructure',
      'Antivirus check',
      'Full mobile sync support',
      'Free domain included'
    ],
    description: 'The Professional Mail Plan is our flagship email hosting package for established businesses, featuring 75GB cloud storage, 5 mailboxes, and a free domain registration.'
  }
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const productKey = id || 'individual-mail';
  const product = productsData[productKey] || productsData['individual-mail'];
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState([]);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerEmail, setReviewerEmail] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewerName || !reviewComment) return;
    const newRev = {
      name: reviewerName,
      rating: reviewRating,
      comment: reviewComment,
      date: new Date().toLocaleDateString()
    };
    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setReviewerName('');
    setReviewerEmail('');
    setReviewComment('');
  };

  const relatedProducts = Object.values(productsData).filter(p => p.id !== product.id);

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/mail-professional">Mail Plans</Link> / <span>{product.title}</span>
        </div>

        {/* Product Grid */}
        <div className="grid-2-col product-hero card">
          <div className="product-image-box">
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-img"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500';
              }}
            />
          </div>

          <div className="product-info-box">
            <span className="badge">{product.category}</span>
            <h1 className="product-title">{product.title}</h1>
            
            <div className="product-price-box">
              <span className="price-amount">{product.price} EGP</span>
              <span className="price-period">/ Month</span>
            </div>

            <ul className="product-features-list">
              {product.features.map((feat, idx) => (
                <li key={idx}><CheckCircle2 size={16} className="check-icon" /> {feat}</li>
              ))}
            </ul>

            <div className="purchase-controls">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button onClick={handleAddToCart} className="btn btn-primary">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="product-tabs card mt-5">
          <div className="tab-headers">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p>{product.description}</p>
                <h4>Included Infrastructure Features:</h4>
                <ul>
                  <li>99.9% Server Uptime Guarantee with DNS fallback protection</li>
                  <li>IMAP / POP3 / SMTP encrypted SSL/TLS protocols</li>
                  <li>Antivirus and anti-spam active scanning engine</li>
                  <li>Webmail portal access & mobile synchronization</li>
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                {reviews.length === 0 ? (
                  <p className="text-muted">There are no reviews yet. Be the first to review "{product.title}".</p>
                ) : (
                  <div className="reviews-list">
                    {reviews.map((r, i) => (
                      <div key={i} className="review-item">
                        <div className="review-meta">
                          <strong>{r.name}</strong> <span>- {r.date}</span>
                          <span className="stars">{'★'.repeat(r.rating)}</span>
                        </div>
                        <p>{r.comment}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="review-form-box mt-4">
                  <h3>Add a Review</h3>
                  {submittedMessage && <p className="success-msg">Thank you! Your review has been submitted.</p>}
                  <form onSubmit={handleReviewSubmit} className="review-form">
                    <div className="form-group">
                      <label>Your Rating *</label>
                      <select 
                        value={reviewRating} 
                        onChange={(e) => setReviewRating(Number(e.target.value))}
                        className="form-input"
                      >
                        <option value="5">5 Stars - Perfect</option>
                        <option value="4">4 Stars - Good</option>
                        <option value="3">3 Stars - Average</option>
                        <option value="2">2 Stars - Not bad</option>
                        <option value="1">1 Star - Poor</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Your Review *</label>
                      <textarea 
                        rows="4" 
                        required
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        className="form-input"
                        placeholder="Write your experience..."
                      ></textarea>
                    </div>

                    <div className="grid-2-col">
                      <div className="form-group">
                        <label>Name *</label>
                        <input 
                          type="text" 
                          required
                          value={reviewerName}
                          onChange={(e) => setReviewerName(e.target.value)}
                          className="form-input" 
                        />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input 
                          type="email" 
                          required
                          value={reviewerEmail}
                          onChange={(e) => setReviewerEmail(e.target.value)}
                          className="form-input" 
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products-section mt-5">
          <h2 className="section-title text-left">Related Products</h2>
          <div className="grid-2-col mt-4">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="card related-card">
                <div className="related-info">
                  <h3>{rel.title}</h3>
                  <span className="price">{rel.price} EGP / Month</span>
                  <p>{rel.description}</p>
                </div>
                <div className="related-action">
                  <Link to={`/product/${rel.id}`} className="btn btn-secondary">
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
