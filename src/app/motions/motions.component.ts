import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-motions',
  templateUrl: './motions.component.html',
  styleUrls: ['./motions.component.css']
})
export class MotionsComponent implements OnInit {
  public allData:any=[];
  public selectedTenure:any;
  public allAssemblyTenure:any=[];
  public allParliamentaryYears:any=[];
  public allTheDaySummaryOfProceedings:any=[];
  public allSessions:any=[];

  public imageUrl:any;
  public singleData:any={};
  public isDetail:boolean=false;

  constructor(private getdataService:GetdataService) {  }


  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.imageUrl = this.getdataService.getImageUrl();
    // this.onChange2();
    this.getParliamentaryYears();
    this.getTheDaySummaryOfProceedings();
    this.getSessions();
    this.getAssemblyTenure();
  }
  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data; 
      this.selectedTenure = data[0].id;
      this.onChange2(this.selectedTenure);        
    });
  }

  filterItemsOfType(tab:any){
    return this.allData.filter(function (x:any) {
     return x.typetabs == tab;
    });
  }

  filterParYear(tab:any){
    this.onChange2(this.selectedTenure);
    setTimeout(()=>{
      this.allData = this.allData.filter(function (x:any) {
        return x.parliamentary_years_name == tab.target.value;
       });       
    },1000);   
  }

  filterSession(tab:any){
    this.onChange2(this.selectedTenure);
    setTimeout(()=>{
      this.allData = this.allData.filter(function (x:any) {
        return x.sessions_id == tab.target.value;
       });       
    },1000);
  }

  filterSittings(tab:any){
    this.onChange2(this.selectedTenure);
      setTimeout(()=>{
        this.allData = this.allData.filter(function (x:any) {
          return x.sittingsno == tab.target.value;
        });       
      },1000);
  }
  
  onChange(tenureid:any) {
    this.getdataService.getById('motions',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
      this.isDetail=false;
    });
  }
  
  onChange2(tenueId:any){
    
    this.getdataService.getById('motions',tenueId)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData);
    });
  }

  getDetail(id:any){
    
      this.getdataService.getById('motionsdetail',id)
      .subscribe((data:any)=>{
        this.singleData = data;
        // //console.log(this.allData);
      });
      this.isDetail = true;
  }

  back(){
    this.isDetail=false;
  }

  getParliamentaryYears():any{
    this.getdataService.getAll('getListOfParliamentaryYears')
    .subscribe((data:any)=>{
      this.allParliamentaryYears = data;  
      // //console.log(this.allParliamentaryYears)       
    });
  }

  getTheDaySummaryOfProceedings():any{
    this.getdataService.getAll('getListOfOrderOfTheDaySummaryOfProceedings')
    .subscribe((data:any)=>{
      this.allTheDaySummaryOfProceedings = data;         
    });
  }

  getSessions():any{
    this.getdataService.getAll('getListOfSessions')
    .subscribe((data:any)=>{
      this.allSessions = data;         
    });
  }

}
