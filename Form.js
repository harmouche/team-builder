import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const theMembers = [
    {id: uuid(), name: 'Henry', email: 'henry@gmail.com', role: 'Frontend Developer'},
    {id: uuid(), name: 'Jeff', email: 'jeff@gmail.com', role: 'Backend Developer'}

]
function TeamMembers () {
const [members, setMembers] = useState (theMembers)
console.log(theMembers);
const [formValues, setFormValues] = useState({
name: '',
email: '',
role: ''

})

const inputChange = event => {

    const changeName = event.target.name;
    const changeValue = event.target.value;
    setFormValues ({
        ...formValues,
        [changeName]: changeValue,
    })
}

const formSubmit = event => {
    event.preventDefault();

    const newMember = {
        id: uuid(),
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
    }

    setMembers([...theMembers, newMember])
}

    return (
        <div>
        <form onSubmit={formSubmit}>
            <label>
                'Name'
                <input 
                onChange={inputChange}
                value={formValues.name}
                name="name"
                 />
                
            </label>
        
            <label>
                'Email'
                <input 
                onChange={inputChange}
                value={formValues.email}
                name="email"
                 />
                
            </label>
        
            <label>
                'Role'
                <input 
                onChange={inputChange}
                value={formValues.role}
                name="role"
                 />
                
            </label>
            <input 
    type='submit'
    /> 
        </form>
        <h3>List of friends:</h3>
  {
    members.map(fr => <div key={fr.id}>{fr.name} {fr.email} {fr.role}</div>)
  }
    </div>
    )
};

//<div></div>
export default TeamMembers