import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])



  return (
    <div className="App">
      {/* <button >Push</button> */}

      {users.map(user =>
        <li key={user.id}>{user.name}</li>
      )}
    </div>
  );
}

export default App;
