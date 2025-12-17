import UserInfo from "./UserInfo";

// Parent Component
function UserProfile() {
  const users = [
    { name: "Pooja", age: 22 },
    { name: "Rahul", age: 25 },
    { name: "Anita", age: 28 }
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      {users.map((user, index) => (
        <UserInfo key={index} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserProfile;
