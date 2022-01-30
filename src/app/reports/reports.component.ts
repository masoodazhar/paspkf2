import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

 
  public allData:any=[];
  public singleData:any={};
  public isDetail:boolean=false;
  public allAssemblyTenure:any=[];
  public imageUrl:any='';
  public tenureid:any;
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure();
   
  }
  
  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;  
      this.tenureid = data[0].id; 
      this.onChange2(this.tenureid);
    });
  } 

  filterOfType(tab:any) {
    this.onChange2(this.tenureid);
      if(tab.target.value != '.'){
        setTimeout(()=>{
          this.allData = this.allData.filter(function (x:any) {
            return x.department_committee == tab.target.value;
           });       
        },1000);
      }   
  }

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  onChange(tenureid:any) {
    this.tenureid = tenureid.target.value
    const page:any='Reports';
    this.getdataService.getByPageById('publications_reports',page,this.tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(id:any){
    
    const page:any='Reports';
    this.imageUrl=this.getdataService.getImageUrl();
    this.getdataService.getByPageById('publications_reports',page,this.tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)      
    });
  }

  keySearch(key:any){
    const keySearch:any=key.target.value;
    if(keySearch=='')
    {
      this.onChange2(this.tenureid);
      
    }else{
      const id:any=1;
      const page:any='Reports';
      this.getdataService.getByPageByIdTitle('publications_reports',page,this.tenureid,keySearch)
      .subscribe((data:any)=>{
        this.allData = data;
        //console.log(this.allData)      
      });
    }
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
