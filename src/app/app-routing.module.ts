import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MMHomeComponent } from './mm-home/mm-home.component';
import { MMMenuTemplatesComponent } from './mm-menu-templates/mm-menu-templates.component';
import { MMMenuTemplatesDetailComponent } from './mm-menu-templates-detail/mm-menu-templates-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mm-home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'mm-home', component: MMHomeComponent, data: { text: 'MM Home' } },
  { path: 'mm-menu-templates', component: MMMenuTemplatesComponent, data: { text: 'MM Menu Templates' } },
  { path: 'mm-menu-templates-detail', component: MMMenuTemplatesDetailComponent, data: { text: 'MM Menu Templates Detail' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
