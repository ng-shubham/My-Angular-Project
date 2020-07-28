import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../shared/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtility.pageHeaderName.next('erter');
  }

}
