package com.example.employee.controller;

import com.example.employee.domain.Employee;
import com.example.employee.dto.EmployeeDTO;
import com.example.employee.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable("id")Long id){
        boolean deleted =  employeeService.deleteEmployee(id);
        Map<String ,Boolean> response = new HashMap<>();
        response.put("success",deleted);
        return ResponseEntity.ok().body(response);

    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<EmployeeDTO> editForm(@PathVariable("id")Long id){
        EmployeeDTO dto = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(dto);
    }
    @PutMapping("/employee/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id")Long id,@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO dto = employeeService.updateEmployee(id,employeeDTO);
        return ResponseEntity.ok(dto);
    }
}
