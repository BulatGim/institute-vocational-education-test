import {IBaseSubjects, ICategory, ISpecializedSubjects} from "./disciplineConstituents";

export interface IGlobalDiscipline {
    baseSubjects?: IBaseSubjects[]
    title?: string;
    category?:ICategory;
    diplomas?: [];
    duration?:string|null;
    goal?:string;
    id?:string;
    locale?:string;
    localizations?:[];
    specializedSubjects:ISpecializedSubjects[] | [];
    __v?:number;
    _id?:string;
}