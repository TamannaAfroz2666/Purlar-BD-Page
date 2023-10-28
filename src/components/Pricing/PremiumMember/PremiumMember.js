import React from 'react';
import './PremiumMember.css';
import regular from '../../../assets/image/add/Pricing/premiyn.jpg';
import { HiOutlineChevronRight } from "react-icons/hi";

const PremiumMember = () => {
    return (
        <div className='premiumMember'>
              <div className='regularMember'>
                <div className="regularHead">
                    <img src={regular} alt="" />
                    <p className='regularPrice'>Premium Member</p>
                    <hr className='regularHr' color='tomato' />
                    <ul className='listRegular'>
                        <li className='titleRegular'>quality time your skin massaged </li>
                        <li className='sortRegular'>hair styled </li>
                        <li className='titleRegular'> best care for your skin and body </li>
                        <li className='sortRegular2'>You get custom information </li>
                        <li className='titleRegular'> salons have professional beauticians </li>
                    </ul>
                    <h1 className='pricingRegular'> <small className='smallPrice'>$</small>149 <small className='smallPrice'>/month</small></h1>

                    <div className="btnSubRegular">
                        <div className="regularIcon1">
                            <span className='btnIconReg'> <HiOutlineChevronRight className='outlineIcon' color='white' size={30} />
                            </span>

                        </div>
                        <div className="peiceRegBtn">
                            <button className='btnSubInfoReg' type='button'>Singup Now</button>
                        </div>

                    </div>

                </div>

            </div>


     
        </div>
    );
};

export default PremiumMember;