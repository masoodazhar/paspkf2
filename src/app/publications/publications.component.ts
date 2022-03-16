import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  public allData:any=[];
  public singleData:any={};
  public isDetail:boolean=false;
  public allAssemblyTenure:any=[];
  public imageUrl:any='';
  public tenureid:any;
  constructor(private getdataService:GetdataService, protected sanitizer: DomSanitizer) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure();
    
  }
  
  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;  
      this.tenureid = data[0].id
      this.onChange2(this.tenureid) 
    });
  } 

  filterOfType(tab:any) {
    this.onChange2(this.tenureid) 
      if(tab.target.value != '.'){
        setTimeout(()=>{
          this.allData = this.allData.filter(function (x:any) {
            return x.department_committee == tab.target.value;
           });       
        },1000);
      }   
  }

  safeData(data:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  onChange(tenureid:any) {
    this.tenureid = tenureid.target.value
    const page:any='Publication';
    this.getdataService.getByPageById('publications_reports',page,this.tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)
    });
  }
  
  onChange2(id:any){
    // const id:any=1;
    const page:any='Publication';
    this.imageUrl=this.getdataService.getImageUrl();
    this.getdataService.getByPageById('publications_reports',page,id)
    .subscribe((data:any)=>{
      this.allData = data;
      //console.log(this.allData)      
    });
  }

  keySearch(key:any){
    const keySearch:any=key.target.value;
    if(keySearch=='')
    {
      this.onChange2(this.tenureid) 
      
    }else{
      
      const page:any='Publication';
      this.getdataService.getByPageByIdTitle('publications_reports',page,this.tenureid,keySearch)
      .subscribe((data:any)=>{
        this.allData = data;
        //console.log(this.allData)      
      });
    }
  }

  getSingleData(id:any){
    var data = this.allData.filter((x: { id: any; })=>{ return x.id === id})
    this.singleData = data[0]
    this.isDetail = true;
  }

  back(id:any){
    this.isDetail = false;
  }

//   downloadMyFile(url:any){
//     const link = document.createElement('a');
//     link.setAttribute('target', '_blank');
//     link.setAttribute('href', this.imageUrl+''+url);
//     link.setAttribute('download', `products.csv`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
// }

}
