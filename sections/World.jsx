'use client';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';
import WorldCard from '../components/WorldCard';

const World = () => (
    <section className={`${styles.yPaddings}  relative z-0`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} ${styles.xPaddings} flex lg:flex-row-reverse flex-col-reverse items-center gap-20`}
        >
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="flex-1 flex flex-col gap-4 items-center">
                <TypingText text={'| People on the World'} />
                <TitleText
                    textStyles="text-center"
                    title={'Track friends around you and invite them to play together in the same world'}
                />

                <div className="mt-16 w-full h-full bg-[url('../public/map.png')] aspect-[1170/526] bg-contain bg-origin-content bg-no-repeat bg-center relative">
                    <img
                        src="./people-02.png"
                        className="object-contain lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] absolute top-[40px] left-[10%]"
                    />
                    <img
                        src="./people-03.png"
                        className="object-contain lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] absolute top-[40%] left-[48%]"
                    />
                    <img
                        src="./people-01.png"
                        className="object-contain lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] absolute top-[70%] right-[10%]"
                    />
                    <div className="w-[220px] h-[180px] absolute left-[20%] top-[34%]">
                        <WorldCard />
                    </div>
                    <div className="w-[220px] h-[180px] absolute right-[25%] top-[50px]">
                        <WorldCard
                            bgBlur="blur-blue"
                            bgImage="bg-[url('../public/planet-03.png')]"
                            title="Hawkins Labs"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default World;
