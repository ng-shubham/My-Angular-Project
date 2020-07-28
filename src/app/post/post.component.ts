import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Iposts } from '../post';
import { Observable } from 'rxjs';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  private _url = "https://jsonplaceholder.typicode.com/photos";
  public posts = [];
  fetching :boolean = false;
  status = 'No Data';

  constructor(private http: HttpClient, private route: Router) { }

  getData(): Observable<Iposts[]> {
    return this.http.get<Iposts[]>(this._url);
  }

  //By clicking fetch data from API
  onFetchData(){
    this.fetching = true; 
    this.status = 'Data Fetching...';
    this.getData().pipe(
      // retry(4)
      retryWhen(err => err.pipe(
        delay(2000), 
        scan((retryCount)=> {
          if(retryCount > 5){
            throw err;
          }
          else {
            retryCount = retryCount + 1; 
            this.status = 'Retrying Attempt #' + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe(data =>{
      this.posts = data;
      this.fetching = false;
      this.status = 'Data Fetched';
    },
    (err) =>{
      console.log(err);
      this.fetching = false;
      this.status = 'Problem Fetching Data';
    });

  }

  ngOnInit() {
  }

  onClick1(post){
    this.route.navigate(['/customers', post.id]);
  }

}