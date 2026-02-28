import React from 'react';

const Country = ({country}) => {
 console.log(country.flags.flags)
  return (
    <div>

     
     <img src={country.flags.flags.png} alt="" />
     <h4>Name :{country.name.common} </h4>
     <p>population : {country.population.population}</p>
  
    </div>
  );
};

export default Country;