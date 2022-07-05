import {FaTimes, FaWindowMaximize} from 'react-icons/fa'
import { useRef, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ReactToPrint from 'react-to-print'

const Task = ({ task,  onDelete,  onToggle}) => {
  const componentRef = useRef();
  const [date, setDate] = useState(new Date());  
  <DatePicker selected={date} 
   onChange={date => setDate(date)} dateFormat= "d MMMM, yyyy" filterDate = { (d) => {return (
      new Date() === d
      )}}/>
  return (
    <div className="head">
    <div className="header">
    <ReactToPrint
    trigger={() => {
      return <button className="btn"> Print </button>
    }}
    content= {() => componentRef.current}
    documentTitle = 'Interview'
    pageStyle= "print"
    />
     <FaTimes  onClick={ () => {onDelete(task.id)}}/>
    </div>
    <div ref={componentRef}>
    <h3>
    {`Candidates name: ` + task.data.candidatesName}{` and `} {`Interviewer's name: ` + task.data.interviewersName}{' '}
    </h3>
    <h4>
      {task.data.jobName} {`With a Job reference indicator: `}{task.data.jobReferenceIndex}
    </h4>
    <h4>
      {`Candidates Contacts: `}
      <p>
      {task.data.telephoneNum}{`   , `} {task.data.emailAddress}
      </p>
    </h4>
    <h4>
      {`Address: `}
      <p>{task.data.locationName}</p>
      </h4>
      <FaWindowMaximize className="show"  onClick={() => {onToggle(task.id)}}/>
      <div  className="task" onClick={() => { onToggle(task.id);}} style={{  display: 'grid',    backgroundColor: '#f4f4f4', margin: '5px', padding: '10px 20px', cursor: 'pointer', border: '1px solid white', borderRadius: '10px', borderLeft: '5px solid green',}}>
      <h4>
    {`Compensation Details:`}
    <p>
    {task.data.compensationDetails}
    </p>
    </h4>
    <h4>
    {`Key Competencies: `}
    <p>
    {task.data.keyCompetencies}
    </p>
    </h4>
    <h4>
    {`Other fields: `}
    <p>
    {task.data.otherDetails}
    </p>
    </h4>
    <h4>
    {`Notice Period: `}
    <p>
    {task.data.noticePeriod}
    </p>
    </h4>
    <h4>
    {`Overview & Comments: `}
    <p>
    {task.data.overviewComments}
    </p>
    </h4>
    <h4>
    {`Recommendation / Rejection reason`}
    <p>
    {task.data.reasonForRecommendation}
    </p>
    </h4>
      </div>
    <h4>
    <div>{date ? date.toDateString() : null}</div>
    </h4>
    </div>
    </div>
  )
}

export default Task
