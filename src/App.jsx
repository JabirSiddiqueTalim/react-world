
import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries/Countries'

function App() {
  const countryFetch=fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());
  
 

  return (
    <>
    <Suspense fallback={<h3>
        Wait a min.........
    </h3>}>
    <Countries countryFetch={countryFetch}></Countries>
    </Suspense>
    
      
    </>
  )
}

export default App
