import React from 'react';

const List = ({ foodCount, setFoodCount }) => {

  const removeItem = (id) => {
    let deleteFood = foodCount.filter((food) => food.id !== id);
    setFoodCount(deleteFood);
  };
  return (
     <>
      {foodCount.map((food) => {
        const {id, image, label} = food
        return (
          
          <article key={id} className='food'> 
          
            <img src={image} alt="Food" />         
              <h4>{label}</h4>
              <button onClick={() => {
                removeItem(id)
              }}>Delete Item</button>
              
          </article>
        
        );
      })}
    </>
   
  );
};

export default List;
