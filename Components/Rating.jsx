const Rating = ({ rating }) => {
    return (
      <div className="feedback-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
    );
  };
  
  export default Rating;