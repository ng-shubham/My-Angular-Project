import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  promiseVal;
  dell = {
    brand: 'Dell',
    hdd: '2 TB'
  }
  dellLaptop(){
    return true;
  }
  hpLaptop(){
    return false;
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
    
    const buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is rejected');
      if(this.dellLaptop()){
        return setTimeout(() => {
          // resolve('Dell is Purchased!!!');
          resolve(this.dell);
        },3000);
      }else if(this.hpLaptop()){
        return setTimeout(() => {
          resolve('HP is Purchaesd!!!');
        },3000);
      }
      else{
        return setTimeout(() =>{
          reject('Not Available!!!');
        }, 3000);
      }
    });

    buyLaptop.then(res => {
      console.log('Resolve console', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('reject console', res);
      this.promiseVal = res;
    });
  }
  
  customers = [
    {id: 1, name: "Ankush Deshmukh", city: "Malkapur, Akola"},
    {id: 2, name: "Kunal Dangat", city: "Sinhgad road, Pune"},
    {id: 3, name: "Anurag Singh", city: "Sus road, Baner, Pune"},
    {id: 4, name: "Nikhil Dhoke", city: "Kothari vatika, Akola"},
    {id: 5, name: "Gaurav Jha", city: "Sus road, Pune"}
  ]

  onClick(customer){
    this.route.navigate(['/customers', customer.id]);
  }


}
