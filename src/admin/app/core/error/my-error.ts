
import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.dir(error);
        return true;
    }
}
