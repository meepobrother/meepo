
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.dir(error);
        return true;
    }
}
