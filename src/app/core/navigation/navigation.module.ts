import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from '../components/footer/footer.component';
import { NavToolbarComponent } from './components/nav-toolbar/nav-toolbar.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent, NavToolbarComponent, WelcomeComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavigationRoutingModule,
  ]
})
export class NavigationModule { }
