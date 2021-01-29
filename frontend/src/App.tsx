import React, { useState, useEffect } from 'react';

import Restaurants from './components/Restaurants';
import { SectionType } from './types';
import restaurantsServices from './services/restaurants';

function App() {
  const [restaurants, setRestaurants] = useState<SectionType[]>([]);

  useEffect(() => {
    const asyncFunc = async () => {
      const data = await restaurantsServices.getAll();
      setRestaurants(data);
    };
    asyncFunc();
  }, []);

  return (
    <div>
      <h1>Popular Restaurants</h1>
      <Restaurants lists={restaurants[0]?.restaurants} />
      <h1>New Restaurants</h1>
      <Restaurants lists={restaurants[1]?.restaurants} />
      <h1>Nearby Restaurants</h1>
      <Restaurants lists={restaurants[2]?.restaurants}/>
    </div>
  );
}

export default App;
