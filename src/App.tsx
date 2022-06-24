import {ChangeEvent, useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import EditTable from 'component/EditTable';
import NormalTable from 'component/NormalTable';
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


export function App() {
  

const [data, setData] = useState ([]);
const [search, setSearch] = useState ("");
const [isMaleChecked, setIsMaleChecked] = useState(false);
const [isFemaleChecked, setIsFemaleChecked] = useState(false);


  const [editID, setEditID] = useState(null);
  const [editData, setEditData]= useState( {
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





//},[genderFilter]);


const uniqueKey = Object.keys(data);


const searchedName = data.filter((name:userSchema) =>{
  return name.first_name.toLowerCase().includes(search.toLowerCase()) || name.last_name.toLowerCase().includes(search.toLowerCase())});



  const handleEditData = (user:userSchema) => {
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

  
  const handleCancelClick = (setEditID) => {
    setEditID(null);
  };
  
  function handleEditSubmit () {
  
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
      linkedin_skills:editData.linkedin_skills,
  
  
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
  
  const handleEditClick = (input) => (e) => {
    e.preventDefault()
    
    setEditData({ ...editData, [input]: e.target.value });
    console.log(editData);
  }


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

   function handleFemaleChange() {
    setIsFemaleChecked(!isFemaleChecked)
    if(!isFemaleChecked)
    {
      //setIsFemaleChecked(!isFemaleChecked)
      setData(malearray)
        console.log("male")
      //setIsMaleChecked(isMaleChecked)
    
    //setIsMaleChecked(isMaleChecked)
    }
  /* else if(isFemaleChecked && isMaleChecked)
   
    { setIsFemaleChecked(!isFemaleChecked)
      const femalearray = data.filter((gender:userSchema) =>{
      return gender.gender.includes("Female")});
      setData(femalearray)
      console.log("female emberkék")
    }*/
   else {
    setData(data)
    console.log("mindenki")}

  
  };


function handleMaleChange (item) {

  //setIsMaleChecked(!isMaleChecked)
  //setIsFemaleChecked(!isFemaleChecked)
  setIsMaleChecked(!isMaleChecked)
    
    setIsFemaleChecked(isFemaleChecked)
    setData(femalearray)
    console.log("female")


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

                    <EditTable handleCancelClick={handleCancelClick}
                    handleEditClick={handleEditClick}
                    handleEditSubmit={handleEditSubmit}
                    editData={item}
                   />
                 ):

              <NormalTable
              handleDeleteData={handleDeleteData}
              handleEditData={handleEditData}
                    item={item}/>
                  
              )) }
                  
                  
             
              
              

        </tbody>

      </table>
  
    </div>

  );
}
export default App;
