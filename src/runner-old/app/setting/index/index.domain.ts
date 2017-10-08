export interface IndexDomain{
    advs: Adv[];
    footers: Footer[];
}

export interface Adv{
    title: string;
    image: string;
    link: string;
}

export interface Footer{
    title: string;
    icon: string;
    link: any[]
}