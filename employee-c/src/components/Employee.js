import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({em,deleteHandle}) => {

    const navigate = useNavigate();
    const editEmployee = (e,id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`)

    }


  return (
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
        <a onClick={(e,id)=> editEmployee(e,em.id)} className='mx-1 hover:text-blue-500'>Edit</a>

        <a onClick={(e,id) => deleteHandle(e,em.id)}
         className='mx-1 hover:text-red-500'>Delete</a>
    </td>
</tr>
  )
}


export default Employee