import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { OthersComponent } from './utilities/others/others.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'p1', component: Page1Component, outlet: 'pop' },
      { path: 'p2', component: Page2Component, outlet: 'pop2' },
      { path: 'p3', component: Page1Component, outlet: 'pop3' },
      { path: 'p4', component: Page2Component, outlet: 'pop4' },
      { path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
      { path: 'charts', component: ChartsComponent },
      { path: 'error', component: NotFoundComponent },
      { path: 'utilities', loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule) },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
