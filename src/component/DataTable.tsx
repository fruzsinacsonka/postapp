import { userSchema } from 'App'
import React from 'react'

function DataTable(item:userSchema) {
  return (
   
         <tr>
           <td>{item.first_name} {item.last_name}</td>
            <td>{item.gender}</td>
            <td>{item.education}</td>
            <td>{item.job_title}</td>
            <td>{item.age}</td>
            <td>{item.country_of_birth}</td>
            <td>{item.email}</td>
            <td>{item.user_name}</td>
            <td>{item.linkedin_skills}</td>
            <td>{item.ip_address}</td> 
            </tr>
    
  )
}

export default DataTable