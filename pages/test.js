import PageLoader from '../components/pageLoader';
import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function testPage(props) {
  const [isChecked, setIsChecked] = useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 1], [0, 1]);
  return (
    <div>
      <motion.div
        transition={{ ease: [0.17, 0.67, 0.83, 0.67], }}
        onHoverStart={() => setIsChecked(!isChecked)}
        onHoverEnd={() => setIsChecked(!isChecked)}
      >
        <svg width="122" height="2" viewBox="0 0 122 2" fill="none">
          <motion.path
            d='M0.5 1H122'
            stroke='#161E23'
            stroke-width='2'
            fill='transparent'
            strokeWidth='20'
            strokeLinecap='round'
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: isChecked ? 0 : 1 }}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default testPage;
