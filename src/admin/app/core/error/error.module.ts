import { NgModule, ErrorHandler } from '@angular/core';
import { MyErrorHandler } from './my-error';
@NgModule({
    providers: [
        {provide: ErrorHandler, useClass: MyErrorHandler}
    ],
})
export class ErrorModule {}
