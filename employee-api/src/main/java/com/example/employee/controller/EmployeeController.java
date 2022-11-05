package com.example.employee.controller;

import com.example.employee.domain.Employee;
import com.example.employee.dto.EmployeeDTO;
import com.example.employee.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class EmployeeController {

    private final EmployeeService employeeService;


    @PostMapping(value = "/employee",produces = MediaType.APPLICATION_JSON_VALUE)
    public EmployeeDTO createEmployee(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO employee = employeeService.createEmployee(employeeDTO);
        return employee;
    }

    @GetMapping("/employee")
    public List<EmployeeDTO> list(){
        List<EmployeeDTO> list = employeeService.list();
        return list;
    }
}
