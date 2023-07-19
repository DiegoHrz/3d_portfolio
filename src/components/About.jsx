import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className=''> {title}</Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum nemo vitae, accusamus rerum laudantium excepturi ullam fuga illo, aliquid dolor fugiat corporis. Error repudiandae ipsam ab recusandae impedit alias?
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} /> 
        ))}
      </div>
    </>
  )
}

export default About    