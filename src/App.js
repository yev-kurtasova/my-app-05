import './App.css';
import { useEffect, useState } from 'react';
import { Posts } from './containers/Posts';
import Comments from './containers/Comments';
import Inputs from './containers/Inputs';


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

      <h1>Posts & comments</h1>
      <Posts data={posts} />
      <Comments />

      <h1>Task 1: inputs</h1>
      <Inputs />
    </div>
  );
}

export default App;
