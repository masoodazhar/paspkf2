import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-deputyspeaker',
  templateUrl: './deputyspeaker.component.html',
  styleUrls: ['./deputyspeaker.component.css']
})
export class DeputyspeakerComponent implements OnInit {

  public allData:any=[];
  public allMembers:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public picturegalleryspeaker:any=[]
  constructor(private getdataService:GetdataService){}

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    
    this.getdataService.getAll('deputyspeakermain')
    .subscribe((data:any)=>{
      this.singleData = data;
    });

    this.getdataService.getAll('deputyspeaker')
    .subscribe((data:any)=>{
      this.allData = data;
    });

    this.getdataService.getAll('deputyspeakerformer')
    .subscribe((data:any)=>{
      this.allMembers = data;
    });

    this.getdataService.getAll('picturegallerydeputyspeaker')
    .subscribe((data:any)=>{
      this.picturegalleryspeaker = data;
    });
  }

}
