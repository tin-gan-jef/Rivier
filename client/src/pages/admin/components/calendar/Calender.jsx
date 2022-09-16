import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './calendar.css'


export default function Calenda() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar className='calendar'
      value={dateState}
      onChange={changeDate}
      />
    </>
  )
}