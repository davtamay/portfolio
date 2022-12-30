import '../styles/globals.css'
import withTwindApp from '@twind/next/app'
import twindConfig from '../twind.config'

import { motion } from 'framer-motion';

//export default withTwindApp()

function MyApp({ Component, pageProps, router }) {

//   <motion.div
//       key={router.route}
//       initial="initial"
//       animate="animate"
//       variants={{
//         initial: {
//           opacity: 0,
//         },
//         animate: {
//           opacity: 1,
//         },
//       }}
//  >

  return( 
  // <motion.div
  //   key={router.route}
  //   initial="initial"
  //   animate="animate"
    
  //   variants={{
  //     initial: {
  //       opacity: 0,
  //     },
  //     animate: {
  //       opacity: 1,
  //     },
  //   }}
  // >
    <Component {...pageProps} />
    
    // </motion.div>
    );
 
}

export default withTwindApp(twindConfig, MyApp)
