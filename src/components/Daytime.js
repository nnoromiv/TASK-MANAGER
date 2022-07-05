import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Daytime = () => {
  const [date, setDate] = useState(new Date());

  return(
    <div>
    <DatePicker selected={date} 
   onChange={date => setDate(date)} dateFormat= "d MMMM, yyyy" filterDate = { (d) => {return (
      new Date() === d
      )}}/>
      <div>Auto Selected = {date ? date.toDateString() : null}</div>
    </div>
  )
}
export default Daytime;














//   let separator = '-'
  //   let newDate = new Date()
  //   let date = newDate.getDate();
  //   let month = newDate.getMonth()
  //   let year = newDate.getFullYear();
  // return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`