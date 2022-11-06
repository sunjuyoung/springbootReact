import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id:id,
        nickname:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        //setEmployee(prev=>({...prev,[e.target.name]:e.target.value}))
         const value = e.target.value;
         setEmployee({...employee,[e.target.name]: value});
    }
    
    useEffect(() => {
     const fetchData = async () => {
        try {
            const response = await EmployeeService.getEmployee(id);
            setEmployee(response.data)
        } catch (error) {
            
        }
     }
     fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await EmployeeService.updateEmployee(employee,id)
            .then((response)=>{
                navigate("/")
            })
        } catch (error) {
            console.log(error);
        }
    }
 
  return (
    <div className='flex max-w-2xl shadow-sm mx-auto border-b'>
    <div className='px-4 py-8 w-80'>
        <div>
            <h1>Edit Employee</h1>
        </div>
        <div className='justify-center h-18 w-60 flex flex-col my-4 mx-4'>
            <label className=' mx-1 text-gray-600 font-normal text-sm'>nickname</label>
            <input type="text" name="nickname" placeholder='nickname' value={employee.nickname} 
            className='border mt-1 h-10 flex-2 w-full px-2' onChange={handleChange}></input>
        </div>


        <div className='justify-center h-18 w-70 flex flex-col my-4 mx-4'>
            <label className=' mx-1 text-gray-600 font-normal text-sm'>Email</label>
            <input type="text" name="email" placeholder='email' value={employee.email}  
            className='border mt-1 h-10 w-full flex-2 px-2' onChange={handleChange}></input>
        </div>

        <div className='justify-center h-18 w-70 flex flex-col my-4 mx-4'>
            <label className=' mx-1 text-gray-600 font-normal text-sm'>Password</label>
            <input type="password" name="password" placeholder='password' value={employee.password}  
            className='border mt-1 h-10 w-full  px-2' onChange={handleChange}></input>
        </div>

        <div className=' items-center justify-center my-4 mx-4'>
          <button className=' rounded border w-30 px-3 h-9 items-center 
          cursor-pointer bg-green-400
           hover:bg-green-600 
           after:bg-slate-600' onClick={handleSubmit}>Update</button>
        <button className=' rounded border w-30 px-3 h-9 items-center 
          cursor-pointer bg-green-400
           hover:bg-green-600 
           after:bg-slate-600' onClick={()=> navigate("/")}>Cancel</button>
           
    </div>
</div>
</div>
  )
}

export default UpdateEmployee