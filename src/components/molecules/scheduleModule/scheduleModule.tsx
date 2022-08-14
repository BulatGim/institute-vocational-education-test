import React, {FC, useState} from 'react';
import "./scheduleModule.scss"
import {ISpecializedSubjects} from "../../../types/disciplines/disciplineConstituents";

interface ISheduleModuleProps {
    specializedSubjects?: ISpecializedSubjects[];
    index?: number
}

const ScheduleModule: FC<ISheduleModuleProps> = ({specializedSubjects, index}) => {

    const [isHidden, setIsHidden] = useState(window.innerWidth>500)

    console.log(window.innerWidth, isHidden)

    function f() {
        setIsHidden(window.innerWidth<500?!isHidden:isHidden)
    }

    return (
        <div className="ScheduleModule">
            <h3 className={!isHidden?"ScheduleModule__moduleNumber":"ScheduleModule__moduleNumber ScheduleModule__moduleNumber_active"} onClick={()=>{f()}}>{index} модуль</h3>
            {isHidden ? (
                <ul className="ScheduleModule-content">
                    {specializedSubjects?.map((item) =>
                        <li key={item.id} className="ScheduleModule-content__item">{item.string}</li>
                    )}
                </ul>
            ):("")}
        </div>
    );
};

export default ScheduleModule;