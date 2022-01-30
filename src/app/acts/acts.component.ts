import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.css']
})
export class ActsComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl:any;
  public singleData:any={};
  public isDetail:boolean=false;

  constructor(private getdataService:GetdataService) {  }


  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure();
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;         
    });
  }

}
