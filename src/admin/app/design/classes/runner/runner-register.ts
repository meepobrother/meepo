
import { Widget } from '../widget';
export class RunnerRegisterDefault extends Widget {
    images: string[] = [];

    constructor() {
        super();
        this.type = 'runner-register';
        this.name = '跑腿注册';

        this.images = [
            './assets/runner/1.jpg',
            './assets/runner/2.jpg',
            './assets/runner/3.jpg',
            './assets/runner/4.jpg',
            './assets/runner/5.jpg',
        ];
    }
}

