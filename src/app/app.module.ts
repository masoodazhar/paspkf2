import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { WorkingofassemblyComponent } from './workingofassembly/workingofassembly.component';
import { RoleofassemblyComponent } from './roleofassembly/roleofassembly.component';
import { CabinetcompositionComponent } from './cabinetcomposition/cabinetcomposition.component';
import { LeaderofthehouseComponent } from './leaderofthehouse/leaderofthehouse.component';
import { LeaderoftheoppositionComponent } from './leaderoftheopposition/leaderoftheopposition.component';
import { RulesofproceduresComponent } from './rulesofprocedures/rulesofprocedures.component';
import { ParliamentaryprivilegesComponent } from './parliamentaryprivileges/parliamentaryprivileges.component';
import { OverviewComponent } from './overview/overview.component';
import { OrganizationalchartComponent } from './organizationalchart/organizationalchart.component';
import { DirectoryofofficersComponent } from './directoryofofficers/directoryofofficers.component';
import { PowersfunctionsComponent } from './powersfunctions/powersfunctions.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { RulesComponent } from './rules/rules.component';
import { Thesindhtrans2016Component } from './thesindhtrans2016/thesindhtrans2016.component';
import { AssemblylibraryComponent } from './assemblylibrary/assemblylibrary.component';
import { DeputyspeakerComponent } from './deputyspeaker/deputyspeaker.component';
import { MembersdirectoryComponent } from './membersdirectory/membersdirectory.component';
import { ListofmembersComponent } from './listofmembers/listofmembers.component';
import { MembersperformancereportComponent } from './membersperformancereport/membersperformancereport.component';
import { PastassemblymembersComponent } from './pastassemblymembers/pastassemblymembers.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { CurrentassemblysummaryComponent } from './currentassemblysummary/currentassemblysummary.component';
import { SessionsComponent } from './sessions/sessions.component';
import { OrderofthedayagendaComponent } from './orderofthedayagenda/orderofthedayagenda.component';
import { SummaryofproceedingsComponent } from './summaryofproceedings/summaryofproceedings.component';
import { HousedebatesComponent } from './housedebates/housedebates.component';
import { QuestionsComponent } from './questions/questions.component';
import { CallattentionComponent } from './callattention/callattention.component';
import { ResolutionspassedComponent } from './resolutionspassed/resolutionspassed.component';
import { StagesofbillsComponent } from './stagesofbills/stagesofbills.component';
import { BillsComponent } from './bills/bills.component';
import { ActsComponent } from './acts/acts.component';
import { MotionsComponent } from './motions/motions.component';
import { PerformanceofassemblyComponent } from './performanceofassembly/performanceofassembly.component';
import { ParliamentarycalendarComponent } from './parliamentarycalendar/parliamentarycalendar.component';
import { ResolutionspasseddetailComponent } from './resolutionspasseddetail/resolutionspasseddetail.component';
import { CommitteesystemComponent } from './committeesystem/committeesystem.component';
import { CommitteerulesComponent } from './committeerules/committeerules.component';
import { PublicaccountscommitteeComponent } from './publicaccountscommittee/publicaccountscommittee.component';
import { StandingcommitteesComponent } from './standingcommittees/standingcommittees.component';
import { CommitteesonrulesofprocedureprivilegesComponent } from './committeesonrulesofprocedureprivileges/committeesonrulesofprocedureprivileges.component';
import { FinancecommitteeComponent } from './financecommittee/financecommittee.component';
import { SelectcommitteeonbillsComponent } from './selectcommitteeonbills/selectcommitteeonbills.component';
import { CommitteeongovernmentassuranceComponent } from './committeeongovernmentassurance/committeeongovernmentassurance.component';
import { LibrarycommitteeComponent } from './librarycommittee/librarycommittee.component';
import { BusinessadvisorycommitteeComponent } from './businessadvisorycommittee/businessadvisorycommittee.component';
import { SpecialcommitteeComponent } from './specialcommittee/specialcommittee.component';
import { ReportslaidComponent } from './reportslaid/reportslaid.component';
import { HousecommitteeComponent } from './housecommittee/housecommittee.component';
import { ConstructioncommitteeComponent } from './constructioncommittee/constructioncommittee.component';
import { CommitteesystemdetailComponent } from './committeesystemdetail/committeesystemdetail.component';
import { StandingcommitteesdetailComponent } from './standingcommitteesdetail/standingcommitteesdetail.component';
import { CommitteesonrulesofprocedureprivilegesdetailComponent } from './committeesonrulesofprocedureprivilegesdetail/committeesonrulesofprocedureprivilegesdetail.component';
import { Committeeongovernmentassurancedetail1Component } from './committeeongovernmentassurancedetail1/committeeongovernmentassurancedetail1.component';
import { Committeeongovernmentassurancedetail2Component } from './committeeongovernmentassurancedetail2/committeeongovernmentassurancedetail2.component';
import { NotifyessionsComponent } from './notifyessions/notifyessions.component';
import { NotifymembersComponent } from './notifymembers/notifymembers.component';
import { NotifycommitteesComponent } from './notifycommittees/notifycommittees.component';
import { NotifygeneralComponent } from './notifygeneral/notifygeneral.component';
import { PressreleasesComponent } from './pressreleases/pressreleases.component';
import { NewsandactivitiesComponent } from './newsandactivities/newsandactivities.component';
import { PicturegalleryComponent } from './picturegallery/picturegallery.component';
import { TendersComponent } from './tenders/tenders.component';
import { JobsComponent } from './jobs/jobs.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { UsefullinksComponent } from './usefullinks/usefullinks.component';
import { FaqsComponent } from './faqs/faqs.component';
import { WebcastlivevideoaudioComponent } from './webcastlivevideoaudio/webcastlivevideoaudio.component';
import { VideoarchiveComponent } from './videoarchive/videoarchive.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RulesofproceduresdetailComponent } from './rulesofproceduresdetail/rulesofproceduresdetail.component';
import { ActslistsComponent } from './actslists/actslists.component';
import { ActslistsdetailsComponent } from './actslistsdetails/actslistsdetails.component';
import { StandingcommitteestabsComponent } from './standingcommitteestabs/standingcommitteestabs.component';
import { CommitteesonrulesofprocedureprivilegestabsComponent } from './committeesonrulesofprocedureprivilegestabs/committeesonrulesofprocedureprivilegestabs.component';
import { PublicationsComponent } from './publications/publications.component';
import { ReportsComponent } from './reports/reports.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ParliamentaryprivilegesdetailsComponent } from './parliamentaryprivilegesdetails/parliamentaryprivilegesdetails.component';
import { RulesdetailComponent } from './rulesdetail/rulesdetail.component';
import { SpeakersdetailComponent } from './speakersdetail/speakersdetail.component';
import { DeputyspeakerdetailComponent } from './deputyspeakerdetail/deputyspeakerdetail.component';
import { ListofsessionsComponent } from './listofsessions/listofsessions.component';
import { BillsdetailComponent } from './billsdetail/billsdetail.component';
import { OrderofthedayagendasessionsbasedComponent } from './orderofthedayagendasessionsbased/orderofthedayagendasessionsbased.component';
import { MemberprofileComponent } from './memberprofile/memberprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SittingsdetailComponent } from './sittingsdetail/sittingsdetail.component';
import { QuestionsdetailComponent } from './questionsdetail/questionsdetail.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { LegislationsComponent } from './legislations/legislations.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
   
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MessagesComponent,
    WorkingofassemblyComponent,
    RoleofassemblyComponent,
    CabinetcompositionComponent,
    LeaderofthehouseComponent,
    LeaderoftheoppositionComponent,
    RulesofproceduresComponent,
    ParliamentaryprivilegesComponent,
    OverviewComponent,
    OrganizationalchartComponent,
    DirectoryofofficersComponent,
    PowersfunctionsComponent,
    ContactlistComponent,
    RulesComponent,
    Thesindhtrans2016Component,
    AssemblylibraryComponent,
    DeputyspeakerComponent,
    MembersdirectoryComponent,
    ListofmembersComponent,
    MembersperformancereportComponent,
    PastassemblymembersComponent,
    SpeakersComponent,
    CurrentassemblysummaryComponent,
    SessionsComponent,
    OrderofthedayagendaComponent,
    SummaryofproceedingsComponent,
    HousedebatesComponent,
    QuestionsComponent,
    CallattentionComponent,
    ResolutionspassedComponent,
    StagesofbillsComponent,
    BillsComponent,
    ActsComponent,
    MotionsComponent,
    PerformanceofassemblyComponent,
    ParliamentarycalendarComponent,
    ResolutionspasseddetailComponent,
    CommitteesystemComponent,
    CommitteerulesComponent,
    PublicaccountscommitteeComponent,
    StandingcommitteesComponent,
    CommitteesonrulesofprocedureprivilegesComponent,
    FinancecommitteeComponent,
    SelectcommitteeonbillsComponent,
    CommitteeongovernmentassuranceComponent,
    LibrarycommitteeComponent,
    BusinessadvisorycommitteeComponent,
    SpecialcommitteeComponent,
    ReportslaidComponent,
    HousecommitteeComponent,
    ConstructioncommitteeComponent,
    CommitteesystemdetailComponent,
    StandingcommitteesdetailComponent,
    CommitteesonrulesofprocedureprivilegesdetailComponent,
    Committeeongovernmentassurancedetail1Component,
    Committeeongovernmentassurancedetail2Component,
    NotifyessionsComponent,
    NotifymembersComponent,
    NotifycommitteesComponent,
    NotifygeneralComponent,
    PressreleasesComponent,
    NewsandactivitiesComponent,
    PicturegalleryComponent,
    TendersComponent,
    JobsComponent,
    GlossaryComponent,
    UsefullinksComponent,
    FaqsComponent,
    WebcastlivevideoaudioComponent,
    VideoarchiveComponent,
    NotificationsComponent,
    RulesofproceduresdetailComponent,
    ActslistsComponent,
    ActslistsdetailsComponent,
    StandingcommitteestabsComponent,
    CommitteesonrulesofprocedureprivilegestabsComponent,
    PublicationsComponent,
    ReportsComponent,
    ContactusComponent,
    ParliamentaryprivilegesdetailsComponent,
    RulesdetailComponent,
    SpeakersdetailComponent,
    DeputyspeakerdetailComponent,
    ListofsessionsComponent,
    BillsdetailComponent,
    OrderofthedayagendasessionsbasedComponent,
    MemberprofileComponent,
    SittingsdetailComponent,
    QuestionsdetailComponent,
    LegislationsComponent
  ],
  imports: [
    BrowserModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxPrintModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    // NgbModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}