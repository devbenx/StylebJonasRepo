import '../styles/globals.css'
import React, { useEffect, useState } from "react";
import Loading from './components/loading'
import { motion } from 'framer-motion';


function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1
    },
  }}>{isLoading ? <Loading/> : <Component {...pageProps} />}</motion.div>;
}

export default MyApp;