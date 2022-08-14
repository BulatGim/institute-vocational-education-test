export interface IBaseSubjects {
    _id?:string;
    string?: string;
    __v?:number;
    id?:string
}

export interface ICategory {
    copyToKk?:boolean;
    createdAt?:string;
    description?:string;
    id?: string;
    labelCases?:{
        id?:string;
        plural?:string;
        singular?:string;
        __v?:number;
        _id?:string;
    }
    locale?:string;
    published_at?:string;
    slug?:string;
    type?:string;
    updatedAt?:string;
    __v?:number;
    _id?:string;
}

export interface ISpecializedSubjects {
    id?:string;
    string?:string;
    __v?:number;
    _id?:string;
}