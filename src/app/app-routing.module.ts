import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"about", component: AboutComponent
  },
  {
    path:"experience", component: ExperienceComponent
  },
  {
    path:"contact", component: ContactComponent
  },
  {
    path:"**", component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
