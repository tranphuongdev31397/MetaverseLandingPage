'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, InsightCard, TitleText, TypingText } from '../components';
import { DURATION_EXPLORED_CARD, insights } from '../constants';

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const Insights = () => {
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
                <TypingText text={'| Insight'} />
                <TitleText
                    title={<>Insight about metaverse</>}
                    textStyles={'text-center'}
                    motionVar={fadeIn('up', 'tween', 0.2, 1)}
                />
            </motion.div>

            <div className={`${styles.xPaddings} ${styles.innerWidth} flex flex-col gap-8  mx-auto`}>
                {insights.map((item, index) => {
                    return (
                        <InsightCard
                            item={item}
                            variantOptions={{
                                delay: index * DURATION_EXPLORED_CARD,
                                duration: DURATION_EXPLORED_CARD,
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Insights;
