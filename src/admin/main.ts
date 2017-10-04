import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from './app/admin.module';
import { environment } from './environments/environment';

import 'hammerjs';
import * as VConsole from 'vconsole';
new VConsole();
console.log('Hello world');


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AdminModule)
    .catch(err => console.log(err));
