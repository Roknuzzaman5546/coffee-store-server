
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffeecard from './Companents/coffeecard'
import { useState } from 'react'

function App() {
  const loadedcoffees = useLoaderData()
  const [coffees, setCoffes] = useState(loadedcoffees);

  return (
    <div>
      <h1 className=' text-2xl text-center font-bold text-red-500'>All Coffee{coffees.length}</h1>
        <div className=' grid md:grid-cols-2 gap-2'>
          {
            coffees.map(coffee => <Coffeecard 
              key={coffee._id} 
              coffee={coffee}
              setCoffes={setCoffes}
              coffees={coffees}
              ></Coffeecard>)
          }
        </div>
    </div>
  )
}

export default App
