import React, { useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DateRange.css';
import Holiday from '../Holiday/Holiday';
const DateRange = ({ datecollection }) => {
  const [details, setDetails] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  console.log(details)
  const convertDate = (dt) => {
    let date = new Date(dt); // M-D-YYYY

    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();

    return y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
  }
  useEffect(() => {
    let startDate = convertDate(state[0].startDate);
    let endDate = convertDate(state[0].endDate);
    const matchedDate = datecollection.filter((item) => (
      item.date >= startDate && item.date <= endDate
    ));
    setDetails(matchedDate);
   
  }, [state]);

 
  return (
    <div className="container">
      <DateRangePicker
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
        <Row className="py-3 my-2">
      {
        details.map((item) =>(
          <Col md={6} sm={6} className="my-2">
          <Holiday item={item}></Holiday></Col>
          ))
      }
      </Row>
    </div>
  );
};

export default DateRange;