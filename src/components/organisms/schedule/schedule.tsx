import React, {FC} from 'react';
import "./schedule.scss"
import {IGlobalDiscipline} from "../../../types/disciplines/globalDiscipline";
import ScheduleModule from "../../molecules/scheduleModule/scheduleModule";



const Schedule:FC<IGlobalDiscipline> = ({ title, specializedSubjects}) => {
    return (
                <div className="Schedule">
                    <h2 className="Schedule__title">{title}</h2>
                    <div className="Schedule-content">
                        <div className="Schedule-content__modules">
                            <ScheduleModule specializedSubjects={specializedSubjects?.slice(0, Math.floor(specializedSubjects?.length/2))} index={1}/>
                            <ScheduleModule specializedSubjects={specializedSubjects?.slice(Math.floor(specializedSubjects?.length/2), specializedSubjects?.length)} index={2}/>
                        </div>
                    </div>
                </div>
    );
};

export default Schedule;