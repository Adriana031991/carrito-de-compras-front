import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { NoContentComponent } from './no-content/no-content.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'content', component: SidebarComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
