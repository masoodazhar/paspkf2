import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

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
    
    this.getdataService.getAll('speakersmain')
    .subscribe((data:any)=>{
      this.singleData = data;
    });

    this.getdataService.getAll('speakers')
    .subscribe((data:any)=>{
      this.allData = data;
    });

    this.getdataService.getAll('speakersformer')
    .subscribe((data:any)=>{
      this.allMembers = data;
    });

    this.getdataService.getAll('picturegalleryspeaker')
    .subscribe((data:any)=>{
      this.picturegalleryspeaker = data;
    });

  }
}
