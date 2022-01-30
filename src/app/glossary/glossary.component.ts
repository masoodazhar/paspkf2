import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})

export class GlossaryComponent implements OnInit {

  public allData:any=[];
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustHtml(data);
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getData(); 
  }
  
  getData() {    
    this.getdataService.getAll('glossary')
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }


}
