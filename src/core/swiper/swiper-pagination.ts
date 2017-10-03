import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

export type PaginationType = 'bullets' | 'fraction' | 'progress' | 'custom';

@Directive({
    selector: '[swiperPagination]',
})
export class SwiperPagination {
    @HostBinding('class.swiper-pagination') pagination: boolean = true;
    @HostBinding('class.swiper-pagination-clickable') clickable: boolean = true;
    @HostBinding('class.swiper-pagination-bullets') bullets: boolean = true;

    // 分页器样式类型，可选
    @Input() paginationType: PaginationType = 'bullets';
    // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
    @Input() paginationClickable: boolean = true;
    // 默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
    @Input() paginationHide: boolean = true;
    // 设定分页器指示器（小点）的HTML标签。
    @Input() paginationElement: string = 'span';

    // 渲染分页器小点。这个参数允许完全自定义分页器的指示点。接受指示点索引和指示点类名作为参数。
    @Input() paginationBulletRender: Function = (index, className) => {
        console.log(index);
        console.log(className);
    }
    // 自定义分式类型分页器，当分页器类型设置为分式时可用。
    @Input() paginationFractionRender: Function = (currentClassName, totalClassName) => {
        console.log(currentClassName);
        console.log(totalClassName);
    }
    // 自定义进度条类型分页器，当分页器类型设置为进度条时可用。
    @Input() paginationProgressRender: Function = (progressbarClass) => {
        console.log(progressbarClass);
    }

    // 自定义特殊类型分页器，当分页器类型设置为自定义时可用。
    @Input() paginationCustomRender: Function = (current, total) => {
        console.log(current);
        console.log(total);
    }
    // 独立分页元素，当启用（默认）并且分页元素的传入值为字符串时，swiper会优先查找子元素匹配这些元素。可应用于分页器，按钮和滚动条。
    // 默认为true时，仅本swiper的container内的分页器有效，设置为false后，container以外的分页器也生效了。
    @Input() uniqueNavElements: boolean = true;
    //
    // swiper-pagination-clickable swiper-pagination-bullets
    constructor(public ele: ElementRef) { }
}
