import Layout from '../components/layout';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import withYM from 'next-ym';
import { useRouter } from 'next/router';

export default withYM(
  '42676289',
  Router
)(function MyApp({ Component, pageProps }) {



  return (
    
      <Layout>
        
        <Component {...pageProps}/>
        
      </Layout>
    
  );
});


