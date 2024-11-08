import React, { useState } from 'react';
import cl from './AddInfo.module.css';
import { Text } from '../UI/text';
import { Title } from '../UI/title';

interface Info {
    info: InfoItem[];
}
interface InfoItem {
    title: string;
    text: string;
}

export const AddInfo: React.FC<Info> = ({ info }) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toogleActive = (id: number) => {
        if (id === openId) setOpenId(null);
        else setOpenId(id);
    };

    return (
        <>
            <div className={cl.line} />
            <ul className={cl.accordion}>
                {info.map((faqItem, id) => {
                    return (
                        <li key={id} className={cl.item}>
                            <div
                                className={cl.content}
                                onClick={() => toogleActive(id)}
                            >
                                <Title
                                    tag="h3"
                                    fontSize="l"
                                    className={cl.main}
                                    fontWeight="regular"
                                >
                                    {faqItem.title}
                                </Title>
                                <div
                                    className={`${cl.rotate} ${openId === id ? cl.exit : ''}`}
                                >
                                    <div className={cl.addInfo} />
                                </div>
                            </div>
                            <div
                                className={`${cl.collapse} ${openId === id ? cl.open : ''}`}
                            >
                                <Text
                                    tag="p"
                                    fontWeight="semiBold"
                                    className={cl.addText}
                                >
                                    {faqItem.text}
                                </Text>
                            </div>
                            <div className={cl.line} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
