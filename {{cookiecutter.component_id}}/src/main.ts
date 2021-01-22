import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@environment';
import { AppModeToken, AppModeType, LocalizationConfigurationToken } from './app/common/core/tokens';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic([
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
