import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GetdataService } from '../getdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membersdirectory',
  templateUrl: './membersdirectory.component.html',
  styleUrls: ['./membersdirectory.component.css']
})
export class MembersdirectoryComponent implements OnInit {

  public allData:any=[];
  public searchedData:any=[];
  public subjects:any=[];
  public parties:any=[];
  public ageData:any=[];
  public seatData:any=[];
  public birthData:any=[];
  public contactData:any=[];

  public byDestrict:any=[];
  public searchedByDestrict:any=[];
  public searchedByAssembly:any=[];
  public elections:any=[];
  public byParty:any=[];
  public totalParty:number=0;
  public singleData:any={};
  public imageUrl:any='';
  public isClicked:boolean=false;
  public isClickedAssembly:boolean=false;

  public _25to30:number=0;
  public _31to40:number=0;
  public _41to50:number=0;
  public _51to60:number=0;
  public _61to70:number=0;
  public _71to80:number=0;
  public _81to90:number=0;
  public noage:number=0;
  public form:any;
  public searchfrom:any;

  public openTabName:any =false;
  public openTabDistrict:any =false;
  public openTabParty:any =false;
  public openTabAdvance:any =false;
  public openTabAssembly:any =false;
  public openTabMix:any =false;
  public openTabMixValue:string ='';
  public assembliesList:any = [];
  public optionData:any = [];
  public optionActive:any =false;
  public allAssemblyTenure:any=[];
  public currentTenureId:any;

  constructor(private getdataService:GetdataService, public fb: FormBuilder, private _Activatedroute:ActivatedRoute){
    this.form = new FormGroup({
      name: new FormControl(),
      qualification: new FormControl(),
      age: new FormControl(),
      religion: new FormControl(),
      previouspositions: new FormControl(),
      seattype: new FormControl(),
      maritalstatus: new FormControl(),
      Constituency: new FormControl(),
      Address: new FormControl(),

      dateofbirth: new FormControl(),
      placeofbirth: new FormControl(),
      district: new FormControl(),
      partyassociation: new FormControl(),
      phonenumber: new FormControl(),
      email: new FormControl(),

   });
  }

  ngOnInit(): void {
    this.getdataService.loadingloader();
    this.searchfrom = this._Activatedroute.snapshot.paramMap.get("data");
    if(this.searchfrom=='name'){
      this.openTabName = 'show active'
    }else if(this.searchfrom=='district'){
      this.openTabDistrict = 'show active'
    }else if(this.searchfrom=='party'){
      this.openTabParty='show active'
    }
    else if(this.searchfrom=='advanceSearch'){
      this.openTabAdvance='show active'
    }
    else if(this.searchfrom=='assembly'){
      this.openTabAssembly='show active'
      // this.optionActive=true;
      // this.searchHomeOptions(this.searchfrom)
    }
    else if(this.searchfrom=='seattype' || this.searchfrom=='constituency' || this.searchfrom=='qualification'){
      this.openTabMix='show active'
      
    }
    if(this.searchfrom== null){
      this.openTabName = 'show active'
    }
    this.getAssemblyTenure();
    
    //console.log(this.searchfrom)
  }

  getAssemblyTenure():any{
    this.imageUrl = this.getdataService.getImageUrl();
    this.getdataService.getAll('assemblytenure')
    .subscribe((data:any)=>{
      this.allAssemblyTenure = data;   
      // this.onChange2();
      this.getData(data[0].id, true);
      this.currentTenureId = data[0].id;
      
    });
  }

  // onChange2(tenureid:any) {
  //   this.getdataService.getById('currentassemblysummary',tenureid)
  //   .subscribe((data:any)=>{
  //     this.allData = data;
  //     //console.log(this.allData)
  //   });
  // }

  searchElection(){
    // this.getData();
    this.getdataService.getById('elections', this.currentTenureId)
    .subscribe((data:any)=>{
      this.elections = data;
    })
  }

  searchByAlpha(options:any){
    // this.getData();
    this.getdataService.getByTenurePageSession('memebersdirectorybyalpha',this.currentTenureId , options)
    .subscribe((data:any)=>{
      this.allData = data;
    })
  }
  filterSeatType(type: any){    
    return this.allData.filter(function (x:any) {
      return x.seattype == 'General Seat' || x.seattype == 'Reserved Seat';
    });
  }

  filterQualification(type: any){    
    return this.allData.filter(function (x:any) {
      return x.qualification != '-' && x.qualification != '';
    });
  }

  filterConstituency(type: any){    
    return this.allData.filter(function (x:any) {
      return x.constituency != '-' && x.constituency != '';
    });
  }
  searchHomeOptions(options:any){
    this.getdataService.getById('memebersdirectoryOptions', options)
    .subscribe((data:any)=>{
      this.optionData = data;
      //console.log(this.optionData)
    })
  }

  submitForm(){
    let Form = JSON.stringify(this.form.value);
    this.getdataService.advanceSearch(Form)
    .subscribe(
      response => {
        console.log(response);
        
        this.searchedData = response
      }
    )
    //console.log(this.searchedData)
  }

  getAssemblies(){
    this.getdataService.getAll('memebersdirectoryassemblies')
    .subscribe((data:any)=>{
      this.assembliesList = data;
      //console.log(this.assembliesList)
    },
    error => console.log(error)
    );
  }
  SearchByAssembly(type: any){
    this.isClickedAssembly=true;
      this.searchedByAssembly = this.allData.filter(function (x:any) {
        return x.assemblyname == type;
      });
  }

  filterWoomen(type: any){    
      return this.allData.filter(function (x:any) {
        return x.wooment == type;
      });
  }

  SearchByDistrict(type: any){
    this.isClicked=true;
      this.searchedByDestrict = this.allData.filter(function (x:any) {
        return x.District == type;
      });
  }

  getSubject(){
    this.getdataService.getById('memebersdirectorysubjects',this.currentTenureId)
    .subscribe((data:any)=>{

      // console.log('default data',data);

      let last:any = []

      for(let qualify of data){

        let myData = this.convertData(qualify.qualification);
        myData.map((x:any)=>{   if(!last.includes(x)){last.push(x)}  })
      }

      console.log(last);
      
      
      this.subjects = last
      

      // let arr:any = []

      // arr = [].concat.apply([], data);
      // console.log('cncate.uply',arr);

      // let values = data.map(function (obj:any) { return  JSON.parse(obj.qualification)  });

      // console.log('CONVERTED values', [].concat.apply([], values));
      
      // arr = [].concat.apply([], values);
      
      
      // for(let i of values) {
      //   for(let j of i){
      //     // this.subjects.concat(j);
      //     arr.push(j);
      //     console.log("single values", j);
          
      //   }        
      // }
      // this.subjects = data
      
      // console.log("LAST  this.subjects",  this.subjects);
      
      // console.warn('===========================currentTenureId=================');
      
      // //console.log(this.currentTenureId)
    })
  }

  getPaty(){
    this.getdataService.getById('memebersdirectoryParty',this.currentTenureId)
    .subscribe((data:any)=>{
      this.parties = data;
    })
  }

  FilterByQualification(type: any){
      return this.allData.filter(function (x:any) {
        return x.qualification.includes(type); 
      });
  }
  FilterByGender(type: any){
    return this.allData.filter(function (x:any) {
      return x.wooment == type;
    });
  }

  FilterByreligin(type: any){
    return this.allData.filter(function (x:any) {
      return x.religion == type;
    });
  }

  FilterBySeats(type: any){
    return this.allData.filter(function (x:any) {
      return x.seattype == type;
    });
  }

  FilterBySeatsWoomen(type: any, gender:any){
    return this.allData.filter(function (x:any) {
      return x.seattype == type && x.wooment==gender;
    });
  }

  FilterBySeatsNoneMuslim(type: any, reliegon:any){
    return this.allData.filter(function (x:any) {
      return x.seattype == type && x.religion != reliegon;
    });
  }

  FilterByParty(type: any){
    return this.allData.filter(function (x:any) {
      return x.partyassociation == type;
    });
  }

  SearchByAge(){
    this.imageUrl = this.getdataService.getImageUrl();    
    this.getdataService.getById('memebersdirectoryByAge', this.currentTenureId)
    .subscribe((data:any)=>{
      this.ageData = data;
    })
  }
  SearchBySeat(){
    this.imageUrl = this.getdataService.getImageUrl();    
    this.getdataService.getById('memebersdirectoryBySeat',this.currentTenureId)
    .subscribe((data:any)=>{
      this.seatData = data;
    })
  }
  
  SearchByBirth(){
    this.imageUrl = this.getdataService.getImageUrl();    
    this.getdataService.getById('memebersdirectoryByBirth',this.currentTenureId)
    .subscribe((data:any)=>{
      this.birthData = data;
    })
  }
  
  SearchByContact(){
    this.imageUrl = this.getdataService.getImageUrl();    
    this.getdataService.getById('memebersdirectoryByContact',this.currentTenureId)
    .subscribe((data:any)=>{
      this.contactData = data;
    })
  }
  getData(tenure:any, check:boolean):any{
   
    var tenrueid:any = 0;
    if(check){
      tenrueid = tenure;
      this.currentTenureId = tenure;
    }else{
      tenrueid = tenure.target.value;
      this.currentTenureId = tenure.target.value;
    }
    this.getByParty();
    this.getByDestrict();
    // this.membershipstatistics();
    
    this.SearchByAge();
    this.SearchBySeat();
    this.SearchByBirth();
    this.getSubject();
    this.getPaty();
    this.SearchByContact();
    this.getAssemblies();
    this.searchElection();
    this.imageUrl = this.getdataService.getImageUrl();    
    this.getdataService.getById('memebersdirectory', tenrueid)
    .subscribe((data:any)=>{
      this.allData = data;
      for(let i in this.allData)
      {
      if(this.allData[i].age >=25 && this.allData[i].age <=30){
        this._25to30 += 1;
      }
      if(this.allData[i].age >=31 && this.allData[i].age <=40){
        this._31to40 += 1;
      }
      if(this.allData[i].age >=41 && this.allData[i].age <=50){
        this._41to50 += 1;
      }
      if(this.allData[i].age >=51 && this.allData[i].age <=60){
        this._51to60 += 1;
      }
      if(this.allData[i].age >=61 && this.allData[i].age <=70){
        this._61to70 += 1;
      }
      if(this.allData[i].age >=71 && this.allData[i].age <=80){
        this._71to80 += 1;
      }
      if(this.allData[i].age >=81 && this.allData[i].age <=90){
        this._81to90 += 1;
      }
      if(this.allData[i].age==0){
        this.noage +=1;
      }
    }
    },
    error => console.log("ROOR", error)
     );
    console.log("START ==============HERE");
    
    console.log(this.allData);
    
  }

  getByDestrict(){
    this.getdataService.getById('memebersdirectoryByDestrict',this.currentTenureId)
    .subscribe((data:any)=>{
      this.byDestrict = data;
    });
    // //console.log(this.byDestrict)
  }

  getByParty(){
    this.getdataService.getById('memebersdirectoryByParty',this.currentTenureId)
    .subscribe((data:any)=>{
      this.byParty = data;
    });
  }

  getLength(data:Object){
    return Object.keys(data).length
  }
 
  back(eeee:any)
  {
    this.isClicked=false;
    this.isClickedAssembly=false;
  }
  convertData(data:any): any{
    return JSON.parse(data);
  }

  
}
