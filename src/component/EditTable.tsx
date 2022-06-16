import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { ChangeEvent } from 'react';
import { userSchema } from 'App';
import { HTMLAttributes } from 'react';
import { useState, useContext, createContext } from 'react'



//export const UserContext = createContext("")
export interface userEdit{
  id:string,
  first_name:string,
  last_name:string,
  gender:string,
  education:string,
  job_title:string,
  age:number,
  country_of_birth:string,
  email:string,
  user_name:string,
  linkedin_skills:string,
  ip_address:string,



}

export function EditTable( editID, setEditID, data, handleEditClick) {
  const [editUser, setEditUser] = useState("");
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [gender, setGender]=useState("")
  const [country, setCountry]=useState("")
  const [ip, setIp]=useState("")
  const [skill, setSkill]=useState("")
  const [username, setUsername]=useState("")
  const [job, setJob]=useState("")
  const [age, setAge]=useState("")
  const [edu, setEdu]=useState("")

 

  
  //const {updateUser} = useContext(UserContext);

  //const editedUser = {id, name, email, gender, country, age, edu, job, ip, skill, username}

  /*const handleSubmit = (e) => {
      e.preventDefault();
      setEditUser(editedUser)
  }*/



  //const [user, setUsers] = useState(data)
  /*const [editData, setEditData]=useState( {
    //Alldata:data,
   // id:"",
    first_name:"",
      gender:"",
      education:"",
      job_title:"",
      age:{},
      country_of_birth:"",
      email:"",
      user_name:"",
     linkedin_skills:"",
      ip_address:"",
    });*/
 
  function handleCancelClick () {
   // setModalOpen(false);
  };
//const setEdit=(user:userEdit)=>{
 //   function setEdit(user:userEdit){
 /*const fieldName = event.target.getAttribute("name");
 const fieldValue = event.target.value;

 const newFormData = {...editData};
 newFormData[fieldName] = fieldValue;

 setEditData(newFormData);*/
 /*const formValues ={
  first_name: editData.first_name,
   id:user.id,
   education:user.education,
   age: user.age,
   gender:gender,
   email: email,
   country_of_birth: user.country_of_birth,
   job_title:user.job_title,
   user_name:user.user_name,
 linkedin_skills:user.linkedin_skills,
 ip_address:user.ip_address,

 };
 

 setEditData(formValues);
  }*/

  function handleEditSubmit ()  {
    //event.preventDefault();
  
    const editedUser = {
      //id: editID,
      first_name:name,
      // id:user.id,
       education:edu,
       age:age,
       gender:gender,
       email: email,
       country_of_birth:country,
       job_title:job,
       user_name:username,
     linkedin_skills:skill,
     ip_address:ip,
    };
console.log(editedUser)
    //const newUsers = [ ...user] ;
  
    //const index =user.findIndex((row) => row.id === editID);
  
    //newUsers[index] = editedUser;
  
    //setData(editedUser);
    setEditID(null);
 
  };

  return (
  
     
     <tr></tr>
                    
        
        
        
)
}
//*  >
export default EditTable;
