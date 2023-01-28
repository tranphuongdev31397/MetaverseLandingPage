'use client';
import { motion } from 'framer-motion';
import { TitleText } from '../components';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { Text } from './CustomTexts';
const InsightCard = ({ item, active, variantOptions = { duration: 0.5, delay }, ...props }) => (
    <motion.div
        variants={fadeIn('up', 'tween', variantOptions.delay, variantOptions.duration)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.25 }}
        className="flex lg:flex-row flex-col gap-[62px]"
        {...props}
    >
        <div className="lg:w-[270px] h-[250px] w-full ">
            <img src={item.imgUrl} alt={item?.id} className="object-cover object-center rounded-3xl w-full h-full" />
        </div>
        <div className="flex-1 mr-7">
            <TitleText textStyles="text-[42px] font-normal" title={item?.title} />
            <Text>{item?.subtitle}</Text>
        </div>
        <div className="self-center w-[100px] h-[100px] hidden lg:flex items-center justify-center rounded-full border-white border-solid border-2">
            <img src="./arrow.svg" alt="arrow" className="w-[33px] h-[33px]" />
        </div>
    </motion.div>
);

export default InsightCard;
