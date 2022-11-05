package com.example.employee.domain;

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

}
