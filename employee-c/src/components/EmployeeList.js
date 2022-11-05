import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

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
                        <div className="font-semibold text-center">Sales</div>
                    </th>
                    </tr>
                </thead>
                {/* Table body */}
                {!loading && ( 
                <tbody className="text-sm font-medium divide-y divide-slate-100">
                    {employee.map((em)=> (
                        <tr key={em.id}>
                            <td className="p-2">
                                <div className="text-slate-800">{em.id}</div>
                            </td>
                            <td className="p-2">
                                <div className="text-center">{em.nickname}</div>
                            </td>
                            <td className="p-2">
                                <div className="text-center text-green-500">{em.email}</div>
                            </td>
                            <td className="p-2 flex justify-center ">
                                <a href='/edit' className='mx-1 hover:text-blue-500'>Edit</a>
                                <a href='/delete' className='mx-1 hover:text-red-500'>Delete</a>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>)}
            </table>
        </div>
    </div>

  )
}

export default EmployeeList