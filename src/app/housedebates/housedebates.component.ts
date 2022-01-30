import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-housedebates',
  templateUrl: './housedebates.component.html',
  styleUrls: ['./housedebates.component.css']
})
export class HousedebatesComponent implements OnInit {

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
    this.getdataService.getByPageById('orderofthedayagenda','House Debates',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
    this.getdataService.getByPageById('orderofthedayagenda','House Debates',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

  listofmembersdetail(id:any){
    this.getdataService.getByPageById('orderofthedayagendabyid','House Debates',id)
    .subscribe((data:any)=>{
      this.singleData = data;
      //console.log(this.singleData)
    }); 
  }


}
