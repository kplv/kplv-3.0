import Layout from '../components/layout';
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import withYM from 'next-ym';

export default withYM(
  '42676289',
  Router
)(function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
});
