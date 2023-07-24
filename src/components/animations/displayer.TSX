import React from 'react'
import { motion } from 'framer-motion'


function displayer() {
  const cards = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      trasition: {
        delayChildren: 0.5

      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return {
    cards,
    item
  
}
}
export default displayer
