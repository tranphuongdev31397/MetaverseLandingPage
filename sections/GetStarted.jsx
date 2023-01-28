'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import { Text } from '../components/CustomTexts';
import IconBox from '../components/IconBox';
import { DURATION_EXPLORED_CARD, exploreWorlds } from '../constants';

import styles from '../styles';
import { fadeIn, planetVariants, slideIn, staggerContainer, textVariant } from '../utils/motion';
const GetStarted = () => (
    <section className={`${styles.yPaddings}  relative z-0`}>
        <div className="gradient-04" />
        <div className="gradient-05" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} ${styles.xPaddings} flex lg:flex-row flex-col items-center gap-20`}
        >
            <motion.div variants={planetVariants('left')} className="flex-1 flex">
                <img src="./get-started.png" className="object-contain w-full h-full" />
            </motion.div>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-1 flex flex-col gap-4">
                <TypingText text={'| How Metaverus Works'} />
                <TitleText title={'Get started with just a few clicks'} />

                <div className="flex flex-col gap-8 max-w-[370px]">
                    <div className="flex-1 flex items-center flex-row gap-8">
                        <IconBox icon={<div className="font-extrabold text-white text-[20px]">01</div>} />
                        <Text>Find a world that suits you and you want to enter</Text>
                    </div>
                    <div className="flex-1 flex items-center flex-row gap-8">
                        <IconBox icon={<div className="font-extrabold text-white text-[20px]">02</div>} />
                        <Text>Enter the world by reading basmalah to be safe</Text>
                    </div>
                    <div className="flex-1 flex items-center min-w-[450px] flex-row gap-8">
                        <IconBox icon={<div className="font-extrabold text-white text-[20px]">03</div>} />
                        <Text>No need to beat around the bush, just stay on the gas and have fun</Text>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default GetStarted;
