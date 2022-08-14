import {IGlobalDiscipline} from "../disciplines/globalDiscipline";

export interface IContextTypes {
    disciplines: IDisciplineStore;
}

export interface IDisciplineStore {
    allDisciplines: IGlobalDiscipline[];
    setDisciplines: (disciplines: IGlobalDiscipline[]) => void;
    setLoading: (bool: boolean) => void;
    loading: boolean;
}