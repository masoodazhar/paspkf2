import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-currentassemblysummary',
  templateUrl: './currentassemblysummary.component.html',
  styleUrls: ['./currentassemblysummary.component.css']
})
export class CurrentassemblysummaryComponent implements OnInit {

  
  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public selectedTenure:any;
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
      this.onChange2(data[0].id);
    });
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
        return x.parliamentaryyearsname == tab;
      });
  }

  onChange(tenureid:any) {
    this.getdataService.getById('currentassemblysummary',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
    this.getdataService.getById('currentassemblysummary',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
    });
  }
 

}
