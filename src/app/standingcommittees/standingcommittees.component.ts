import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-standingcommittees',
  templateUrl: './standingcommittees.component.html',
  styleUrls: ['./standingcommittees.component.css']
})
export class StandingcommitteesComponent implements OnInit {

  
  public allData:any=[];
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();     
  }

  getData() {
    this.getdataService.getAll('standingcommitteescategories')
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }
  
}
