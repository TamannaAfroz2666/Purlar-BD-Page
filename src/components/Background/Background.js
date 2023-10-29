import React from 'react';
import './Background.css';
import { GiGrapes, GiMushrooms, GiFlowerPot, GiMapleLeaf } from "react-icons/gi";

const Background = () => {
    return (
        <div className='backgroundHead'>
            <div className="backgroundBody">
                <div className="backgroundContent">
                    <div className="contentsOfBg">
                        <div className="mushroomPart">
                            <span> <GiMushrooms color='white' size={70} /> </span>
                            {/* <span className='bgHrHead'> <hr className='bgHr'/> </span> */}
                            <div className="lineBreaker">
                                <hr color='white' className='lineBreak1' />
                            </div>
                            <div className="bg_titlesContent">
                                <p className='bgTitle'>natural</p>
                                <p className='bgSubTitle'>Products</p>

                            </div>


                        </div>
                        <div className="flowerPart">
                            <span> <GiFlowerPot color='white' size={70} /> </span>

                        </div>
                        <div className="leafPart">
                            <span> <GiMapleLeaf color='white' size={70} /> </span>

                        </div>
                        <div className="graphsPart">
                            <span> <GiGrapes color='white' size={70} /> </span>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Background;