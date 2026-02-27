import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countryFetch}) => {
  const data = use(countryFetch);
  const countries = data.countries;
  console.log(countries);
  return (
    <div>
      {
      countries.map(country => <Country country={country} ></Country>)
      }
       
      
    </div>
  );
};

export default Countries;