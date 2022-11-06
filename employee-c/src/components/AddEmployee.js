import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'


const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        nickname:"",
        email:"",
        password:""
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        setEmployee(prev=>({...prev,[e.target.name]:e.target.value}))

        // const value = e.target.value;
        // setEmployee({...employee,[e.target.name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            EmployeeService.saveEmployee(employee)
            .then((response)=>{
                navigate("/")
            })
            //const res = await axios.post("http://localhost:8888/api/v1/employee",employee);
            //console.log(res.data);
        } catch (error) {
            console.log(error);
        }
       
  
    }

  return (
    <div className='flex max-w-2xl shadow-sm mx-auto border-b'>
        <div className='px-4 py-8 w-80'>
            <div>
                <h1>Add Employee</h1>
            </div>
            <div className='justify-center h-18 w-60 flex flex-col my-4 mx-4'>
                <label className=' mx-1 text-gray-600 font-normal text-sm'>nickname</label>
                <input type="text" name="nickname" placeholder='nickname' 
                className='border mt-1 h-10 flex-2 w-full px-2' onChange={handleChange}></input>
            </div>


            <div className='justify-center h-18 w-70 flex flex-col my-4 mx-4'>
                <label className=' mx-1 text-gray-600 font-normal text-sm'>Email</label>
                <input type="text" name="email" placeholder='email' 
                className='border mt-1 h-10 w-full flex-2 px-2' onChange={handleChange}></input>
            </div>

            <div className='justify-center h-18 w-70 flex flex-col my-4 mx-4'>
                <label className=' mx-1 text-gray-600 font-normal text-sm'>Password</label>
                <input type="password" name="password" placeholder='password' 
                className='border mt-1 h-10 w-full  px-2' onChange={handleChange}></input>
            </div>

            <div className=' items-center justify-center my-4 mx-4'>
              <button className=' rounded border w-30 px-3 h-9 items-center 
              cursor-pointer bg-green-400
               hover:bg-green-600 
               after:bg-slate-600' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee