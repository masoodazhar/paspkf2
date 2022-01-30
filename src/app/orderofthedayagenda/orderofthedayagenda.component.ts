import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-orderofthedayagenda',
  templateUrl: './orderofthedayagenda.component.html',
  styleUrls: ['./orderofthedayagenda.component.css']
})
export class OrderofthedayagendaComponent implements OnInit {

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
    this.getdataService.getByPageById('orderofthedayagenda','Order of the Day',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(tenureid:any) {
    // const id:any=1;
    this.getdataService.getByPageById('orderofthedayagenda','Order of the Day',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }

  listofmembersdetail(id:any){
    this.getdataService.getByPageById('orderofthedayagendabyid','Order of the Day',id)
    .subscribe((data:any)=>{
      this.singleData = data;
      //console.log(this.singleData)
    }); 
  }

}
