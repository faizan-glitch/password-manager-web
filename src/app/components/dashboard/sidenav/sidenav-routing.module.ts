
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent} from '../dashboard.component';
// import { SchoolsComponent } from './schools/schools.component';


const sidenavRoutes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    // children: [
    //   {
    //     // path: 'schools',
    //     // component: SchoolsComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(sidenavRoutes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule {}
