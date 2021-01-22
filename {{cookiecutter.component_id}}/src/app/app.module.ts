import { BrowserModule } from '@angular/platform-browser';
import {
  APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule,
} from '@angular/core';

import { LocalizationModule, translationPropsFactory } from './common/core/services/localization';
import { SingleSpaProps, singleSpaPropsStream, SingleSpaPropsToken } from '@single-spa-local';
import { LocalizationConfigurationToken } from './common/core/tokens';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './common/core/core.module';
import { EmptyRouteModule } from './modules/empty-route';
import { MainModule } from './modules/main/main.module';
import { svgProviderFactory, SvgService } from './common/core/services/svg';

function propsFactory(): Partial<SingleSpaProps> {
  return singleSpaPropsStream.getValue();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmptyRouteModule,
    MainModule,
    LocalizationModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: svgProviderFactory,
      deps: [SvgService],
      multi: true,
    },
    {
      provide: SingleSpaPropsToken,
      useFactory: propsFactory,
    },
    {
      provide: LocalizationConfigurationToken,
      useFactory: translationPropsFactory,
      deps: [Injector, SingleSpaPropsToken],
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
