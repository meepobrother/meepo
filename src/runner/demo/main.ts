import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RunnerModule } from './app/runner.module';
import { environment } from './environments/environment';


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RunnerModule)
    .catch(err => console.log(err));
