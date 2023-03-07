import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section id="world" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div
          className="absolute top-12 right-[18%] bg-[url('/src/constants/people-card-01.png')]
         bg-no-repeat bg-cover w-[192px] h-[136px] flex justify-end flex-col
         p-4 border-[6px] rounded-[30px] border-[#5D6680] max-[767.98px]:hidden"
        >
          <div className="flex items-start">
            <img
              src="people-01.png"
              alt="people"
              className="w-5 relative z-[2]"
            />
            <img
              src="people-03.png"
              alt="people"
              className="w-5 relative left-[-12px] z-[1]"
            />
            <img
              src="people-02.png"
              alt="people"
              className="w-5 relative left-[-24px]"
            />
            <p className="font-normal text-xs text-white whitespace-nowrap ml-auto">
              + 264 has joined
            </p>
          </div>
          <h4 className="font-bold text-white mt-2">Hawkins Labs</h4>
        </div>

        <div
          className="absolute bottom-[14%] left-[12%] bg-[url('/src/constants/people-card-02.png')]
         bg-no-repeat bg-cover w-[192px] h-[136px] flex justify-end flex-col
         p-4 border-[6px] rounded-[30px] border-[#5D6680] max-[1023.98px]:hidden"
        >
          <div className="flex items-start">
            <img
              src="people-01.png"
              alt="people"
              className="w-5 relative z-[2]"
            />
            <img
              src="people-03.png"
              alt="people"
              className="w-5 relative left-[-12px] z-[1]"
            />
            <img
              src="people-02.png"
              alt="people"
              className="w-5 relative left-[-24px]"
            />
            <p className="font-normal text-xs text-white whitespace-nowrap ml-auto">
              + 264 has joined
            </p>
          </div>
          <h4 className="font-bold text-white mt-2">The Upside Down</h4>
        </div>

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
