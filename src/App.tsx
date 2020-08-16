import React from 'react';
import './App.css';
import { Store } from './Interfaces/Store';
import Categories from './Components/Categories';


type AppProps = {
  store: Store
}

function App({store}: AppProps) {
  return (
    <div className="App">
      <header className="header"> AlzaStore </header>
      <Categories categories={store.getCategories()}/>
    </div>
  );
}

export default App;
