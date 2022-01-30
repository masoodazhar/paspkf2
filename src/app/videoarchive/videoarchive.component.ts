import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-videoarchive',
  templateUrl: './videoarchive.component.html',
  styleUrls: ['./videoarchive.component.css']
})
export class VideoarchiveComponent implements OnInit {

 
  public allData:any=[];
  public imageUrl:any='';
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer){}

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

  safeVideo(data:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
  }
  
  getData() {  
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('videoarchive')
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }


}
