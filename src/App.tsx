import React, {useEffect, useState, useContext} from 'react';
import './App.scss';
import axios from "axios";
import SpecializedDisciplines from "./components/pages/specializedDisciplines/specializedDisciplines";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IGlobalDiscipline} from "./types/disciplines/globalDiscipline";

interface IServerResponse {
    data:IGlobalDiscipline[]
}


const App = observer(()=>{

    let context = useContext(Context)

    useEffect(()=>{
        new Promise<IServerResponse>((resolve, reject)=>{
            let data = axios.get("https://api-moscow-mba.herokuapp.com/products")
            context?.disciplines.setLoading(true)
            resolve(data)
            reject(new Error())
        }).then((data)=> {
            context?.disciplines.setDisciplines(data.data.filter((item:any)=>item.subjectsStickerType==="practiceModulesAndFinalAttestation"))
        }).catch(()=>{
            alert("Произошла ошибка, попробуйте позже")
        }).finally(()=>context?.disciplines.setLoading(false))
    }, [])

  return (
    <div className="App">
        <SpecializedDisciplines/>
    </div>
  );
})

export default App;
