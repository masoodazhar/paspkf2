import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-committeerules',
  templateUrl: './committeerules.component.html',
  styleUrls: ['./committeerules.component.css']
})
export class CommitteerulesComponent implements OnInit {

  public singleData:any={};
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure(); 
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('committeerules')
    .subscribe((data:any)=>{
      this.singleData = data;   
    });
  }



}
