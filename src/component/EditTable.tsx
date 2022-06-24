import 'component/EditTable.css'

function EditTable({handleCancelClick, handleEditClick, handleEditSubmit,editData}) {

  

  return (


  <tr>
  <td><input type="text"  placeholder="Enter a name" name="name"   onChange={handleEditClick("first_name")} value={editData?.first_name}/></td>
  <td><input type="text" placeholder="Male or Female" name="gender"  onChange={handleEditClick("gender")}/></td>
  <td> <input type="text" placeholder="Enter the education" name="education" onChange={handleEditClick("education")}/></td>
  <td><input type="text"  placeholder="Enter the job title" name="job"  onChange={handleEditClick("job_title")}/></td>
  <td><input type="number" placeholder="Enter the age" name="age"  onChange={handleEditClick("age")} /></td> 
  <td><input type="text"  name="country" placeholder="Enter the country" onChange={handleEditClick("country_of_birth")} /></td>
  <td><input type="email"  placeholder="Enter the email address" name="email" onChange={handleEditClick("email")}/> </td>
  <td><input type="text"  placeholder="Enter the user name" name="userName"  onChange={handleEditClick("user_name")}/></td>
  <td><input type="text" placeholder="Enter the linkedin skills" name="linkedin_skills" onChange={handleEditClick("linkedin_skills")}/></td>
  <td> <input type="text"  placeholder="Enter the IP address" name="ipAddress" onChange={handleEditClick("ip_address")}/> </td>
        
        <div className="footer">
        <button 
        
        onClick={(item) => {
          handleCancelClick(item)
          }}
          id="cancelBtn"
        >

          Cancel
        </button>
        <button type="submit"
      onClick={() => handleEditSubmit()}
          id="oksiBtn"
        >
        OK
        </button>
        </div>
</tr>
  )}

export default EditTable;
