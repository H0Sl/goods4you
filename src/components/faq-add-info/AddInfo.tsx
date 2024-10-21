import React, { useState } from "react";
import cl from './AddInfo.module.css';

interface Info {
    info:InfoItem[];
}
interface InfoItem{
    a:string;
    b:string;
}

const AddInfo: React.FC<Info> = ({info}) => {
    const [openId,setOpenId] = useState<number | null>(null);

    const toogleActive = (id:number) => {
        setOpenId(prev => (prev === id ? null : id))
        console.log(openId)
    }


  return (
    <>
        <div className={cl.line}></div>
        <ul className={cl.accordion}>
            {info.map((faqItem,id) => {
                return <li key={id} className={cl.item}>
                    <div className={cl.content}>
                        <div className={cl.main}>{faqItem.a}</div>
                        <div className={`${cl.addInfo} ${openId === id ? cl.exit : ''}`} onClick={() => toogleActive(id)}></div>
                    </div>
                    <div className={`${cl.collapse} ${openId === id ? `${cl.open}` : ''}`}>
                        <div className={cl.addText}>{faqItem.b}</div>
                    </div>
                    <div className={cl.line}></div>
                </li>
            })}
        </ul>
    </>
  )
};

export default AddInfo;
