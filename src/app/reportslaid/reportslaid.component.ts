import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-reportslaid',
  templateUrl: './reportslaid.component.html',
  styleUrls: ['./reportslaid.component.css']
})
export class ReportslaidComponent implements OnInit {


  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public selectedTenure:any;
  public singleData:any={};
  public isDetail:boolean=false;
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
      this.selectedTenure = data[0].id;  
      this.onChange2(this.selectedTenure);
    });
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
        return x.parliamentaryyearsname == tab;
      });
  }
  
  filterOfDepartment(tab:any){
    this.onChange2(this.selectedTenure);  
    var searchValue = tab.target.value;
    if(searchValue != 'All' ){
        setTimeout(()=>{
          this.allData = this.allData.filter(function (x:any) {
            return x.committee == searchValue;
           });
         
        },1000);
      }
  }

  TitleSearch(tab:any){
    this.onChange2(this.selectedTenure);  
    var searchValue = tab.target.value;
    if(searchValue != 'All' ){
        setTimeout(()=>{
          this.allData = this.allData.filter(function (x:any) {
            return x.name == searchValue;
           });
         
        },1000);
      }
  }

  onChange(tenureid:any) {
    this.getdataService.getById('reportslaid',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
    this.getdataService.getById('reportslaid',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

  


  getSingleData(id:any){
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  back(id:any){
    this.isDetail = false;
  }
}
