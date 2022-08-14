import {IGlobalDiscipline} from "../types/disciplines/globalDiscipline";
import {makeAutoObservable} from "mobx";

class DisciplinesStore {
    private _disciplines: IGlobalDiscipline[] | [];
    private _isLoading: boolean;
    constructor() {
        makeAutoObservable(this)
        this._disciplines = [];
        this._isLoading = false
    }

    setDisciplines(disciplines: IGlobalDiscipline[]){
        this._disciplines = disciplines.filter((item)=>item.specializedSubjects.length>0).slice(0,5);
    }

    get allDisciplines(){
        return this._disciplines
    }

    setLoading(bool: boolean){
        this._isLoading = bool;
    }

    get loading(){
        return this._isLoading
    }
}

export default DisciplinesStore;