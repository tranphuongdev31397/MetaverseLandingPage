import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion';
function IconBox({ icon = '01', className }) {
    return (
        <div
            className={`${styles.flexCenter} rounded-[24px] min-w-[70px] w-[70px] min-h-[70px] h-[70px] bg-white bg-opacity-[0.08] ${className}`}
        >
            {icon}
        </div>
    );
}

export default IconBox;
