import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-formbuilder',
  templateUrl: './reactive-formbuilder.component.html',
  styleUrls: ['./reactive-formbuilder.component.css']
})
export class ReactiveFormbuilderComponent implements OnInit {

  constructor(public fbobj: FormBuilder) { }

  ngOnInit(): void {
  }

  bankForm = this.fbobj.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    mail: ['',[Validators.email]],
    mobile: ['', [Validators.pattern('[7-9][0-9]{9}')] ],
    gender: ['', Validators.requiredTrue],
      officeForm : this.fbobj.group({
        mname: ['', [Validators.required, Validators.maxLength(10)]],
        accounttype: ['', [Validators.required]]
      })
  })
}
