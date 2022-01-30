import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-resolutionspassed',
  templateUrl: './resolutionspassed.component.html',
  styleUrls: ['./resolutionspassed.component.css']
})
export class ResolutionspassedComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public selectedTenure:any;
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure(); 
    this.imageUrl = this.getdataService.getImageUrl();
    // this.onChange2();
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.selectedTenure=data[0].id
      this.onChange2(this.selectedTenure);
      
    });
  } 

  filterOfType(tab:any){
    this.onChange2(this.selectedTenure);
      setTimeout(()=>{
        this.allData = this.allData.filter(function (x:any) {
          return x.restype == tab.target.value;
         });       
      },1000);   
  }

  filterOfStatus(tab:any){
    this.onChange2(this.selectedTenure);
        setTimeout(()=>{
        this.allData = this.allData.filter((entry: { listofsessions: any[]; }) => {
          return entry.listofsessions.find(item => item.status == tab.target.value);
      });
    },1000);
      // setTimeout(()=>{
      //   this.allData.listofsessions = this.allData.listofsessions.filter(function (x:any) {
      //     return x.status == tab.target.value;
      //    });       
      // },1000);
      // //console.log(tab.target.value)
      // //console.log(this.allData)
}
filterOfDepartment(tab:any){
  this.onChange2(this.selectedTenure);

      setTimeout(()=>{
        this.allData = this.allData.filter(function (x:any) {
          return x.department == tab.target.value;
         });
       
      },1000);
}

  onChange(tenureid:any) {
    this.getdataService.getById('resolutionspassed',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
      this.isDetail=false;
    });
  }
  
  onChange2(tenureid:any) {
    // const id:any=1;
    this.getdataService.getById('resolutionspassed',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
      
    });
    return true;
    // return false;
  }

  // listofmembersdetail(id:any){
  //   this.getdataService.getById('resolutionspassed',id.target.data)
  //   .subscribe((data:any)=>{
  //     this.isDetail = true;
  //     this.singleData = data;
  //     //console.log(this.singleData)
  //   }); 
  // }

  back(id:any){
    this.isDetail = false;
  }
}
