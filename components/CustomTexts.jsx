'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion';

export const TypingText = ({ text, textStyles }) => (
    <motion.p
        variants={textContainer}
        className={`text-[14px] font-normal text-secondary-white text-opacity-50 ${textStyles}`}
    >
        {Array.from(text).map((letter, index) => {
            return (
                <motion.span variants={textVariant2} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            );
        })}
    </motion.p>
);

export const TitleText = ({ title, textStyles = 'text-[64px]', motionVar }) => (
    <motion.h2 variants={motionVar} className={`text-[64px] font-extrabold text-white ${textStyles}`}>
        {title}
    </motion.h2>
);

export const Text = ({ children, className }) => (
    <p
        className={`lg:text-[18px] text-[8px] leading-[32.4px] font-normal text-secondary-white text-opacity-50 ${className}`}
    >
        {children}
    </p>
);
