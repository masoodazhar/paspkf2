import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

 
  public allData:any=[];
  constructor(private getdataService:GetdataService) { 
    
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.allData = this.getdataService.getAll('contactlist')
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

}
