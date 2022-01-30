import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-leaderofthehouse',
  templateUrl: './leaderofthehouse.component.html',
  styleUrls: ['./leaderofthehouse.component.css']
})
export class LeaderofthehouseComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure();
  }
 

  getAssemblyTenure():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;
      this.onChange(data[0].id, true)
     
    });
  }

  filterItemsOfType(type: any, tab:any){
      return this.allData.filter(function (x:any) {
        return x.category == type && x.tabs == tab;
      });
  }
  onChange(tenureid:any, check:boolean) {
    var tenureidcurrent:any = 0;
    if(check){
      tenureidcurrent = tenureid;
    }else{
      tenureidcurrent = tenureid.target.value;
    }
    this.getdataService.getById('cabinetcompositionleaderofthehouse',tenureidcurrent)
    .subscribe((data:any)=>{
      this.allData = data;
    });
  }

}
