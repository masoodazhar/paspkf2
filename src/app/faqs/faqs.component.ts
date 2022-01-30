import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./style.scss']
})
export class FaqsComponent implements OnInit {

 
  public allData:any=[];
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  safeData(data:any) {
    this.getdataService.loadingloader();
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

  ngOnInit(): void {
    this.getData();
    //console.log('working') 
  }
  
  getData() {    
    this.getdataService.getAll('faqs')
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }


}
