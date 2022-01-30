import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-cabinetcomposition',
  templateUrl: './cabinetcomposition.component.html',
  styleUrls: ['./cabinetcomposition.component.css']
})
export class CabinetcompositionComponent implements OnInit {

  public allData:any=[];
  public Advisor:any=[];
  public SpacialAdvisor:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl = '';
  public selectedTenure:any;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    // this.getData();
    this.getAssemblyTenure();
    // //console.log('=================');
    // //console.log(this.allAssemblyTenure)
    
  }

  // getData():any{
  //   this.allData = this.getdataService.getAll('cabinetcomposition')
  //   .subscribe((data:any)=>{
  //     this.allData = data;
  //   });
  // }

  getAssemblyTenure():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      this.onChange(data[0].id, false);
    });
  }

  filterItemsOfType(type: any, tab:any){
      return this.allData.filter(function (x:any) {
        return x.category == type && x.tabs == tab;
      });
  }

  getAdvisor(tenureid:any){
    this.getdataService.getById('advisor',tenureid)
    .subscribe((data:any)=>{
      this.Advisor = data;
      // //console.log('====================Advisor=============');      
      // //console.log(this.Advisor)
    });
  }

  getSpacialAdvisor(tenureid:any){
    this.getdataService.getById('specialadvisor',tenureid)
    .subscribe((data:any)=>{
      this.SpacialAdvisor = data;
    });
  }

  onChange(tenureid:any, check:boolean) {
    let tenureids:any = 0
    if(check){
      tenureids = tenureid.target.value
    }else{
      tenureids = tenureid
    }
    this.getdataService.getById('cabinetcomposition',tenureids)
    .subscribe((data:any)=>{
      this.allData = data;
    });
    this.getAdvisor(tenureids);
    this.getSpacialAdvisor(tenureids);
  }
  
  // getAllData(tenureid:any) {
  //   this.getdataService.getById('cabinetcomposition',tenureid)
  //   .subscribe((data:any)=>{
  //     this.allData = data;
      
  //   });
   
  // }

}
