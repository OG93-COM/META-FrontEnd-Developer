import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([])

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=2')
    .then(res => {
      if (!res.ok) throw new Error(`My Error : ${res.status} - ${res.statusText}`)
      return res.json()
    })
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
      <p>Full Name: <span style={{fontWeight:"600"}}>{user.results[0].name.first} {user.results[0].name.last}</span> </p>
      <p>Email: <span style={{fontWeight:"600"}}>{user.results[0].email}</span></p>
      
    </div>
  ) : (
    <h1>Data pending...</h1>
  );

}

export default App;
