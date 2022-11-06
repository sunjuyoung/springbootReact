import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

    const [loading, setLoading] = useState(true)
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.listEmployee();
                setEmployee(response.data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])
    
    const deleteHandle = (e,id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res)=>{
            if(employee){
                setEmployee((prevElement)=>{
                    return prevElement.filter((employee)=> employee.id !== id);
                })
            }
        })

    };

    
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100 flex content-between justify-between">
            <h2 className="font-semibold text-slate-800">Employee List</h2>
            <button className='border rounded bg-slate-500 px-2 py-1 text-white font-semibold'
             onClick={()=>navigate("/addEmployee")}>Add Employee</button>
        </header>
        <div className="p-3"></div>
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
       {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                    <tr>
                    <th className="p-2">
                        <div className="font-semibold text-left">ID</div>
                    </th>
                    <th className="p-2">
                        <div className="font-semibold text-center">Nickname</div>
                    </th>
                    <th className="p-2">
                        <div className="font-semibold text-center">Email</div>
                    </th>
                    <th className="p-2">
                        <div className="font-semibold text-center">Action</div>
                    </th>
                    </tr>
                </thead>
                {/* Table body */}
                {!loading && ( 
                <tbody className="text-sm font-medium divide-y divide-slate-100">
                    {employee.map((em)=> (
                        <Employee em={em} key={em.id} deleteHandle={deleteHandle}></Employee>
                    ))}
                    
                </tbody>)}
            </table>
        </div>
    </div>

  )
}

export default EmployeeList