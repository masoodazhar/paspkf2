import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure(); 
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange2(data[0].id);
    });
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.parliamentaryyearsname == tab;
      });
  }

  onChange(tenureid:any) {
    this.getdataService.getById('sessions',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
    this.getdataService.getById('sessions',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

}
