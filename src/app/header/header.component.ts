import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../shared/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  pageHeaderName:string = "Page Header";

  constructor(private _designUtility: DesignUtilityService){

  // ngOnInit(): void {
  //   this._designUtility.pageHeaderName.subscribe(res => {
  //     this.pageHeaderName = res;
  //   })
  // }
 
}

}