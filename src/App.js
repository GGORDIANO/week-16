import './App.css';
import Table from './components/Table'
import {useState, useEffect} from 'react'
import Form from './components/Form'

function App() {
  const MOCK_API_URL = 'https://652ea5bd0b8d8ddac0b1ba52.mockapi.io/user'



  const [users, setUsers] = useState([
    {
      caseNumber: '',
      contactName: '',
      Subject: '',
      Type: '',
      Status: '',
      Priority: '',
      Date: '',
      caseOwner: '',
  },
])

const [newUser, setNewUser] = useState({
  caseNumber: '',
  contactName: '',
  Subject: '',
  Type: '',
  Status: '',
  Priority: '',
  Date: '',
  caseOwner: '',
})

const [updatedName, setUpdatedName] = useState('')

function handleUpdatedName(updatedNameValue) {
  console.log(updatedNameValue)
setUpdatedName(updatedNameValue)
}

function handleCaseNumber (caseValue) {
  setNewUser({
    ...newUser,
    caseNumber: caseValue,
  })


}

function handleName (nameValue) {
  setNewUser({
    ...newUser,
    name: nameValue,
  })
}

function handleSubject (subjectValue) {
  setNewUser({
    ...newUser,
    subject: subjectValue,
  })

}

function handleType (typeValue) {
  setNewUser({
    ...newUser,
    type: typeValue,
  })

}

function handleStatus (statusValue) {
  setNewUser({
    ...newUser,
    status: statusValue,
  })

}

function handlePriority (priorityValue) {
  setNewUser({
    ...newUser,
    priority: priorityValue,
  })

}

function handleDate (dateValue) {
  setNewUser({
    ...newUser,
    date: dateValue,
  })

}

function handleCaseOwner (ownerValue) {
  setNewUser({
    ...newUser,
    caseOwner: ownerValue,
  })

}



useEffect(() => {
fetch(MOCK_API_URL)
.then((data) => data.json())
.then((data) => setUsers(data))
}, [])


const getUsers = () => {
  console.log('doing getUsers function')

  fetch(MOCK_API_URL)
  .then((data) => data.json())
  .then((data) => setUsers(data))

}

const postUser = (e) => { //we have a function called postUser that prevents it from refreshing it also fetches and post new user to API
  e.preventDefault()
  console.log('doing postUser...')

  fetch(MOCK_API_URL, {
    method: 'Post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser),
  }).then(() => getUsers())
}

const deleteUser = (id) => {
  console.log('Deleting user...')

  fetch(`${MOCK_API_URL}/${id}`, {
    method: 'DELETE',
  }).then(() => getUsers())
}

const updateUser = (user) => {
  console.log('Updating user name...')
  let updatedUser = user
  updatedUser.name = updatedName
  console.log(updatedUser)
  
  fetch(`${MOCK_API_URL}/${user.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedUser)
  }).then(() => getUsers())
}

  return (
    <div className="App">
      <Form 
      postUser={postUser}
      handleCaseNumber={handleCaseNumber} 
      handleName={handleName} 
      handleSubject={handleSubject} 
      handleType={handleType} 
      handleStatus={handleStatus} 
      handlePriority={handlePriority} 
      handleDate={handleDate} 
      handleCaseOwner={handleCaseOwner} 
      />
    <Table 
    handleUpdatedName={handleUpdatedName} 
    updateUser={updateUser} 
    deleteUser={deleteUser} 
    users={users} 
    />
    </div>
  );
}

export default App;
