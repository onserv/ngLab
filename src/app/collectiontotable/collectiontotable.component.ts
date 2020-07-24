import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collectiontotable',
  templateUrl: './collectiontotable.component.html',
  styleUrls: ['./collectiontotable.component.css']
})
export class CollectiontotableComponent implements OnInit {
  title = 'Collection to Table';
  myCollection: string [];

  constructor (private httpService: HttpClient) { }

  ngOnInit(): void {
    this.httpService.get('./assets/collection1.json').subscribe(
      data => {
        this.myCollection = data as string [];
        //  console.log(this.myCollection[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }





}
