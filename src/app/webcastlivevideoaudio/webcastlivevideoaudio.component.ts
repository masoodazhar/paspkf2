import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-webcastlivevideoaudio',
  templateUrl: './webcastlivevideoaudio.component.html',
  styleUrls: ['./webcastlivevideoaudio.component.css']
})
export class WebcastlivevideoaudioComponent implements OnInit {

  public allData:any=[];
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
  }
  
  getData() {  
    this.getdataService.getAll('webcastlivevideoaudio')
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }



}
