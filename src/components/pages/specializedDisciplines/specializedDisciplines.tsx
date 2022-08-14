import React, {useContext} from 'react';
import "./specializedDisciplines.scss"
import {Context} from "../../../index";
import Schedule from "../../organisms/schedule/schedule";
import Stick from "../../molecules/stick/stick";
import {observer} from "mobx-react-lite";

const SpecializedDisciplines = observer(() => {
    let context = useContext(Context);

    return (
        <div className="SpecializedDisciplines">
            <h1 className="SpecializedDisciplines__title">Специализированные дисциплины</h1>
            {context?.disciplines.loading?(
                <div className="SpecializedDisciplines__preloader"></div>
            ):(
                <div className="programs">
                    {context?.disciplines.allDisciplines.map((item)=>
                        <Schedule key={item.id} title={item.title} specializedSubjects={item.specializedSubjects}/>
                    )}
                </div>
            )}
            <div className="SpecializedDisciplines-sticks">
                <Stick backgroundColor="#FF3535" isTriangle={true}>
                    <h1 className="SpecializedDisciplines-sticks__title">Практические модули</h1>
                    <p className="SpecializedDisciplines-sticks__content">Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
                </Stick>
                <Stick backgroundColor={"#2D2C2A"} isTriangle={false}>
                    <h1 className="SpecializedDisciplines-sticks__title">Итоговая аттестация</h1>
                    <ul className="SpecializedDisciplines-sticks__content">
                        <li className="SpecializedDisciplines-sticks__listItem">Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
                        <li className="SpecializedDisciplines-sticks__listItem">Защита итоговой аттестационной работы</li>
                    </ul>
                </Stick>
            </div>
        </div>
    );
});

export default SpecializedDisciplines;