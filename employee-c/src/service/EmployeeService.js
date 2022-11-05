import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8888/api/v1/employee";

class EmployeeService{
   async saveEmployee(employee){
        return await axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

     listEmployee(){
        return  axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();