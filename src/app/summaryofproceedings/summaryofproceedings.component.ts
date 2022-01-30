import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-summaryofproceedings',
  templateUrl: './summaryofproceedings.component.html',
  styleUrls: ['./summaryofproceedings.component.css']
})
export class SummaryofproceedingsComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  public singleData:any={};
  public imageUrl:any='';
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.imageUrl = this.getdataService.getImageUrl();
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
    this.getdataService.getByPageById('orderofthedayagenda','Summary of Proceedings',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
 
    this.getdataService.getByPageById('orderofthedayagenda','Summary of Proceedings',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }


}
