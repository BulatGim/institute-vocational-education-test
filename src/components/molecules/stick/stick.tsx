import React, {FC} from 'react';
import "./stick.scss"

interface IStickProps {
    backgroundColor:string;
    children: React.ReactNode
    isTriangle: boolean;
}

const Stick:FC<IStickProps> = ({ backgroundColor, children, isTriangle}) => {
    return (
        <div className="Stick" style={{backgroundColor: backgroundColor}}>
            {children}
            {isTriangle?(
                <div className="Stick__triangle"></div>
            ):("")}
        </div>
    );
};

export default Stick;