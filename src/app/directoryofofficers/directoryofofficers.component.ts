import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-directoryofofficers',
  templateUrl: './directoryofofficers.component.html',
  styleUrls: ['./directoryofofficers.component.css']
})
export class DirectoryofofficersComponent implements OnInit {

  
  public allData:any=[];
  public imageUrl:string='';
  public hasData:boolean=false;
  
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.allData = this.getdataService.getAll('directoryofofficers')
    .subscribe((data:any)=>{
      this.allData = data;
      if(data.length>0){
        this.hasData = true;
      }
    });
    //console.log(this.allData);
  }

  filterItemsOfType(type: any, tab:any){
      return this.allData.filter(function (x:any) {
        return x.category == type && x.tabs == tab;
      });
  }

}
