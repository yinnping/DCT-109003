import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilitiesComponent } from './utilities.component';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { ColorsComponent } from './colors/colors.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  { path: '', component: UtilitiesComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'others', component: OthersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
