import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  public allData:any=[];
  public allAssemblyTenure:any=[];
  public imageUrl:any;
  public singleData:any={};
  public isDetail:boolean=false;
  public selectedTenure:any;
  public sub:any;
  public pageNum:any;
  
  public tab1:any = '';
  public tab2:any = '';
  public tab3:any = '';
  public tab4:any = '';
  public tab5:any = '';

  constructor(private getdataService:GetdataService, private Activatedroute:ActivatedRoute, private router:Router) {  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.getAssemblyTenure(); 
    this.sub = this.Activatedroute.queryParamMap
       .subscribe((params:any) => {
     this.pageNum = +params.get('page')||0;     
    });

    if(this.pageNum==1){
      this.tab1='show active';
    }else if(this.pageNum==2){
      this.tab2='show active';
    }
    else if(this.pageNum==3){
      this.tab3='show active';
    }
    else if(this.pageNum==4){
      this.tab4='show active';
    }
    else if(this.pageNum==5){
      this.tab5='show active';
    }else{
      this.tab1='show active';
    }
  }

  getAssemblyTenure():any{
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;  
      this.selectedTenure = data[0].id;  
      this.onChange2(this.selectedTenure);     
    });
  }

  filterItemsOfType(tab:any){
      return this.allData.filter(function (x:any) {
       return x.type_tabs == tab;
      });
  }

  Search(tab:any){
    this.onChange2(this.selectedTenure);
    if(tab.target.value != '0'){
      setTimeout(()=>{
        this.allData = this.allData.filter(function (x:any) {
          return x.bill_type == tab.target.value;
         });       
      },1000);  
    }
}

  onChange(tenureid:any) {
    this.getdataService.getById('bills',tenureid.target.value)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
      this.isDetail=false;
    });
  }
  
  onChange2(tenureid:any) {
    this.getdataService.getById('bills',tenureid)
    .subscribe((data:any)=>{
      this.allData = data;
      // //console.log(this.allData)
    });
  }

  getDetail(id:any){
    this.imageUrl = this.getdataService.getImageUrl();
    // //console.log(id);
    var data = this.allData.filter(function(x:any){ return x.id === id})
    // //console.log(this.allData)
    // //console.log('==============')
    this.singleData = data[0]; 
    this.isDetail=true;
   
  }

  back(id:any){
    this.isDetail = false;
  }
}


