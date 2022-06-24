import React from 'react'
import {IoMdTrash} from "react-icons/io";
import {BsPencilFill} from "react-icons/bs";
import { Fragment } from 'react';
import 'component/NormalTable.css'

function NormalTable({item, handleEditData, handleDeleteData}) {
  return (
<Fragment>
           <tr>
                       <td >{item.first_name} {item.last_name}</td>
                         <td>{item.gender}</td>
                         <td>{item.education}</td>
                         <td>{item.job_title}</td>
                         <td>{item.age}</td>
                         <td>{item.country_of_birth}</td>
                         <td>{item.email}</td>
                         <td>{item.user_name}</td>
                         <td>{item.linkedin_skills}</td>
                         <td>{item.ip_address}</td> 
                         <div className="footer-normal">
                         <button onClick={() => handleDeleteData(item)} id="trash"><IoMdTrash></IoMdTrash></button> 
                         <button onClick={() => handleEditData(item)} id="pencil"><BsPencilFill ></BsPencilFill></button> 
                         </div>
                         </tr>
                         </Fragment>              
                       
    
  )
}

export default NormalTable