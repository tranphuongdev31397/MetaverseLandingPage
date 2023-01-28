'use client';
import { motion } from 'framer-motion';
import { TitleText } from '../components';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
const ExploreCard = ({ item, active, variantOptions = { duration: 0.5, delay }, ...props }) => (
    <motion.div
        variants={fadeIn('left', 'tween', variantOptions.delay, variantOptions.duration)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.25 }}
        className={`${
            active ? styles.activeCard : styles.card
        } ease-out-flex duration-700 transition-[flex] cursor-pointer h-[700px] relative`}
        {...props}
    >
        <div className="w-full h-full">
            <img
                src={item.imgUrl}
                alt={item?.id}
                className="object-cover object-center rounded-3xl w-full h-full absolute"
            />
            {active ? (
                <div className={`${styles.activeCardText} absolute w-full`}>
                    <div className="rounded-[50%] bg-current w-[60px] h-[60px] flex justify-center items-center">
                        <img src="./headset.svg" className="object-contain h-[25px]  w-[25px]" />
                    </div>
                    <TitleText title={'ENTER METAVERSE'} textStyles="text-[16px] font-normal" />
                    <TitleText title={item.title} textStyles="text-[30px] font-[700]" />
                </div>
            ) : (
                <div className={`${styles.cardText} absolute`}>
                    <h2 className="font-extrabold lg:text-[32px] text-[24px] text-white whitespace-nowrap">
                        {item.title}
                    </h2>
                </div>
            )}
        </div>
    </motion.div>
);

export default ExploreCard;
