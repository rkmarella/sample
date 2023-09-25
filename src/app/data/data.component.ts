import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  employees: any[] = []; // array to hold the employee data

  constructor( private http: HttpClient){} 

  getEmployees() {
    this.http.get<any>('http://localhost:2020/emp/getemps').subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => console.log(error)
    );
  }

}
