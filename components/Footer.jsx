'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { Text, TitleText } from './CustomTexts';

const Footer = () => (
    <motion.nav
        className={`${styles.xPaddings} ${styles.innerWidth} py-8 relative mx-auto flex flex-col`}
        variants={footerVariants}
        initial="hidden"
        whileInView={'show'}
    >
        <div className="w-[50%]  absolute inset-0  gradient-03" />
        <div className={`flex lg:justify-between lg:flex-row flex-col lg:items-center gap-8 w-full text-white mb-20`}>
            <TitleText title={'Enter the Metaverse'} />
            <button className="w-fit py-6 px-8 rounded-full flex gap-4 bg-[#25618B]">
                <img src={'./headset.svg'} alt="iconBtn" className="w-[24px] h-[24px] object-contain" />
                ENTER METAVERSE
            </button>
        </div>
        <div className="h-[1px]  bg-[#6a6a6a] mb-[50px]" />
        <div className="flex lg:justify-between flex-start items-center flex-wrap w-full">
            <TitleText title={'METAVERUS'} textStyles="text-[24px] lg:w-auto w-1/2" />
            <Text className={'text-[14px] lg:w-auto w-1/2'}>
                Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </Text>
            <div className="flex  gap-8">
                {socials.map((item) => {
                    return <img src={item.url} alt={item.name} className="w-[22px] h-[22px] object-contain" />;
                })}
            </div>
        </div>
    </motion.nav>
);

export default Footer;
