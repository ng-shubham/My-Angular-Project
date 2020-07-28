import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AwsLoginService } from '../shared/aws-login.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'] 
})
export class ReactiveFormsComponent implements OnInit {

  constructor(public LoginService: AwsLoginService) { } 
  submitted: boolean; 
  showSuccessMessage: boolean;
  showDeletedMessage: boolean;
  userArray = [];
  formControls = this.LoginService.awsForm.controls;
  
  onSubmit(){
    this.submitted = true;
    if(this.LoginService.awsForm.valid){
      if(this.LoginService.awsForm.get('$key').value == null)
      {
        this.LoginService.addUser(this.LoginService.awsForm.value);
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 3000);
      }
      else
        this.LoginService.updateUser(this.LoginService.awsForm.value);
        this.submitted = false;
        this.LoginService.awsForm.reset();
    }
  }
  ngOnInit(){
    this.LoginService.getUser().subscribe(
      list => {
        this.userArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record?')){
      this.LoginService.deleteUser($key);
      this.showDeletedMessage = true;
      setTimeout(()=> this.showDeletedMessage = false, 3000);
    }
  }


  custform = new FormGroup({
    'custname': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'custmobile' : new FormControl('', [Validators.required, Validators.pattern('[7-9][0-9]{9}')]),
    'custemail' : new FormControl('',[Validators.required, Validators.email])
  });

  get fc() { return this.custform.controls; }

  onSubmitData(){
    console.log(this.custform);
  }
  
}
