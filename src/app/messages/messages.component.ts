import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public allData:any=[];
  public imageUrl = '';

  constructor(private getdataService:GetdataService) { }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.allData = this.getdataService.getAll('messages')
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    })
  }
}
