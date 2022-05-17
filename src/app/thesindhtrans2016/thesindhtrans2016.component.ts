import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-thesindhtrans2016',
  templateUrl: './thesindhtrans2016.component.html',
  styleUrls: ['./thesindhtrans2016.component.css']
})
export class Thesindhtrans2016Component implements OnInit {

  public allData:any=[];
  public singleData:any={};
  public imageUrl:any='';
  constructor(private getdataService:GetdataService) {

  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    const idalldata:any=false;
    this.getdataService.getById('thesindhtrans2016', idalldata)
    .subscribe((data:any) =>{
      this.allData=data;
    });
    const id:any =1;
    this.getdataService.getById('thesindhtrans2016',id)
    .subscribe((data:any)=>{
      this.singleData=data;
    });
  }
}
