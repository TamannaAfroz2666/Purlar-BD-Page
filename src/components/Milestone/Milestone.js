import React from 'react';
import './Milestone.css';
import image from '../../assets/image/add/PART.jpg'
import { motion } from 'framer-motion';

const Milestone = () => {
    return (
        <div className='milestone'>
            <div className="milestoneHead">
                <div className="milestoneBody">
                    <div className="milestoneContent">
                        <motion.div className="imageContent"

                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: -50
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x:0
                        }}
                        transition={{
                            duration: 1
                        }}
                        
                        >
                            <div className="imageOn">
                            <img src={image} alt="loading....." />

                            </div>
                          

                        </motion.div>
                        <div className="information">

                        </div>

                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Milestone;