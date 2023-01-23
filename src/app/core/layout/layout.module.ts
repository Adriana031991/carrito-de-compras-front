import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { NoContentComponent } from './no-content/no-content.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { SidebarComponent } from './content/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ContentComponent,
    NoContentComponent,
    WelcomeComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
