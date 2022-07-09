import Layout from '../components/layout';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps }) {
  
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
