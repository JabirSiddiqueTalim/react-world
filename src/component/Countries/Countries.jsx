import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryFetch}) => {
  const data = use(countryFetch);
  const countries = data.countries;
  // console.log(countries);
  const [visitedCountry,setVisitedCountry]=useState([]);
  const handleVisitedCountry=(country)=>
  {
    //  setVisitedCountry=visitedCountry+1;
     //console.log(country)
     const checkElement =visitedCountry.indexOf(country);

     if(checkElement==-1)
     {
      const newVisitedCountry=[...visitedCountry,country];
     setVisitedCountry(newVisitedCountry);

     }else
     {
      const rmvnewVisitedCountry=visitedCountry.filter(visitCountry=>visitCountry!=country);
      console.log("rmvnewVisitedCountry");
      console.log(rmvnewVisitedCountry);

      const newVisitedCountry=[...rmvnewVisitedCountry];
      setVisitedCountry(newVisitedCountry);
 


     }
     
  }
  return (
    <div>
      <h1>Traveling Countries</h1>
      <h2>Visited Countries :{visitedCountry.length} </h2>
      <ul>
         {
          visitedCountry.map(country => <li>{country.name.common}</li> )
         }
      </ul>
      <div className='countries'>
      {
      countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry} ></Country>)
      }
      </div>
      
       
      
    </div>
  );
};

export default Countries;