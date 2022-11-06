package com.example.employee.service;

import com.example.employee.domain.Employee;
import com.example.employee.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {

    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    public List<EmployeeDTO> list();

    public boolean deleteEmployee(Long id);

    public EmployeeDTO getEmployeeById(Long id);

    EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO);
}
