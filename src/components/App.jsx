import userData from '/src/userData.json';
import Profile from './Profile';
console.log(userData);

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
