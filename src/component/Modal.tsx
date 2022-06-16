import React from 'react'
import { useState } from 'react';
import Form from "react-bootstrap";
import { userSchema } from 'App';
import "./Modal.css";
import { ChangeEvent } from 'react';


function Modal({data}, editData, setEditData, handleEditData, setOpenModal, handleEditClick, handleEditSubmit,editID) {
  function handleCancelClick () {
   setOpenModal(false);
  };
 /* const handleEditFormChange = (e:ChangeEvent) => {
     e.preventDefault();
  
     const fieldName = (e.target as HTMLInputElement).getAttribute("name");
     //const fieldName = event.target.getAttribute("name");
     //const fieldName = event.target.value
     console.log(fieldName)
     //const fieldValue=(e.target as HTMLInputElement)attributes.getNamedItem("name").value;
     const fieldValue=(e.target as HTMLInputElement).value;
   console.log(fieldValue)
   
     //const fieldValue = event.target.value as HTMLElement;
   
     const newData = { ...editData };
     newData[fieldName] = fieldValue;
   
     setEditData(newData);
   }; 
*/
// <tr id={`tr-${i}`} >
  return (
    <div>

{ data.map((item:userSchema) => (
   <tr>
   <td><input type="text"  placeholder="Enter a name" name="name"  onChange={handleEditClick("first_name")}/></td>
   <td><input type="text" placeholder="Male or Female" name="gender"  onChange={handleEditClick("gender")}/></td>
   <td> <input type="text" placeholder="Enter the education" name="education" onChange={handleEditClick("education")}/></td>
   <td><input type="text"  placeholder="Enter the job title" name="job"  onChange={handleEditClick("job_title")}/></td>
   <td><input type="number" placeholder="Enter the age" name="age"  onChange={handleEditClick("age")} /></td> 
   <td><input type="text"  name="country" placeholder="Enter the country" onChange={handleEditClick("country")} /></td>
   <td><input type="email"  placeholder="Enter the email address" name="email" onChange={handleEditClick("email")}/> </td>
   <td><input type="text"  placeholder="Enter the user name" name="userName"  onChange={handleEditClick("userName")}/></td>
   <td><input type="text" placeholder="Enter the linkedin skills" name="skills" onChange={handleEditClick("linkedin_skills")}/></td>
   <td> <input type="text"  placeholder="Enter the IP address" name="ipAddress" onChange={handleEditClick("ipAddress")}/> </td>
         
         <div className="footer">
         <button 
         
         onClick={() => {
           //  setModalOpen(false);
           }}
           id="cancelBtn"
         >

           Cancel
         </button>
         <button type="submit"
       onClick={() => handleEditSubmit()}
           id="okBtn"
         >
         OK
         </button>
         </div>
</tr>





            ))
                 }
      </div>


  )
}

export default Modal