import React, { useState } from "react";
import cl from './AddInfo.module.css';

interface Info {
    text: string;
    main:string;
}

const AddInfo: React.FC<Info> = ({main,text}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = () => {
        setIsActive(prev => !prev)
        console.log(isActive)
    };
  return (
    <>
      <div className={cl.content}>
            <p className={cl.mainText}>{main}</p>
                <div 
                    onClick={toggleActive}
                     className={cl.addInfo}>
                </div>
        </div>
        <p className={cl.addText}>{text}</p>
    </>
  )
};

export default AddInfo;
