import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LazyPageComponent } from './lazy-page.component';
import { LazyPageRoutingModule } from './lazy-page-routing.module';

@NgModule({
  imports: [LazyPageRoutingModule],
  declarations: [LazyPageComponent],
  exports: [LazyPageComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LazyPageModule {}
