import {ChangeEvent, useEffect, useState, useRef } from 'react'
import './App.css';
import axios from 'axios';
import {IoMdTrash} from "react-icons/io";
import {BsPencilFill, BsRecord} from "react-icons/bs";
import Modal from 'component/Modal';
import { Fragment } from 'react';
import {EditTable} from 'component/EditTable';
//import { Modal } from 'react-bootstrap';


export interface userSchema{

  id:number,
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
index:number,
e:ChangeEvent
}


function App() {
  

const [data, setData] = useState ([]);
const [search, setSearch] = useState ("");
const [isMaleChecked, setIsMaleChecked] = useState(false);
const [isFemaleChecked, setIsFemaleChecked] = useState(false);
const [genderFilter, setGenderFilter] = useState("all");
const checkBox1 = useRef(null);
const checkBox2 = useRef(null);
const [modalOpen, setModalOpen] = useState(false);
const [isVisible, setIsVisible] = useState(true);

  const [editID, setEditID] = useState(null);
 
  const [editData, setEditData]=useState( {
    first_name:'',
      gender:'',
      education:'',
      job_title:'',
      age:{},
      country_of_birth:'',
      email:'',
      user_name:'',
     linkedin_skills:'',
      ip_address:'',
    });
 
 

 useEffect(() => {
   const getData = async () => {
   await axios.get('users.json').then(res =>{
   console.log(res.data)
   setData(res.data)
  // callPromise()
   console.log(Object.keys(res.data));
})
.catch((error) => {
  console.log(error)
})
    }
    getData()
}, []);

/*const myPromise= new Promise((resolve, reject) => {
setTimeout(() => {
  resolve("szép volt")
}, 2000)
});
const callPromise =() =>{
  console.log(myPromise)
}*/

function handleFemaleChange() {
 /* if (genderFilter==="all")
  {
    setData(data)
  }*/
  if(!isMaleChecked)
  { setIsFemaleChecked(!isFemaleChecked)
    //setIsMaleChecked(isMaleChecked)
    const malearray = data.filter((gender:userSchema) =>{
      return gender.gender.includes("Male")});
  setData(malearray)
  }
 else if(isFemaleChecked && isMaleChecked)
 
  { setIsFemaleChecked(!isFemaleChecked)
    const femalearray = data.filter((gender:userSchema) =>{
    return gender.gender.includes("Female")});
    setData(femalearray)
  }
 else { console.log("siker")}
 /*{  setIsFemaleChecked(!isFemaleChecked)
    const malearray = data.filter((gender:userSchema) =>{
    return gender.gender.includes("Male")});
setData(malearray)*/
  //}
};



//},[genderFilter]);


const uniqueKey = Object.keys(data);


const searchedName = data.filter((name:userSchema) =>{
  return name.first_name.toLowerCase().includes(search.toLowerCase()) || name.last_name.toLowerCase().includes(search.toLowerCase())});



const handleEditData = (event, user:userSchema) => {
  // event.preventDefault();
   console.log(user.id);
  setEditID(user.id);
  
 //setModalOpen(true);
 //const fieldName = event.target.getAttribute("name");
/* const fieldName = event.target.attributes.getNamedItem("name").value;
 console.log(fieldName);
 const fieldValue = event.target.value;
 
 const newData = { ...editData };
 newData[fieldName] = fieldValue;
 
 setEditData(newData);*/

   
   const formValues ={
    // fist_name: user.first_name,
    // id:user.id,
     education:user.education,
     age: user.age,
     gender: user.gender,
     email: user.email,
     country_of_birth: user.country_of_birth,
     job_title:user.job_title,
     user_name:user.user_name,
   linkedin_skills:user.linkedin_skills,
   ip_address:user.ip_address,
   first_name:user.first_name,
 
   };
 
   setEditData(formValues);
  
 };

const handleCancelClick = () => {
  setEditID(null);
};


const handleDeleteData = (newitem:userSchema) =>
 {
  setData((pre) => {
    return  pre.filter((item) => item !== newitem)}
    )
    console.log(newitem)
 };

const femalearray = data.filter((gender:userSchema) =>{
  return gender.gender.includes("Female")});

const malearray = data.filter((gender:userSchema) =>{
   return gender.gender.includes("Male")});

/*function handleFemaleChange (item) {
  //const malearray = data.filter((gender:userSchema) =>{
  //  return gender.gender.includes("Male")});
  //const checked=!isFemaleChecked;
  setIsFemaleChecked(!isFemaleChecked);
 // setData((prev) =>( !isMaleChecked && !isFemaleChecked) ? prev.filter((sc)=> sc !== "Male") : [...prev, item])
 // console.log("male")
  //setData(data)
//(!isMaleChecked && !isFemaleChecked)? setData(malearray) : [...gender, item]
//console.log("működhetne de nem")
//setData((pre) => {
 // return  pre.filter((x) => x !== item)}
 
  
 (  !isFemaleChecked &&  isMaleChecked) ?
 // {setIsFemaleChecked(!isFemaleChecked)
 setData(femalearray) :
    setData(malearray)
  
};*/



function handleMaleChange (item) {

  //setIsMaleChecked(!isMaleChecked)
  //setIsFemaleChecked(!isFemaleChecked)
  
    setData(femalearray)
    console.log("male")

 /*setIsMaleChecked(!isMaleChecked);

(isFemaleChecked && !isMaleChecked) ?
      console.log("majd") :  setData(femalearray)*/
    //  if(isFemaleChecked)
     // {console.log("eredeti")
       
    //  }
  /*    if(isMaleChecked)
  {
    setIsFemaleChecked(isMaleChecked)
       console.log(femalearray)
       setData(femalearray)
  }*/
  /*else
      //if(isFemaleChecked===false)
      {setIsMaleChecked(isFemaleChecked)
        setIsMaleChecked(!isMaleChecked)
        console.log(malearray)
        setData(malearray)
        
        }*/
     //   onChange={(item) => handleFemaleChange(item)}
    
      };


  const handleEditClick = (input) => (e) => {
    e.preventDefault()
    
    setEditData({ ...editData, [input]: e.target.value });
    console.log(editData);
  }

function handleEditSubmit ()  {

  const savePost = {
    id: editID,
    education: editData.education,
    gender: editData.gender,
    email: editData.email,
    first_name:editData.first_name,
    job_title:editData.job_title,
    user_name:editData.user_name,
    country_of_birth:editData.country_of_birth,
    ip_address:editData.ip_address,
    age:editData.age,


  }

  const newUserData = [ ...data ]
console.log(newUserData)
  const formIndex =data.findIndex((post) => post.id === editID);
console.log(formIndex)
  newUserData[formIndex] = savePost

  setData(newUserData)
  setEditID(null)
  console.log(editID);
};
  return (
    <div>
    
    <div className='input-header'>
      <input className='input' type="text" placeholder='Name...' onChange={(event) => {setSearch(event.target.value);}}></input>
      <p className='chechbox' >
      Female: <input type="checkbox" name='gender' checked={!isFemaleChecked}  onChange={() => handleFemaleChange()}  /> 
     Male: <input type="checkbox" name="gender" checked={!isMaleChecked}  onChange={(item) => handleMaleChange(item)}/>

      </p>
        </div>
        
    <table>
      <tbody>
    
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Job title</th>
            <th>Age</th>
            <th>Country of birth</th>
            <th>Email</th>
            <th>User name</th>
            <th>LinkedIn skills</th>
            <th>IP address</th>
            <th>Action buttons</th>
            
          </tr>
    
             { searchedName.map((item:userSchema) => (
                 
                   editID === item.id  ? (

                    <tr>
                    <td><input type="text"  placeholder="Enter a name" name="name"  onChange={handleEditClick("first_name")}/></td>
                    <td><input type="text" placeholder="Male or Female" name="gender"  onChange={handleEditClick("gender")}/></td>
                    <td> <input type="text" placeholder="Enter the education" name="education" onChange={handleEditClick("education")}/></td>
                    <td><input type="text"  placeholder="Enter the job title" name="job"  onChange={handleEditClick("job_title")}/></td>
                    <td><input type="number" placeholder="Enter the age" name="age"  onChange={handleEditClick("age")} /></td> 
                    <td><input type="text"  name="country" placeholder="Enter the country" onChange={handleEditClick("country")} /></td>
                    <td><input type="email"  placeholder="Enter the email address" name="email" onChange={handleEditClick("email")}/> </td>
                    <td><input type="text"  placeholder="Enter the user name" name="userName"  onChange={handleEditClick("userName")}/></td>
                    <td><input type="text" placeholder="Enter the linkedin skills" name="linkedin_skills" onChange={handleEditClick("linkedin_skills")}/></td>
                    <td> <input type="text"  placeholder="Enter the IP address" name="ipAddress" onChange={handleEditClick("ipAddress")}/> </td>
                          
                          <div className="footer">
                          <button 
                          
                          onClick={() => {
                            handleCancelClick()
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
                 ):

                  <tr className="tablebody" >
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
                       <div>
                         <td><button onClick={() => handleDeleteData(item)} id="trash"><IoMdTrash></IoMdTrash></button> 
                         <button onClick={(event) => handleEditData(event,item)} id="pencil"><BsPencilFill ></BsPencilFill></button> </td>
                         </div>
                       
                       </tr>
                    
                  
              )) }
                  
                  
             
              
              

        </tbody>

      </table>
  
    </div>

  );
}
export default App;
