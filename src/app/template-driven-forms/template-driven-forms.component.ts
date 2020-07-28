import { Component, OnInit, ViewChild } from '@angular/core';
import { registration } from '../regclass';
import { Login } from '../loginClass';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Iuser } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  @ViewChild('userForm') userForm: NgForm;
  _url = "https://fire-15a9e.firebaseio.com/user.json";

  users=[];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchUser();
  }

  onAddUser(userData: Iuser){ 
    this.http.post<Iuser>(this._url, userData).subscribe(
      (res)=>{ 
        this.http.get<Iuser>(this._url)
        .pipe(map(resData=>{ 
          const userArray = [];
          for(const key in resData){  
              userArray.push({userId:key, ...resData[key]});  
          }
          return userArray
        }))
        .subscribe(users=>{ 
            this.users =users;
          }
        )
      }
    )
  }

  fetchUser(){
    this.http.get<Iuser>(this._url)
    .pipe(map(resData=>{ 
      const userArray = [];
      for(const key in resData){ 
        if(resData.hasOwnProperty(key)){
          userArray.push({userId:key, ...resData[key]});
        }
      }
      return userArray
    }))
    .subscribe(users=>{ 
        this.users =users;
      }
    )
  }

  form = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'password': new FormControl()
  });
   
  
  submitted = false;
  onSubmit(){
    this.submitted= true;
  }
  
  reg = new registration('', 'shu007@gmail.com', 8478478744, 'shu123', 'shu123' );

  login = new Login('Shubh',''); 
}
