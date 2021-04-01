// import logo from './logo.svg';
import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import MemeContainer from "./MemeContainer";
import NavBar from './NavBar';
import FavoriteMeme from "./FavoriteMeme"
import Login from './Login';
import Signup from './Signup';


function App() {
  const [favorites, setFavorites] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentId, setCurrentId] = useState();
  console.log(loggedIn)
  console.log(currentId)

  function fetchFavorites() {
      fetch(`http://localhost:3001/favorites/`)
      .then(res => res.json())
      .then(data => {
        const filteredFavs = data.filter((fav) => fav.user.id === currentId)
        setFavorites(filteredFavs)})
  } 

  function handleNewFavorite(newFavorite) {
    const updatedFavorites = [...favorites, newFavorite]
    setFavorites(updatedFavorites)
  }

  if (loggedIn) {
  fetch('http://localhost:3001/logged_in')    
  .then(r => r.json())
  .then(data => {
      if (data.logged_in) {
        handleLogin(data)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  function handleLogin(user) {
    console.log(user)
    setLoggedIn(true)
    setCurrentId(user.id)
  }

  function handleLogout() {
    console.log('log out')
    setLoggedIn(false)
    setCurrentId(0)
  }

  return (
    <section className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/favorites">
          <FavoriteMeme setFavorites={setFavorites} favorites={favorites} callFavorites={fetchFavorites}/>
        </Route>
        <Route exact path="/">
          <MemeContainer currentId={currentId} handleNewFavorite={handleNewFavorite} />
        </Route>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} fetchFavorites={fetchFavorites}/>
        </Route>
        <Route exact path="/signup">
          <Signup handleLogin={handleLogin}/>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
