'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 relative z-0`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} flex flex-col items-center`}
        >
            <motion.h1
                variants={textVariant(1.1)}
                initial="hidden"
                whileInView={'show'}
                className={`${styles.heroHeading}  z-10`}
            >
                METAVERSE
            </motion.h1>
            <motion.h1
                variants={textVariant(1.2)}
                initial="hidden"
                whileInView={'show'}
                className={`${styles.heroHeading} ${styles.flexStart} items-center  z-10`}
            >
                MA <div className={`${styles.heroDText} pt-1  z-10`} /> NESS
            </motion.h1>
        </motion.div>

        <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView={'show'}
            className={`w-full md:-mt-[20px] sm:-mt-[12px] rounded-tl-[140px] relative z-0`}
        >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -top-[30px] z-0" />
            <img
                src="./cover.png"
                alt={'cover'}
                className="w-full object-cover sm:h-[500px] h-[350px]  overflow-hidden rounded-tl-[140px] relative z-[2]"
            />
            <a
                href="#explorer"
                className="absolute sm:-bottom-[76px]  -bottom-[50px] sm:right-[135px] right-[20px] z-[5]"
            >
                <img
                    src="./stamp.png"
                    alt={'stamp'}
                    className="object-contain  sm:h-[155px] sm:w-[155px] h-[100px] w-[100px]  "
                />
            </a>
        </motion.div>
    </section>
);

export default Hero;
