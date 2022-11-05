package com.example.employee.service;

import com.example.employee.domain.Employee;
import com.example.employee.dto.EmployeeDTO;
import com.example.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = modelMapper.map(employeeDTO, Employee.class);
        Employee newEmployee = employeeRepository.save(employee);
        employeeDTO.setId(newEmployee.getId());
        return employeeDTO;
    }

    @Override
    public List<EmployeeDTO> list() {
        List<Employee> employeeList = employeeRepository.findAll();
//        List<EmployeeDTO> dtoList = new ArrayList<>();
//        employeeList.stream().map(e -> dtoList.add(modelMapper.map(e,EmployeeDTO.class)));
        List<EmployeeDTO> dtoList =
                employeeList.stream().map(e -> modelMapper.map(e, EmployeeDTO.class)).collect(Collectors.toList());
        return dtoList;
    }
}
