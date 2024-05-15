import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function AddData() {
    let [name,setname] = useState("")
    let [time,settime] = useState("")
    let [topics,settopics] = useState("")
    let [subject,setsubject] = useState("")
    let [room,setroom] = useState("")

    let data = {name,time,topics,subject,room}
    function Additem(e) {
        e.preventDefault();
        axios.post('http://localhost:1000/Users', data)
            .then((res) => {
                console.log(res);
               toast.success("Trainer Task Has been added Successfully")
            })
            .catch((err) => {
                toast.error("Error in adding the Task")
                console.log(err);
            })
    }
    return (
        <div className="data">
            <form onSubmit={Additem} action="">
                <label htmlFor="">Trainer Name</label><input value={name} placeholder='Enter the Trainer Name' onChange={(e)=>{setname(e.target.value)}} required type="text" />
                <label htmlFor="">Room No</label><input value={room} placeholder='Enter the Room Number' onChange={(e)=>{setroom(e.target.value)}} required type="text" />
                <label htmlFor="">Subject</label><input value={subject} placeholder='Enter the Subject Name' onChange={(e)=>{setsubject(e.target.value)}} required type="text" />
                <label htmlFor="">Topics</label><input value={topics} placeholder='Enter the Topics Name' onChange={(e)=>{settopics(e.target.value)}} required type="text" />
                <label htmlFor="">Time</label>
                <select onChange={(e)=>{settime(e.target.value)}} required >
                <option>8:30</option>
                <option>10:30</option>
                <option>1:30</option>
                <option>4:30</option>
                <option>6:30</option>
                </select>
                <button className='btn btn-outline-success'>Submit</button>
            </form>
        </div>
    )
}

export default AddData
