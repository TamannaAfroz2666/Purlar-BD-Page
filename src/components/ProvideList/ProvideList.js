import React from 'react';
import './ProvideList.css';
import { BsFlower1 } from "react-icons/bs";

const ProvideList = () => {
    return (
        <div className='provideList'>
            <div className="provideListHead">
                <div className="provideBody">
                    <p>What we provide</p>
                    <div className="lineContents">
                        <hr color='tomato' className='LineTitle'/>
                        <div className="iconOfFlower">
                            <BsFlower1 size={20} color='tomato' />

                        </div>
                        <hr color='tomato' className='LineTitle'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProvideList;