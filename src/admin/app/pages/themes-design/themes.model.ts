export class ThemesModel {
    pages: ThemesPage;
    constructor(
        public title: string,
        public oauthor: string,
        public code: string,
        public price: number
    ) { }
}

export class ThemesPage {
    url: string;
    title: string;
    share: ThemesShare;
    setting: { code: string, value: any };
}

export class ThemesShare {
    title: string;
    desc: string;
    icon: string;
    link: string;
}