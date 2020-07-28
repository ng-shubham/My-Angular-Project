import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private AMfirebase: AngularFireDatabase) { }
  empList : AngularFireList<any>;

  empForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('',[Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0), 
    isParmanent: new FormControl(true)
  });

  getEmployees(){
    this.empList = this.AMfirebase.list('employee');
    return this.empList.snapshotChanges();
  }

  insertEmployee(employee){
    this.empList.push({
      fullname: employee.fullname,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department, 
      isParmanent: employee.isParmanent
    });
  }

  updateEmployee(employee){
    this.empList.update(employee.$key,{
      fullname: employee.fullname,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department, 
      isParmanent: employee.isParmanent
    });
  }

  deleteEmployee($key: string){
    this.empList.remove($key);
  }

  clearForm(){
    this.empForm.setValue({
      $key: null,
      fullname: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0, 
      isParmanent: false
    })
  }

  populateForm(employee){
    this.empForm.setValue(employee);
  }
 

}
