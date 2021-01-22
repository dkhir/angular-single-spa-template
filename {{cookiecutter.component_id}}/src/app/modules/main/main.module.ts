import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconModule } from '../../common/share/components/svg-icon';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [MainRoutingModule, SvgIconModule, CommonModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}
