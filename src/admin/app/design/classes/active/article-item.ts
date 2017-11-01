
import { Widget } from '../widget';

export class ArticleItemDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';
    constructor(){
        super();
        this.type = 'article-item';
        this.name = '帖子列表';
    }
}