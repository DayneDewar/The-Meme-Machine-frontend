// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import MemeContainer from "./MemeContainer";
import NavBar from './NavBar';
import FavoriteMeme from "./FavoriteMeme"
import { useEffect, useState } from 'react';


function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/favorites')
      .then(res => res.json())
      .then(data => setFavorites(data))
  }, []) 


  function handleNewFavorite(newFavorite) {
    const updatedFavorites = [...favorites, newFavorite]
    setFavorites(updatedFavorites)
  }
  
  return (
    <section className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path="/favorites">
          <FavoriteMeme setFavorites={setFavorites} favorites={favorites}/>
        </Route>
        <Route path="/">
          <MemeContainer handleNewFavorite={handleNewFavorite} />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
