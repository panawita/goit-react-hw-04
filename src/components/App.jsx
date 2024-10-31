import userData from '/src/userData.json';
console.log(userData);
import Profile from './Profile';

import friends from '../friends.json';
import FriendList from './FriendList';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
