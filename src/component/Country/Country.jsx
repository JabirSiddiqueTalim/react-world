import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry}) => {
//  console.log(country.flags.flags)
const [visited,setVisited]=useState(false);
function clickVisitBtn()
{
  setVisited(!visited);
  handleVisitedCountry(country);
  
}
  return (
    <div className={`country && ${visited && 'visited-country'}`} >

     
     <img src={country.flags.flags.png} alt="" />
     <h4>Name :{country.name.common} </h4>
     <p>population : {country.population.population}</p>
     <button onClick={clickVisitBtn}> {visited ? 'Visited':'Not Visited'}</button>
  
    </div>
  );
};

export default Country;