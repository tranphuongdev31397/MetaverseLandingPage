'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TitleText } from '../components';

import styles from '../styles';
import { slideIn, staggerContainer, zoomIn } from '../utils/motion';
const Feedback = () => {
    const divRef = useRef();
    const [dimensions, setDimensions] = useState({});
    useEffect(() => {
        if (divRef.current) {
            setDimensions({
                height: divRef.current.offsetHeight,
            });
        }
        window.addEventListener('resize', () =>
            setDimensions({
                height: divRef.current.offsetHeight,
            }),
        );
    }, []);
    return (
        <section className={`${styles.yPaddings}  relative z-0`}>
            <div className="gradient-04" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} ${styles.xPaddings} flex lg:flex-row flex-col items-center gap-10`}
            >
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    ref={divRef}
                    className="flex-[0.5] flex rounded-3xl border-[#6a6a6a] p-[30px] border-2 relative text-white h-full"
                >
                    <div className="feedback-gradient" />
                    <div className="lg:mt-[130px]">
                        <TitleText title={'Samantha'} textStyles="text-[32px]" />
                        <p className={'text-[18px] text-white font-normal mt-2 mb-6'}>Founder Metaverus</p>
                        <p className={'text-[24px] text-white font-normal'}>
                            “With the development of today's technology, metaverse is very useful for today's work, or
                            can be called web 3.0. by using metaverse you can use it as anything”
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className={`lg:flex-[1.5] h-full w-full flex flex-col gap-2 z-[1] relative`}
                    style={{
                        height: `${dimensions?.height}px`,
                    }}
                >
                    <img
                        src="./planet-09.png"
                        alt="planet-feedback"
                        className="object-cover w-full h-full rounded-3xl z-[1]"
                    />
                    <motion.div
                        variants={zoomIn(1, 1)}
                        initial="hidden"
                        whileInView={'show'}
                        className="lg:block hidden absolute top-[30px] left-[-100px] z-[10]"
                    >
                        <a href="#explorer">
                            <img
                                src="./stamp.png"
                                alt={'stamp'}
                                className="object-contain  h-[155px] w-[155px]  rotate-45"
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Feedback;
