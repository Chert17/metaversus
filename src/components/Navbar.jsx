import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import Menu from './Menu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToogleMenu = e => {
    if (e.target.nodeName !== 'A') return;
    setShowMenu(false);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8 mb-3`}
        >
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
            METAVERSUS
          </h2>
          <button type="button" onClick={() => setShowMenu(prev => !prev)}>
            {!showMenu ? (
              <img
                src="menu.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
              />
            ) : (
              <img
                src="close-menu.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
              />
            )}
          </button>
        </div>
        <div className={`relative mx-auto ${styles.innerWidth}`}>
          {showMenu && <Menu onCLoseMenu={handleToogleMenu} />}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
