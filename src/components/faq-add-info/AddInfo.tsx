import React, { useState } from "react";
import cl from './AddInfo.module.css';

interface Info {
    info:InfoItem[];
}
interface InfoItem{
    title:string;
    text:string;
}

const AddInfo: React.FC<Info> = ({info}) => {
    const [openId,setOpenId] = useState <number | null> (null);

    const toogleActive = (id:number) => {
        if(id === openId) setOpenId(null);
        else setOpenId(id);
    }


  return (
    <>
        <div className={cl.line}></div>
        <ul className={cl.accordion}>
            {info.map((faqItem,id) => {
                return <li key={id} className={cl.item}>
                    <div className={cl.content}>
                        <div className={cl.main}>{faqItem.title}</div>
                        <div className={`${cl.rotate} ${openId === id ? cl.exit : ''}`} onClick={() => toogleActive(id)}>
                            <div className={cl.addInfo}></div>
                        </div>
                    </div>
                    <div className={`${cl.collapse} ${openId === id ? cl.open : ''}`}>
                        <div className={cl.addText}>{faqItem.text}</div>
                    </div>
                    <div className={cl.line}></div>
                </li>
            })}
        </ul>
    </>
  )
};

export default AddInfo;
