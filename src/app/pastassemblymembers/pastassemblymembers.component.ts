import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-pastassemblymembers',
  templateUrl: './pastassemblymembers.component.html',
  styleUrls: ['./pastassemblymembers.component.css']
})
export class PastassemblymembersComponent implements OnInit {

  public allData:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public allAssemblyTenure:any=[];
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    // this.getData();
    this.getAssemblyTenure();
  }

  // getData():any{
  //   this.imageUrl = this.getdataService.getImageUrl();
  //   this.getdataService.getAll('pastassemblymembers')
  //   .subscribe((data:any)=>{
  //     this.allData = data;
  //   });  
  // }
  getAssemblyTenure():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange2(data[0].id);
    });
  }

  listofmembersdetail(id:any){
    //console.log(id)
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('pastassemblymembers', id)
    .subscribe((data:any)=>{
      this.isDetail = true;
      this.singleData = data;
      //console.log(this.singleData)
    }); 
  }

  back(id:any){
    this.isDetail = false;
  }
  onChange(tenureid:any) {
    this.getdataService.getById('pastassemblymembersbyTenure',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  

  onChange2(tenureid:any) {
    this.getdataService.getById('pastassemblymembersbyTenure',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
}
