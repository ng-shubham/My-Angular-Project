import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AwsLoginService {

  constructor(private firebase: AngularFireDatabase) { }
  userList: AngularFireList<any>;

  awsForm = new FormGroup({
    '$key' : new FormControl(null),
    'username' : new FormControl('', [Validators.required, Validators.minLength(4)]),
    'mobile': new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}') ]),
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  getUser(){
    this.userList = this.firebase.list('AWEUser');
    return this.userList.snapshotChanges();
  }

  // Add user data
  addUser(user){
    this.userList.push({
      username: user.username,
      mobile: user.mobile,
      email: user.email
    });
  }
  // Update user data
  populateForm(user){
    this.awsForm.setValue(user);
  }

  updateUser(user){
    this.userList.update(user.$key,{
      username: user.username,
      mobile: user.mobile,
      email: user.email
    });
  }

  //Delete user
  deleteUser($key : string){
    this.userList.remove($key);
  }

}
 



