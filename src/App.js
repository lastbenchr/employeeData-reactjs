import React, { useContext, useState, useEffect } from 'react';
import { EmployeeContext} from './EmployeeContext';
import Header from "./MyComponents/Header";
import Mid from "./MyComponents/Mid";
import UserCard from "./MyComponents/User-card";


function App() {
  
  const [users, setUsers] = useContext(EmployeeContext);
  const [selectedCard, setSelectedCard] = useState();
  
  
  function defaultUser() {
    setSelectedCard(users[0]);
  }
  
  useEffect(()=>{
    defaultUser();
  },[])
  
  return (
    <>
      <Header />
      {selectedCard && <Mid selectedCard={selectedCard}/> }
      <UserCard setSelectedCard={setSelectedCard}/>
    </>
  );
}

export default App;
