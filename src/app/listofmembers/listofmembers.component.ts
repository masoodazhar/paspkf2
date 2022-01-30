import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-listofmembers',
  templateUrl: './listofmembers.component.html',
  styleUrls: ['./listofmembers.component.css']
})
export class ListofmembersComponent implements OnInit {
  public allData:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('listofmembers')
    .subscribe((data:any)=>{
      this.allData = data;
    });  
  }

  listofmembersdetail(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getById('listofmembers', id)
    .subscribe((data:any)=>{
      this.isDetail = true;
      this.singleData = data;
      //console.log(this.singleData)
    }); 
  }

  back(id:any){
    this.isDetail = false;
  }

}
