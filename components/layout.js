import { Fragment } from 'react';
import Header from './header';
import socialData from '../data/socialData';
import Footer from './footer';
import BottomText from './bottom-text';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

function Layout(props) {

  
  return (
    
                 
        <Fragment>
            <Header />

            {props.children}
          
              
            {/* это значит что внутри будет то, что между <mainfragment>ВОТ ЭТО</mainfragment> */}
            <Footer items={socialData} />
            <BottomText />
        </Fragment>

        
    
  );
}

export default Layout;
