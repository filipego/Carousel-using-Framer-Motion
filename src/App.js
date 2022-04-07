import './App.scss';
import { motion } from "framer-motion";
import {useRef, useEffect, useState} from 'react';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[]);

  return (
    <div className="App">
        <h1>Carousel using Framer Motion</h1>
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right:0, left: -width }}
            className="carousel__inner">
            {images.map(img => {
              return(
                <motion.div key={img} className="item">
                  <img src={img} alt="" />
                </motion.div>
              );
            })} 
          </motion.div>
        </motion.div>
    </div>
  );
}

export default App;
