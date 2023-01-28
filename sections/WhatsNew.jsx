'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import { Text } from '../components/CustomTexts';
import IconBox from '../components/IconBox';
import { DURATION_EXPLORED_CARD, exploreWorlds } from '../constants';

import styles from '../styles';
import { fadeIn, planetVariants, slideIn, staggerContainer, textVariant } from '../utils/motion';
const WhatsNew = () => (
    <section className={`${styles.yPaddings}  relative z-0`}>
        <div className="gradient-04" />
        <div className="gradient-05" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} ${styles.xPaddings} flex lg:flex-row-reverse flex-col-reverse items-center gap-20`}
        >
            <motion.div variants={planetVariants('right')} className="flex-1 flex">
                <img src="./whats-new.png" className="object-contain w-full h-full" />
            </motion.div>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-1 flex flex-col gap-4">
                <TypingText text={'| Whats New?'} />
                <TitleText title={"What's new about Metaversus?"} />

                <div className="flex flex-row gap-[46px]">
                    <div className="flex-1 flex flex-col gap-4">
                        <IconBox
                            icon={<img src="./vrpano.svg" className="font-extrabold text-white text-[20px] mb-2" />}
                        />
                        <TitleText title={'A new world'} textStyles={'text-[24px] font-bold'} />

                        <Text className={'text-[16px]'}>
                            we have the latest update with new world for you to try never mind
                        </Text>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <IconBox
                            icon={<img src="./headset.svg" className="font-extrabold text-white text-[20px] mb-2" />}
                        />
                        <TitleText title={'More realistic'} textStyles={'text-[24px] font-bold'} />

                        <Text className={'text-[16px]'}>
                            In the latest update, your eyes are narrow, making the world more realistic than ever
                        </Text>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default WhatsNew;
