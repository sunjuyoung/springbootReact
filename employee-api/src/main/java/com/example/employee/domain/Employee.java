package com.example.employee.domain;

import com.example.employee.dto.EmployeeDTO;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Getter
@Entity
public class Employee {

    @Id @GeneratedValue
    private Long id;
    private String nickname;
    private String email;
    private String password;

    public void editEmployee(EmployeeDTO employeeDTO){
        this.nickname = employeeDTO.getNickname();
        this.email = employeeDTO.getEmail();
        this.password = employeeDTO.getPassword();
    }
}
