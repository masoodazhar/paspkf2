import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-newsandactivities',
  templateUrl: './newsandactivities.component.html',
  styleUrls: ['./newsandactivities.component.css']
})
export class NewsandactivitiesComponent implements OnInit {
  public allData:any=[];
  public singleData:any={};
  public imageUrl:any='';
  public isDetail:boolean=false;

  public deputySpeakerNews:any=[];
  public SpeakerNews:any=[];
  constructor(private getdataService:GetdataService) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
    this.getSpeakerNews(); 
    this.getdeputySpeakerNews();
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.tab_type == tab;
      });
  }

  getData() {
    this.imageUrl = this.getdataService.getImageUrl();
    const page:any = 'News and Activities';
    this.getdataService.getById('pressreleases',page)
    .subscribe((data:any)=>{
      this.allData = data;
      this.isDetail=false;
    });
  }
  getSpeakerNews(){
    this.getdataService.getAll('speakerNews')
    .subscribe((data:any)=>{
      this.SpeakerNews = data;
      this.isDetail=false;
    });
  }

  getdeputySpeakerNews(){
    this.getdataService.getAll('deputyspeakerNews')
    .subscribe((data:any)=>{
      this.deputySpeakerNews = data;
      this.isDetail=false;
    });
  }

  getDataMemeber(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  getDataMemeberSpeaker(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.SpeakerNews.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  getDataMemeberDeputySpeaker(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    var data = this.deputySpeakerNews.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  back(id:any){
    this.isDetail = false;
  }

}
