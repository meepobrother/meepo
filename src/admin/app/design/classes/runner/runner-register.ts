
import { Widget } from '../widget';
export class RunnerRegisterDefault extends Widget {
    images: any[] = [];

    constructor() {
        super();
        this.type = 'runner-register';
        this.name = '跑腿注册';

        this.images = [
            {src: './assets/runner/1.jpg'},
            {src: './assets/runner/2.jpg'},
            {src: './assets/runner/3.jpg'},
            {src: './assets/runner/4.jpg'},
            {src: './assets/runner/5.jpg'},            
        ];
    }
}

