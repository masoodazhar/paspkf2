import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ABOUT Assembly
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { WorkingofassemblyComponent } from './workingofassembly/workingofassembly.component';
import { RoleofassemblyComponent } from './roleofassembly/roleofassembly.component';
import { CabinetcompositionComponent } from './cabinetcomposition/cabinetcomposition.component';
import { LeaderofthehouseComponent } from './leaderofthehouse/leaderofthehouse.component';
import { LeaderoftheoppositionComponent } from './leaderoftheopposition/leaderoftheopposition.component';
import { RulesofproceduresComponent } from './rulesofprocedures/rulesofprocedures.component';
import { RulesofproceduresdetailComponent } from './rulesofproceduresdetail/rulesofproceduresdetail.component';
import { ParliamentaryprivilegesComponent } from './parliamentaryprivileges/parliamentaryprivileges.component';
import { ParliamentaryprivilegesdetailsComponent } from './parliamentaryprivilegesdetails/parliamentaryprivilegesdetails.component';

// ABOUT Secretariat
import { OverviewComponent } from './overview/overview.component';
import { OrganizationalchartComponent } from './organizationalchart/organizationalchart.component';
import { DirectoryofofficersComponent } from './directoryofofficers/directoryofofficers.component';
import { PowersfunctionsComponent } from './powersfunctions/powersfunctions.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { RulesComponent } from './rules/rules.component';
import { RulesdetailComponent } from './rulesdetail/rulesdetail.component';
import { Thesindhtrans2016Component } from './thesindhtrans2016/thesindhtrans2016.component';
import { AssemblylibraryComponent } from './assemblylibrary/assemblylibrary.component';

// ABOUT Member
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersdetailComponent } from './speakersdetail/speakersdetail.component';
import { DeputyspeakerComponent } from './deputyspeaker/deputyspeaker.component';
import { DeputyspeakerdetailComponent } from './deputyspeakerdetail/deputyspeakerdetail.component';
import { MembersdirectoryComponent } from './membersdirectory/membersdirectory.component';
import { ListofmembersComponent } from './listofmembers/listofmembers.component';
import { MembersperformancereportComponent } from './membersperformancereport/membersperformancereport.component';
import { MemberprofileComponent } from './memberprofile/memberprofile.component';
import { PastassemblymembersComponent } from './pastassemblymembers/pastassemblymembers.component';

 // Assembly Business
 import { CurrentassemblysummaryComponent } from './currentassemblysummary/currentassemblysummary.component';
 import { SessionsComponent } from './sessions/sessions.component';
 import { LegislationsComponent } from './legislations/legislations.component';
 import { OrderofthedayagendaComponent } from './orderofthedayagenda/orderofthedayagenda.component';
 import { OrderofthedayagendasessionsbasedComponent } from './orderofthedayagendasessionsbased/orderofthedayagendasessionsbased.component';
 import { SittingsdetailComponent } from './sittingsdetail/sittingsdetail.component';

 import { SummaryofproceedingsComponent } from './summaryofproceedings/summaryofproceedings.component';
 import { HousedebatesComponent } from './housedebates/housedebates.component';
 import { QuestionsComponent } from './questions/questions.component';
 import { QuestionsdetailComponent } from './questionsdetail/questionsdetail.component';
 import { CallattentionComponent } from './callattention/callattention.component';
 import { ResolutionspassedComponent } from './resolutionspassed/resolutionspassed.component';
 import { ResolutionspasseddetailComponent } from './resolutionspasseddetail/resolutionspasseddetail.component';
 import { StagesofbillsComponent } from './stagesofbills/stagesofbills.component';
 import { BillsComponent } from './bills/bills.component';
 import { BillsdetailComponent } from './billsdetail/billsdetail.component';
 import { ActsComponent } from './acts/acts.component';
 import { ActslistsComponent } from './actslists/actslists.component';
 import { ActslistsdetailsComponent } from './actslistsdetails/actslistsdetails.component';
 import { MotionsComponent } from './motions/motions.component';
 import { PerformanceofassemblyComponent } from './performanceofassembly/performanceofassembly.component';
 import { ParliamentarycalendarComponent } from './parliamentarycalendar/parliamentarycalendar.component';

// Assembly Committee
import { CommitteesystemComponent } from './committeesystem/committeesystem.component';
import { CommitteesystemdetailComponent } from './committeesystemdetail/committeesystemdetail.component';
import { CommitteerulesComponent } from './committeerules/committeerules.component';
import { PublicaccountscommitteeComponent } from './publicaccountscommittee/publicaccountscommittee.component';
import { StandingcommitteesComponent } from './standingcommittees/standingcommittees.component';
import { StandingcommitteestabsComponent } from './standingcommitteestabs/standingcommitteestabs.component';
import { CommitteesonrulesofprocedureprivilegesComponent } from './committeesonrulesofprocedureprivileges/committeesonrulesofprocedureprivileges.component';
import { CommitteesonrulesofprocedureprivilegestabsComponent } from './committeesonrulesofprocedureprivilegestabs/committeesonrulesofprocedureprivilegestabs.component';
import { FinancecommitteeComponent } from './financecommittee/financecommittee.component';
import { SelectcommitteeonbillsComponent } from './selectcommitteeonbills/selectcommitteeonbills.component';
import { CommitteeongovernmentassuranceComponent } from './committeeongovernmentassurance/committeeongovernmentassurance.component';
import { Committeeongovernmentassurancedetail1Component } from './committeeongovernmentassurancedetail1/committeeongovernmentassurancedetail1.component';
import { Committeeongovernmentassurancedetail2Component } from './committeeongovernmentassurancedetail2/committeeongovernmentassurancedetail2.component';
import { LibrarycommitteeComponent } from './librarycommittee/librarycommittee.component';
import { BusinessadvisorycommitteeComponent } from './businessadvisorycommittee/businessadvisorycommittee.component';
import { SpecialcommitteeComponent } from './specialcommittee/specialcommittee.component';
import { ReportslaidComponent } from './reportslaid/reportslaid.component';
import { HousecommitteeComponent } from './housecommittee/housecommittee.component';
import { ConstructioncommitteeComponent } from './constructioncommittee/constructioncommittee.component';

// Meida Centre
import { NotificationsComponent } from './notifications/notifications.component';
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
import {  VideoarchiveComponent } from './videoarchive/videoarchive.component';

// Publications
import { PublicationsComponent } from './publications/publications.component';
import { ReportsComponent } from './reports/reports.component';

// Contact us
import { ContactusComponent } from './contactus/contactus.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // ABOUT Assembly
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'workingofassembly', component: WorkingofassemblyComponent},
  {path: 'roleofassembly', component: RoleofassemblyComponent},
  {path: 'cabinetcomposition', component: CabinetcompositionComponent},
  {path: 'leaderofthehouse', component: LeaderofthehouseComponent},
  {path: 'leaderoftheopposition', component: LeaderoftheoppositionComponent},
  {path: 'rulesofprocedures', component: RulesofproceduresComponent},
  {path: 'rulesofproceduresdetail/:id', component: RulesofproceduresdetailComponent},
  {path: 'parliamentaryprivileges', component: ParliamentaryprivilegesComponent},
  {path: 'parliamentaryprivilegesdetails/:id', component: ParliamentaryprivilegesdetailsComponent},

  // ABOUT Secretariat
  {path: 'overview', component: OverviewComponent},
  {path: 'organizationalchart', component: OrganizationalchartComponent},
  {path: 'directoryofofficers', component: DirectoryofofficersComponent},
  {path: 'powersfunctions', component: PowersfunctionsComponent},
  {path: 'contactlist', component: ContactlistComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'rulesdetail/:id', component: RulesdetailComponent},
  {path: 'thesindhtrans2016', component: Thesindhtrans2016Component},
  {path: 'assemblylibrary', component: AssemblylibraryComponent},

  // ABOUT Member
  {path: 'speakers', component: SpeakersComponent},
  {path: 'speakersdetail/:id', component: SpeakersdetailComponent},
  {path: 'deputyspeaker', component: DeputyspeakerComponent},
  {path: 'deputyspeakerdetail/:id', component: DeputyspeakerdetailComponent},
  {path: 'membersdirectory', component: MembersdirectoryComponent},
  {path: 'membersdirectory/:data', component: MembersdirectoryComponent},
  {path: 'listofmembers', component: ListofmembersComponent},
  {path: 'membersperformancereport/:id', component: MembersperformancereportComponent},
  {path: 'pastassemblymembers', component: PastassemblymembersComponent},
  {path: 'memberprofile/:id', component: MemberprofileComponent},

  // Assembly Business
  {path: 'currentassemblysummary', component: CurrentassemblysummaryComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'legislations', component:LegislationsComponent},
  {path: 'orderofthedayagenda', component: OrderofthedayagendaComponent},
  {path: 'sittingsdetail/:id', component: SittingsdetailComponent},
  {path: 'questiondetail/:id', component: QuestionsdetailComponent},
  {path: 'sittings/:id', component: OrderofthedayagendasessionsbasedComponent},
  {path: 'summaryofproceedings', component: SummaryofproceedingsComponent},
  {path: 'housedebates', component: HousedebatesComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'callattention', component: CallattentionComponent},
  {path: 'resolutionspassed', component: ResolutionspassedComponent},
  {path: 'resolutionspasseddetail/:id', component: ResolutionspasseddetailComponent},
  {path: 'stagesofbills', component: StagesofbillsComponent},
  {path: 'bills', component: BillsComponent},
  {path: 'billsdetail/:id', component: BillsdetailComponent},
  {path: 'acts', component: ActsComponent},
  {path: 'actslists/:id', component: ActslistsComponent},
  {path: 'actslistsdetails/:id', component: ActslistsdetailsComponent},
  {path: 'motions', component: MotionsComponent},
  {path: 'performanceofassembly', component: PerformanceofassemblyComponent},
  {path: 'parliamentarycalendar', component: ParliamentarycalendarComponent},

   // Assembly Committee
  {path: 'committeesystem', component: CommitteesystemComponent},
  {path: 'committeesystemdetail', component: CommitteesystemdetailComponent},
  {path: 'committeerules', component: CommitteerulesComponent},
  {path: 'publicaccountscommittee', component: PublicaccountscommitteeComponent},
  {path: 'standingcommittees', component: StandingcommitteesComponent},
  {path: 'standingcommitteestabs/:id', component: StandingcommitteestabsComponent},
  {path: 'committeesonrulesofprocedureprivileges', component: CommitteesonrulesofprocedureprivilegesComponent},
  {path: 'committeesonrulesofprocedureprivilegestabs', component: CommitteesonrulesofprocedureprivilegestabsComponent},
  {path: 'financecommittee', component: FinancecommitteeComponent},
  {path: 'selectcommitteeonbills', component: SelectcommitteeonbillsComponent},
  {path: 'committeeongovernmentassurance', component: CommitteeongovernmentassuranceComponent},
  {path: 'committeeongovernmentassurancedetail1/:id', component: Committeeongovernmentassurancedetail1Component},
  {path: 'committeeongovernmentassurancedetail2/:id', component: Committeeongovernmentassurancedetail2Component},
  {path: 'librarycommittee', component: LibrarycommitteeComponent},
  {path: 'businessadvisorycommittee', component: BusinessadvisorycommitteeComponent},
  {path: 'specialcommittee', component: SpecialcommitteeComponent},
  {path: 'reportslaid', component: ReportslaidComponent},
  {path: 'housecommittee', component: HousecommitteeComponent},
  {path: 'constructioncommittee', component: ConstructioncommitteeComponent},

  // Meida Centre
  {path: 'notifications', component: NotificationsComponent},
  {path: 'notifyessions', component: NotifyessionsComponent},
  {path: 'notifymembers', component: NotifymembersComponent},
  {path: 'notifycommittees', component: NotifycommitteesComponent},
  {path: 'notifygeneral', component: NotifygeneralComponent},
  {path: 'pressreleases', component: PressreleasesComponent},
  {path: 'newsandactivities', component: NewsandactivitiesComponent},
  {path: 'picturegallery', component: PicturegalleryComponent},
  {path: 'tenders', component: TendersComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'glossary', component: GlossaryComponent},
  {path: 'usefullinks', component: UsefullinksComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'webcastlivevideoaudio', component: WebcastlivevideoaudioComponent},
  {path: 'videoarchive', component: VideoarchiveComponent},

  // Publications
  {path: 'publications', component: PublicationsComponent},
  {path: 'reports', component: ReportsComponent},

  // Contact us
  {path: 'contactus', component: ContactusComponent},

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
