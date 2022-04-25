import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-allcommittees',
  templateUrl: './allcommittees.component.html',
  styleUrls: ['./allcommittees.component.css']
})
export class AllcommitteesComponent implements OnInit {


  public allData:any=[];
  public allcommitteesheader:any=[];
  public imageUrl:any;
  public singleData:any={};
  public isDetail:boolean=false;

  constructor(private getdataService:GetdataService) {  }


  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure();
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('allcommitteesheader')
    .subscribe((data:any)=>{
      this.allcommitteesheader = data;
    });
  }
}
