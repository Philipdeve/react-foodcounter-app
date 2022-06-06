import React, {useState} from 'react';
import List from './components/List';
import { foodData } from './foodData';




function App() {
  const [foodCount, setFoodCount] = useState(foodData)
 
  return (
    <main>
      <h1>Food Counter App By Philip Ifeanyi</h1>
      <section className='container'>
      <h3 className='h3item'>{foodCount.length} Food Counted for today</h3>
        <List foodCount={foodCount}  setFoodCount={setFoodCount} />
      </section>
      <button className='btnitem' onClick={() => setFoodCount([])}>Clear all</button>
    </main>
  );
}

export default App;
