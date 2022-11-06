import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8888/api/v1/employee";

class EmployeeService{
   async saveEmployee(employee){
        return await axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    listEmployee(){
        return  axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id){
        return  axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    getEmployee(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+id,employee);
    }

}

export default new EmployeeService();