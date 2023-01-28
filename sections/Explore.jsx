'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import { DURATION_EXPLORED_CARD, exploreWorlds } from '../constants';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const Explore = () => {
    const [active, setActive] = useState(2);

    return (
        <section className={`${styles.yPaddings}  relative z-0`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} flex flex-col items-center justify-center mb-12`}
            >
                <TypingText text={'| The World'} />
                <TitleText
                    title={
                        <>
                            Choose the world you want <br className="md:block hidden" />
                            to explore{' '}
                        </>
                    }
                    textStyles={'text-center'}
                    motionVar={fadeIn('up', 'tween', 0.2, 1)}
                />
            </motion.div>

            <div
                className={`${styles.xPaddings} ${styles.innerWidth} flex lg:flex-row flex-col gap-4 min-h-[700px] mx-auto`}
            >
                {exploreWorlds.map((item, index) => {
                    return (
                        <ExploreCard
                            item={item}
                            variantOptions={{
                                delay: index * DURATION_EXPLORED_CARD,
                                duration: DURATION_EXPLORED_CARD,
                            }}
                            active={active === index}
                            onClick={() => setActive(index)}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Explore;
