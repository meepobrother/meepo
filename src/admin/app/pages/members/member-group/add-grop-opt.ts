export interface AddGroupOpt {
    opt?: string;
    item?: Group;
    index?: number;
}

export interface Group { 
    title?: string;
    uniacid?: number;
    id?: number;
    desc?: string;
    status?: number;
}