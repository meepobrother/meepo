
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as store from 'store';
export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        store.clearAll();
        return true;
    }
}
