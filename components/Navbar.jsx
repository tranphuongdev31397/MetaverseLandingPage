'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
    <motion.nav
        className={`${styles.xPaddings}  py-8 relative mx-auto`}
        variants={navVariants}
        initial="hidden"
        whileInView={'show'}
    >
        <div className="w-[50%]  absolute inset-0  gradient-01" />
        <div className={`${styles.innerWidth} flex justify-between items-center gap-8 w-full text-white`}>
            <img src="./search.svg" alt="Search" className="h-6 w-6 object-contain cursor-pointer" />
            <h2 className="text-[24px] font-extrabold leading-[30px]">METAVERSUS</h2>
            <img src="./menu.svg" alt="Search" className="h-6 w-6 object-contain cursor-pointer" />
        </div>
    </motion.nav>
);

export default Navbar;
