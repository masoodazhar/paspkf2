import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public allData:any=[];
  public imageUrl = '';
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  ngOnInit(): void {
   this.getdataService.loadingloader();
    this.getData();
  }

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

  getData():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('about')
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
    })
  }
  

}
