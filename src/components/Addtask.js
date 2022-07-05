import { useState } from "react"
import Daytime from "./Daytime"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../lib/init-firebase"

const Addtask = ({ onAdd}) => {
        const [jobName, setJobName] = useState('')
        const [jobReferenceIndex, setJobReferenceIndex] = useState('')
        const [interviewersName, setInterviewersName] = useState('')
        const [candidatesName, setCandidatesName] = useState('')
        const [deptUnitName, setDeptUnitName] = useState('')
        const [telephoneNum, setTelephoneNum] = useState('')
        const [emailAddress, setEmailAddress] = useState('')
        const [locationName, setLocationName] = useState('')
        const [compensationDetails, setCompensationDetails] = useState('')
        const [nYSC, setNYSC] = useState(false)
        const [keyCompetencies, setKeyCompetencies] = useState('')
        const [otherDetails, setOtherDetails] = useState('')
        const [noticePeriod, setNoticePeriod] = useState('')
        const [overviewComments, setOverviewComments] = useState('')
        const [isRecommended, setIsRecommended] = useState(false)
        const [reasonForRecommendation, setReasonForRecommendation] = useState('')
        const [approvedBy, setApprovedBy] = useState('')
        const [concurredBy, setConcurresBy] = useState('')
        
        // const [day, setDay] = useState('')
        const [isReminder, setIsReminder] = useState(false)

        const onSubmit = (e) => {
            e.preventDefault()
            if (!jobName || !jobReferenceIndex){
                alert('Please add to empty box')
                return
            }
            const taskColRef = collection(db, 'tasks')
            addDoc(taskColRef, { jobName, jobReferenceIndex, interviewersName, candidatesName, deptUnitName, telephoneNum, emailAddress, locationName, compensationDetails, nYSC, keyCompetencies, otherDetails, noticePeriod, overviewComments, isRecommended, reasonForRecommendation, approvedBy, concurredBy}).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error.message)
            })
            onAdd({ jobName, jobReferenceIndex, interviewersName, candidatesName, deptUnitName, telephoneNum, emailAddress, locationName, compensationDetails, nYSC, keyCompetencies, otherDetails, noticePeriod, overviewComments, isRecommended, reasonForRecommendation, approvedBy, concurredBy})


            setJobName('')
            setJobReferenceIndex('')
            setInterviewersName('')
            setCandidatesName('')
            setDeptUnitName('')
            setTelephoneNum('')
            setEmailAddress('')
            setLocationName('')
            setCompensationDetails('')
            setNYSC(false)
            setKeyCompetencies('')
            setOtherDetails('')
            setNoticePeriod('')
            setOverviewComments('')
            setIsRecommended(false)
            setReasonForRecommendation('')
            setApprovedBy('')
            setConcurresBy('')
            // setDay('')
            setIsReminder(false)
        }
    
  return (
      <form action="" className="add-form" onSubmit={onSubmit}>
         <div className="grid-one">
         <div className="form-control">
              <label htmlFor="">Job Name</label>
              <input type="text" name="" id="" placeholder="Job Name" value={jobName} onChange={(e)=> setJobName(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Job Reference Indicator</label>
              <input type="text" name="" id="" placeholder="Job Reference Indicator"  value={jobReferenceIndex} onChange={(e)=> setJobReferenceIndex(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Name of Interviewer</label>
              <input type="text" name="" id="" placeholder="Interviewer's name" value={interviewersName} onChange={(e)=> setInterviewersName(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Candidate Name</label>
              <input type="text" name="" id="" placeholder="Canditate's name" value={candidatesName} onChange={(e)=> setCandidatesName(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Department/Unit</label>
              <input type="text" name="" id="" placeholder="Department or unit" value={deptUnitName} onChange={(e)=> setDeptUnitName(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Telphone Number</label>
              <input type="tel" name="" id="" placeholder="Phone number" value={telephoneNum} onChange={(e)=> setTelephoneNum(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Email address</label>
              <input type="email" name="" id="" placeholder="E-mail address" value={emailAddress} onChange={(e)=> setEmailAddress(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Location</label>
              <input type="text" name="" id="" placeholder="Location" value={locationName} onChange={(e)=> setLocationName(e.target.value)}/>
          </div>
         </div>
          {/* <div className="form-control">
              <label htmlFor="">Day & Time</label>
              <input type="text" name="" id="" placeholder= "" value={day} onChange={(e) => setDay
              (e.target.value)} />
          </div> */}
          <div className="form-control">
              <label htmlFor="">Compensation Details</label>
              <textarea type="text" maxLength={500} id="" placeholder="Compensation Details" value={compensationDetails} onChange={(e)=> setCompensationDetails(e.target.value)}/>
          </div>
          <div className="grid-two">
          <div className="form-control form-control-nysc">
              <label htmlFor="">NYSC completed?</label>
              <input type="checkbox" name="" id=""  checked={nYSC}  value={nYSC} onChange={(e) => setNYSC(e.currentTarget.checked)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Candidate Key Competencies</label>
              <textarea type="text" name="" id="" placeholder="Candidate Key Competencies" value={keyCompetencies} onChange={(e)=> setKeyCompetencies(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Other Areas Candidate can fit into</label>
              <textarea type="text" name="" id="" placeholder="Areas Candidate can fit into" value={otherDetails} onChange={(e)=> setOtherDetails(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Notice Period Required</label>
              <textarea type="text" name="" id="" placeholder="Notice Period" value={noticePeriod} onChange={(e)=> setNoticePeriod(e.target.value)}/>
          </div>
          </div>
          <div className="form-control">
              <label htmlFor="">Candidate Overview and Comments</label>
              <textarea type="text" name="" id="" placeholder="Candidate Overview and Comments" value={overviewComments} onChange={(e)=> setOverviewComments(e.target.value)}/>
          </div>
          <div className="form-control form-control-recommended">
              <label htmlFor="">Candidate Recommended?</label>
              <input type="checkbox" name="" id="" checked={isRecommended}  value={isRecommended} onChange={(e) => setIsRecommended(e.currentTarget.checked)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Reason for Recommendation or Rejection</label>
              <textarea type="text" name="" id="" placeholder="Reason for Recommendation or Rejection" value={reasonForRecommendation} onChange={(e)=> setReasonForRecommendation(e.target.value)}/>
          </div>
          <div className="grid-three">
          <div className="form-control">
              <label htmlFor="">Approved by</label>
              <textarea type="text" name="" id="" placeholder="Signature and Date here" value={approvedBy} onChange={(e)=> setApprovedBy(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Concurred by</label>
              <textarea type="text" name="" id="" placeholder="Signature and Date here" value={concurredBy} onChange={(e)=> setConcurresBy(e.target.value)}/>
          </div>
          <div className="form-control">
              <label htmlFor="">Date Interviewed</label>
              <Daytime />
          </div>
          <div className="form-control form-control-check">
              <label htmlFor="">Display full</label>
              <input type="checkbox" name="" id="" checked={isReminder}  value={isReminder} onChange={(e) => setIsReminder(e.currentTarget.checked) } />
          </div>
          </div>
          <input type="submit" value="Save Job interview" className="btn btn-block" />
      </form>
  )
}

export default Addtask