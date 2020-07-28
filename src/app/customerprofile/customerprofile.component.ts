import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {
  public postId;
  constructor(private route: ActivatedRoute, private router: Router ) { }
 
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')); 
    // this.custId = id;
    this.route.paramMap.subscribe((param: ParamMap) =>{
      let id= parseInt(param.get('id'));
      this.postId = id;
    })
  }

  goPrevious(){
    // let prvId = this.custId - 1;
    // this.router.navigate(['/customers', prvId]);
  }

  goNext(){
    // let nextId = this.custId + 1;
    // this.router.navigate(['/customers', nextId]);
  }

}
