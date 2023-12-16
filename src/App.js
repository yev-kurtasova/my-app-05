import './App.css';
import { useEffect, useState } from 'react';
import { Posts } from './containers/Posts';
import Comments from './containers/Comments';
import Inputs from './containers/Inputs';
import { Child } from './containers/Child';


function App() {

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(5);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  const changeSeconTask = () => {
    setValue(value + 5);
  }

  useEffect(() => {
    console.log({value});
  }, [value])

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
      
      <h1>Task 2</h1>
      {/* <p>{value}</p> */}
      <button onClick={changeSeconTask}>Change state</button>
      
      <h1>Task 3: Child Component</h1>
      <Child />
    </div>
  );
}

export default App;
