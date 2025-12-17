import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h2>Reusable Message Cards</h2>
      <MessageCard title="Welcome" message="This is the first message card." />
      <MessageCard title="Reminder" message="Don’t forget to submit your assignment!" />
      <MessageCard title="Update" message="React project deadline extended to Friday." />
      <MessageCard title="Note" message="Props make components reusable and dynamic." />
    </div>
  );
}

export default App;

