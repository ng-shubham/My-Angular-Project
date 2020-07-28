import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NotificationService} from '../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  constructor(public empService: EmployeeService, 
              public notification: NotificationService,
              public dialogRef: MatDialogRef<EmployeeComponent> ) { }

  departments = [
    { id:1, value: 'Accounting'},
    { id:2, value: 'Information Technology'},
    { id:3, value: 'Human Resource'},
    { id:4, value: 'Testing'}
  ]
  ngOnInit(): void {
    this.empService.getEmployees();
  }

  onClear(){
    this.empService.empForm.reset();
    this.empService.clearForm();
  }

  onSubmit(){
    if(this.empService.empForm.valid){
      if(!this.empService.empForm.get('$key').value)
      this.empService.insertEmployee(this.empService.empForm.value);
      else
      this.empService.updateEmployee(this.empService.empForm.value);

      this.empService.empForm.reset();
      this.empService.clearForm();
      this.notification.success('Submitted Successfully');
      this.onClose();
    }
  }

  onClose(){
    this.empService.empForm.reset(); 
    this.dialogRef.close();
  }

}
