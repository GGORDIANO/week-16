import React from 'react'

export default function Table({users, deleteUser, updateUser, handleUpdatedName}) {
    return (
    <table className="myTable">
        <caption>All open Cases</caption>
        <thead>
            <tr>
                <th>Case Number</th>
                <th>Contact Name</th>
                <th>Subject</th>
                <th>Type</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Case Owner</th>
                <th>Delete User</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.caseNumber}</td>
                    <td>{user.name}</td>
                    <td>{user.subject}</td>
                    <td>{user.type}</td>
                    <td>{user.status}</td>
                    <td>{user.priority}</td>
                    <td>{user.date}</td>
                    <td>{user.caseOwner}</td>
                    <td>
                        <button onClick={() => deleteUser(user.id)}>🗑</button>
                    </td>
                    <td>
                        <input onChange ={(e) => handleUpdatedName(e.target.value)} placeholder="Enter New Name"></input>
                        <button onClick={(e) => updateUser(user)}>✎</button>
                    </td>
                

                </tr>
            ))}
        </tbody>
    </table>
    )
}
