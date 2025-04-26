function FeedbackForm({ onAddFeedback }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [comment, setComment] = React.useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (!name || !email || !comment) {
        alert("Please fill all fields!");
        return;
      }
      if (!email.includes("@")) {
        alert("Please enter a valid email!");
        return;
      }
  
      onAddFeedback({ name, email, comment });
      setName("");
      setEmail("");
      setComment("");
      alert("Feedback submitted successfully!");
    };
  
    return (
      <form onSubmit={submitHandler} className="feedback-form">
        <h2>Submit Feedback</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
  