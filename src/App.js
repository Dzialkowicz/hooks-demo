import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart'

const items = [
  {id: 1, name: 'Taco srako', price: 21.2, qty: 4},
  {id: 2, name: 'Bulka', price: 111.2, qty: 1},
  {id: 3, name: 'Ser', price: 35.54, qty: 5},
]
function App() {
  return (
    <div>
      <Cart initialItems={items}/>
      <Counter step={5}/>
      <Counter/>
      <MoodToggler/>
      <Navbar/>
      <h1>Olaaa</h1>
      <Greeter name="Karen" age="62" excitement={4} />
      <Greeter name="Timmy" age="27" excitement={2} />
    </div>
  );
}

export default App;
