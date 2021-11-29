import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStackComponent } from './create-stack/create-stack.component';
import { DashboardLinksComponent } from './dashboard-links/dashboard-links.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHubComponent } from './user-hub/user-hub.component';

const routes: Routes = [
  {path: '', component: DashboardLinksComponent},
  {path: 'dashboard', component: DashboardLinksComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'userhub', component: UserHubComponent},
  {path: 'createstack', component: CreateStackComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}