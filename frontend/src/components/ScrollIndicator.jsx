import './ScrollIndicator.css'

import { motion } from 'framer-motion'

export default function ScrollIndicator(){

  return(

    <motion.div

      className="scroll-indicator"

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:2,
        duration:1
      }}
    >

      <span className="scroll-text">
        Scroll To Discover
      </span>

      <div className="mouse">

        <div className="mouse-wheel"></div>

      </div>

      <div className="pulse-ring"></div>

    </motion.div>

  )

}