import { Subject } from 'rxjs/Subject';

export function loadSrc(src: string, key: string): Subject<any> {
    const script = this.document.createElement('script');
    const loadSubject: Subject<any> = new Subject();
    script.type = 'text/javascript';
    script.src = this.swiperJs;
    script.onload = () => {
        loadSubject.next(window[key]);
    };
    script.onerror = () => {
        console.log(`loadSrc ${src} 失败`);
    };
    this.document.body.appendChild(script);
    return loadSubject;
}
