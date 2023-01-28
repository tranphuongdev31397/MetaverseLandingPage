'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const About = () => (
    <section className={`${styles.yPaddings}  relative z-0 mx-auto w-full`}>
        <div className="gradient-02" />
        <div className="gradient-03" />

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} flex flex-col items-center justify-center`}
        >
            <TypingText text={'| About Metaverus'} />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-2 font-normal text-[32px] text-secondary-white text-center px-10"
            >
                <span className={`${styles.textBold}`}> Metaverse </span> is a new thing in the future, where you can
                enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse
                world, because this is really the{' '}
                <span className={`${styles.textBold}`}> madness of the metaverse </span> of today, using only
                <span className={`${styles.textBold}`}> VR</span> devices you can easily
                <span className={`${styles.textBold}`}> explore</span> the metaverse world you want, turn your dreams
                into reality. Let's explore the madness of the metaverse by scrolling down
            </motion.p>
        </motion.div>
    </section>
);

export default About;
