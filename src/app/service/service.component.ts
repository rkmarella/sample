import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  employeeForm: FormGroup;
  employees: any[] = []; // array to hold the employee data

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.employeeForm = this.formBuilder.group({
      name: [''],
      mail: [''],
      password:[''],
      salary: ['']
    });
  }

  ngOnInit() {
    this.getEmployees(); // call the method to fetch the data on initialization
  }

  getEmployees() {
    this.http.get<any>('http://localhost:2020/emp/getemps').subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => console.log(error)
    );
  }
  
  onSubmit() {
    console.log('Form submitted');
    const formData = this.employeeForm.value;
    this.http.post('http://localhost:2020/emp/save', formData).subscribe(
      (response) => {
        console.log(response);
        this.getEmployees(); // reload the employee data after form submission
      },
      (error) => console.log(error)
    );
  }
}
 