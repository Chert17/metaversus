import { motion, AnimatePresence } from 'framer-motion';

import { navItems } from '../constants';

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
  opacity: 1,
  transition: { duration: 1 },
};

const Menu = ({ onCLoseMenu }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="menu"
        initial={{ translateX: 100 }}
        animate={{ translateX: 0 }}
        className="absolute top-0 left-0 w-full h-10 
     menu-gradient border-transparent rounded-2xl p-2"
      >
        <ul className="flex flex-row items-center overflow-x-auto max-[767.98px]:gap-4 md:justify-around">
          {navItems.map(({ href, label }) => (
            <motion.li
              key={href}
              className="text-white font-semibold"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={spring}
              whileHover={{ scale: 1 }}
              onClick={onCLoseMenu}
            >
              <a href={href} className="whitespace-nowrap">
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
