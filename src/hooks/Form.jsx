import React, { useState } from 'react'

const Form = () => {
    const [form,setForm]=useState({
        name:"",
        age:"",
        email:"",
    })
    const handleChanges=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value 
        })
    }
    const handlesubmit=()=>{
        e.preventDefault();
        console.log(form);
    }
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handlesubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={form.name} onChange={handleChanges}/><br />
            <label htmlFor="age">Age:</label>
            <input type="text" name="age" value={form.age} onChange={handleChanges}/><br />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={form.email} onChange={handleChanges}/><br />
            <button type="button">Submit</button>
        </form>
    </div>
  )
}

export default Form