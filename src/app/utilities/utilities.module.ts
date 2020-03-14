import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities.component';
import { ColorsComponent } from './colors/colors.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';
import { BordersComponent } from './borders/borders.component';


@NgModule({
  declarations: [
    ColorsComponent,
    AnimationsComponent,
    OthersComponent,
    BordersComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
