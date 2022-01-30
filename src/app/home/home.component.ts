import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public speaker:any=[];
  public getSessionsOrder:any=[];
  public getSessionsSummery:any=[];
  public getSessionsHouse:any=[];
  public getSessionsResolution:any=[];
  public getSessionsQuestion:any=[];
  public getPressReleases:any=[];

  public getPressReleasesSession:any=[];
  public getPressReleasesMember:any=[];
  public getPressReleasesCommittee:any=[];
  public getPressReleasesGeneral:any=[];

  public imageUrl = '';
  public memberid:any;

  public videoaudioLast:any={};
  public videoaudioAll:any=[];
  public newsandactivities:any=[];
  public gallery:any=[];

 

  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.imageUrl = this.getdataService.getImageUrl();
    this.getSpeakers();
    this.getSessionsorderoftheday();
    this.getSessionssummery();
    this.getSessionshouse();
    this.getSessionsresolution();
    this.getSessionsquestion();
    this.getPressRelease();
    this.getPressReleasesMembers();
    this.getPressReleasesCommittees();
    this.getPressReleasesSessions();
    this.getPressReleasesGenerals();
    this.getvideoaudioAll();
    this.getvideoaudioLast();
    this.getnewsandactivities();
    this.getpictureGallery();
    
    //console.log('===========================')
    //console.log(this.imageUrl)
  }
  getvideoaudioLast(){
    // webcastlivevideoaudiolast
    this.getdataService.getAll('webcastlivevideoaudiolast')
    .subscribe((data:any)=>{
      this.videoaudioLast = data;
    });
  }

  getvideoaudioAll(){
    // webcastlivevideoaudiolast
    this.getdataService.getAll('videoarchiveLimit')
    .subscribe((data:any)=>{
      this.videoaudioAll = data;
    });
  }

  getnewsandactivities(){
    // webcastlivevideoaudiolast
    this.getdataService.getAll('topnewsandactivities')
    .subscribe((data:any)=>{
      this.newsandactivities = data;
    });
  }

getpictureGallery(){
    // webcastlivevideoaudiolast
    this.getdataService.getAll('picturegallery')
    .subscribe((data:any)=>{
      this.gallery = data;
    });
  }

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }
  getPressReleasesMembers() {
    
    this.getdataService.getAll('notificationMembers')
    .subscribe((data:any)=>{
      this.getPressReleasesMember = data;
      //console.log(this.getPressReleasesMember)
    });
  }

  getPressReleasesCommittees() {
    
    this.getdataService.getAll('notificationCommittees')
    .subscribe((data:any)=>{
      this.getPressReleasesCommittee = data;
      //console.log(this.getPressReleasesCommittee)
    });
  }

  getPressReleasesSessions() {
    
    this.getdataService.getAll('notificationSessions')
    .subscribe((data:any)=>{
      this.getPressReleasesSession = data;
      //console.log(this.getPressReleasesSession)
    });
  }

  getPressReleasesGenerals() {
    
    this.getdataService.getAll('notificationGeneral')
    .subscribe((data:any)=>{
      this.getPressReleasesGeneral = data;
      //console.log(this.getPressReleasesGeneral)
    });
  }

  getPressRelease() {
    
    this.getdataService.getAll('toppressreleases')
    .subscribe((data:any)=>{
      this.getPressReleases = data;
      // //console.log(this.getPressReleases)
    });
  }

  getSpeakers() {    
    this.getdataService.getAll('speakersmessages')
    .subscribe((data:any)=>{
      this.speaker = data;
      // //console.log(this.speaker)
    });
  }

 

  getSessionsorderoftheday(){
    this.getdataService.getAll('sessionsorderoftheday')
    .subscribe((data:any)=>{
      this.getSessionsOrder = data;
      // //console.log(this.getSessionsOrder)
    });
  }

  getSessionssummery(){
    // this.getdataService.getAll('sessionssummery')
    // .subscribe((data:any)=>{
    //   this.getSessionsSummery = data;
    //   // //console.log(this.getSessionsSummery)
    // });
  }

  getSessionshouse(){
    this.getdataService.getAll('sessionshouse')
    .subscribe((data:any)=>{
      this.getSessionsHouse = data;
      // //console.log(this.getSessionsHouse)
    });
  }

  getSessionsresolution(){
    this.getdataService.getAll('sessionsresolution')
    .subscribe((data:any)=>{
      this.getSessionsResolution = data;
      // //console.log(this.getSessionsResolution)
    });
  }

  getSessionsquestion(){
    this.getdataService.getAll('sessionsquestion')
    .subscribe((data:any)=>{
      this.getSessionsQuestion = data;
      // //console.log(this.getSessionsQuestion)
    });
  }

}
