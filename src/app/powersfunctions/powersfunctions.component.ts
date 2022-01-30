import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-powersfunctions',
  templateUrl: './powersfunctions.component.html',
  styleUrls: ['./style.scss']
})


export class PowersfunctionsComponent implements OnInit {
  public allData:any=[];
  public singleData:any={};
  panelOpenState = false;

  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer){}
 
  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData();
  }
  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }
  getData():any{

    this.getdataService.getAll('powersfunctionsheading')
    .subscribe((sdata:any)=>{
      this.singleData = sdata;
    });

    this.getdataService.getAll('powersfunctionsall')
    .subscribe((data:any)=>{
      this.allData = data;
    });

  }

  

}
