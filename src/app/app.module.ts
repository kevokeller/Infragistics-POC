import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MMHomeComponent } from './mm-home/mm-home.component';
import { IgxListModule, IgxAvatarModule, IgxGridModule, IgxChipsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxActionStripModule, IgxTabsModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MMMenuTemplatesComponent } from './mm-menu-templates/mm-menu-templates.component';
import { MMMenuTemplatesDetailComponent } from './mm-menu-templates-detail/mm-menu-templates-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MMHomeComponent,
    MMMenuTemplatesComponent,
    MMMenuTemplatesDetailComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxGridModule,
    IgxChipsModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxDropDownModule,
    IgxActionStripModule,
    IgxTabsModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
