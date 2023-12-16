import './App.css';
import { useEffect, useState } from 'react';
import { Posts } from './containers/Posts';
import Comments from './containers/Comments';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])


  return (
    <div className="App">
      {/* <button >Push</button> */}

      {/* {users.map(user =>
        <li key={user.id}>{user.name}</li>
      )} */}

      <h1>Task 1: posts & comments</h1>
      <Posts data={posts} />
      <Comments />
    </div>
  );
}

export default App;
