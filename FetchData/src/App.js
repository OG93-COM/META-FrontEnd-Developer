import { useEffect, useState } from 'react';
import './App.css';
import { useReducer } from 'react';

function App() {
  const [user, setUser] = useState([])

  const reducer = (state,action) =>{
    if (action.type == "Plus") return {count : state.count + 1};
    else if ( action.type =="Mins" && state.count > 0) return {count : state.count - 1};
    else if (action.type =="Reset") return {count : 0}
    else return state
  }

  const initialState = {count:0};
  const [state,dispatch] = useReducer(reducer,initialState)

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
      <button onClick={()=> dispatch({type:"Plus"})}>PLus</button>
      <button onClick={()=> dispatch({type:"Mins"})}>Mins</button>
      <button onClick={()=> dispatch({type:"Reset"})}>Reset</button>
      <span>{state.count}</span>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );

}

export default App;
