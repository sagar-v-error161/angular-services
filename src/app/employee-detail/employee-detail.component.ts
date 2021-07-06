import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <div>
    <h2>Champion detail</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li *ngIf="!errorMsg">{{employee.id}}. {{employee.name}} => {{employee.classs}}</li>
    </ul>
  </div>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "CGR", "classs": "Cosmic"},
    // {"id": 2, "name": "Quake", "classs": "Science"},
    // {"id": 3, "name": "Claire", "classs": "Mystic"}
  ];
  public errorMsg = "";
  constructor(private _employeesService: EmployeeService) { }

  ngOnInit(): void {
    this._employeesService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);
  }

}
