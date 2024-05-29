import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([])

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => {
      setUser(data);
      console.log(data)
    })
    .catch(err => console.log(err))
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <img src={user.results[0].picture.medium} style={{borderRadius:"50%" , border:"2px solid grey"}} alt={user.results[0].gender + " Picture"}/>
      <p>{user.results[0].name.first}</p>
      <p>{user.results[0].name.last}</p>
      <p>{user.results[0].email}</p>
      
    </div>
  ) : (
    <h1>Data pending...</h1>
  );

}

export default App;
