import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WelcomeModule } from './app/welcome.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(WelcomeModule)
    .catch(err => console.log(err));
