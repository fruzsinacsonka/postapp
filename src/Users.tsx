import React from 'react'
import { userSchema } from './App'


function Users({id, first_name, last_name, gender, education, job_title}:userSchema) {
  return (
      <p className='nameHeader'>
       < h3> {id}</h3>
  <h3> {first_name} {last_name}</h3>
  <h4>{job_title}</h4>
  <h4>{education}</h4>
  <h3> {gender}</h3>
  
 </p>
)
}
 //age, gender, country_of_birth,education, job_title, email
 //h4> Age: {age}</h4>
 // <h4> Gender: {item.gender}</h4>
 // <h4> Country of birth: {item.country_of_birth}</h4>
 // <h4> education: {item.education}</h4>
 // <h4> Job title: {item.job_title}</h4>
 // <h4> Email: {item.email}</h4>

export default Users