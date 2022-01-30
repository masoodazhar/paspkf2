import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-callattention',
  templateUrl: './callattention.component.html',
  styleUrls: ['./callattention.component.css']
})
export class CallattentionComponent implements OnInit {
  
  public allData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  public singleData:any={};
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
  }

  getData() {
    this.getdataService.getAll('callattention')
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
    });
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
      return x.pyname == tab;
      });
  }
  
  onChange2(tenureid:any) {
    const id:any=1;
    this.getdataService.getById('callattention',tenureid)
    .subscribe((data:any)=>{
      this.singleData = data;
      this.isDetail=true;
      // //console.log(this.singleData)
    });
  }

  back(id:any){
    this.isDetail = false;
  }

 
}
