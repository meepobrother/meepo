import { Observable } from 'rxjs/Observable';

/**
 * 异步请求文件
 * @param _document DOCUMENT对象
 * @param filename 文件地址
 * @param fileType 文件类型
 */
export function asyLoadScript(_document: any, filename: string = '', fileType: string = 'js'): Observable<any> {
    return Observable.create(observer => {
        let container: HTMLElement = _document.getElementsByTagName('body')[0];
        let node: any;
        if (fileType === "js") {
            const oJs = document.createElement('script');
            oJs.setAttribute("type", "text/javascript");
            oJs.setAttribute("src", filename);
            container.appendChild(oJs);
            node = oJs;
        } else if (fileType === "css") {
            var oCss = document.createElement("link");
            oCss.setAttribute("rel", "stylesheet");
            oCss.setAttribute("type", "text/css");
            oCss.setAttribute("href", filename);
            container.appendChild(oCss);
            node = oCss;
        }
        node.onload = () => {
            observer.next();
            observer.complete();
        };
    });
}