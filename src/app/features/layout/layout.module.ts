import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NoContentComponent } from '../../features/layout/no-content/no-content.component';
import { WelcomeComponent } from '../../features/layout/welcome/welcome.component';
import { SidebarComponent } from '../../features/layout/sidebar/sidebar.component';
import { UiModule } from 'src/app/shared/ui.module';


@NgModule({
  declarations: [
    NoContentComponent,
    WelcomeComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiModule
  ]
})
export class LayoutModule { }
