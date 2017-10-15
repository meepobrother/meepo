import uuid from 'uuid';

export class CatalogGroup {
    title: string = '';
    id: number;
    pages: any[] = [];

    addPage(page: CatalogPage) {
        this.pages.push(page);
    }

    editPage(page: CatalogPage) {
        this.pages.map(res => {
            if (res.id == page.id) {
                res = page;
            }
        });
    }

    delPage(page: CatalogPage) {
        const index = this.pages.indexOf(page);
        this.pages.splice(index, 1);
    }
}


export class CatalogPage {
    title: string = '';
    id: string;
    type: string = 'page';
    // 头部
    header: any[] = [];
    body: any[] = [];
    footer: any[] = [];
    menu: any[] = [];
}

