import React from 'react'
import { useStore2 } from './useSore2'
import { useEffect , useState } from 'react'

const Seafood = () => {
const { meals , searchQuery , setMeals, setSearchQuery} = useStore2();

useEffect(()=>{
  const fetchMeals = async () =>{
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      const data = await response.json();
      setMeals(data.meals)
    } catch (error) {
      console.log(error);
      
    }
  }
  fetchMeals();
}, [setMeals])

const filterMeals = meals.filter((meal) =>meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div className="flex items-center min-h-screen min-w-screen p-2 flex-col bg-teal-200">
      <h1 className="text-3xl font-bold underline">Sea Food Recipes</h1>

      <input
        type="text"
        name=""
        placeholder="Search Recipe..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        id=""
        className="m-4 px-4 py-2 rounded-lg w-[20rem] focus:outline-teal-600 "
      />

      <div className="m-8 ">
        {filterMeals.length > 0 ? (
          filterMeals.map((meal) => (
            <div className="w-72 h-80 p-4 border border-gray-600 rounded-2xl flex flex-col items-center"
            key={meal.idMeal}
            >
              <img src={meal.strMealThumb} alt="" className='w-full h-48 object-cover rounded-lg mb-4' />
              <h2 className="">{meal.strMeal}</h2>
              <p className="text-sm text-gray-600">Delicious SeaFood meal.</p>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-bold">No Meals Found...</h1>
        )}
      </div>
    </div>
  );
}

export default Seafood