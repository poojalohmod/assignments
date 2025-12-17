function MessageCard({ title, message }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "12px", 
      margin: "10px", 
      width: "250px" 
    }}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
