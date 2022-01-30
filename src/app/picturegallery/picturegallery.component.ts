import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-picturegallery',
  templateUrl: './picturegallery.component.html',
  styleUrls: ['./picturegallery.component.css']
})
export class PicturegalleryComponent  {

  public allData:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
  }

  getData() {
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('picturegallery')
    .subscribe((data:any)=>{
      this.allData = data;
      this.isDetail=false;
    });
  }

  getDataMemeber(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  back(id:any){
    this.isDetail = false;
  }

}
