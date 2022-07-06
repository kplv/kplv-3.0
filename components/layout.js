import { Fragment } from 'react';
import Header from './header';
import socialData from '../data/socialData';
import Footer from './footer';
import BottomText from './bottom-text';
import { motion, AnimatePresence } from 'framer-motion';

function Layout(props) {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Fragment>
          <Header />
          <main>{props.children}</main>
          {/* это значит что внутри будет то, что между <mainfragment>ВОТ ЭТО</mainfragment> */}
          <Footer items={socialData} />
          <BottomText />
        </Fragment>
      </motion.div>
    </AnimatePresence>
  );
}

export default Layout;
