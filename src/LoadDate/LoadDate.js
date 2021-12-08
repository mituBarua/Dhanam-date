import React, { useEffect, useState } from "react";
import DateRange from "../DateRange/DateRange";
const LoadDate = () => {
  const [dateLoad, setDateLoad] = useState([]);
 
  useEffect(() => {
    fetch("https://www.gov.uk/bank-holidays.json")
      .then((res) => res.json())
      .then((result) => setDateLoad(result["england-and-wales"].events));
  }, []);
   let arr = [];


  return (
    <div>
     {dateLoad.map((dates) => (
        arr.push(dates)
        
      ))}
      <DateRange key={dateLoad.id} datecollection={arr}></DateRange>
     </div>
    
  );
};

export default LoadDate;
