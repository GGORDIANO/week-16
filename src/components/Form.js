import React from 'react'
export default function Form({postUser, handleCaseNumber, handleName, handleSubject, handleType, handleStatus, handlePriority, handleDate, handleCaseOwner}) {
    return (
    <form onSubmit={(e) => postUser(e)} className="myForm">
        <h3>Create a New Case</h3>
        <label>Case Number</label>
        <input onChange={(e) => handleCaseNumber(e.target.value)} />
        <label>Contact Name</label>
        <input onChange={(e) => handleName(e.target.value)} />
        <label>Subject</label>
        <input onChange={(e) => handleSubject(e.target.value)}/>
        <label>Type</label>
        <input onChange={(e) => handleType(e.target.value)}/>
        <label>Status</label>
        <input onChange={(e) => handleStatus(e.target.value)}/>
        <label>Priority</label>
        <input onChange={(e) => handlePriority(e.target.value)}/>
        <label>Date</label>
        <input onChange={(e) => handleDate(e.target.value)}/>
        <label>Case Owner</label>
        <input onChange={(e) => handleCaseOwner(e.target.value)}/>
        <button>Submit</button>
    </form>
    )
}