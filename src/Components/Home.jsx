import {React, useRef} from 'react'
import './Home.css';
import bg1 from '../assets/slide4.jpg';
import bg2 from '../assets/slide5.jpg';
import bg3 from '../assets/slide3.jpg';
import bg4 from '../assets/previous.jpg'

const Home = () => {
    let imageContainerRef = useRef(null)
    const images = [bg1,bg2,bg3,bg4]

    const prev = () => imageContainerRef.current.scrollLeft -= 250

    const next = () => imageContainerRef.current.scrollLeft += 250
    return (
    <div className='page-container'>
      <div className="content">
        <div className='prev' onClick={prev}></div>
        <div className='slide-panel' ref={imageContainerRef}>
            {images.map(image => {return (<img src={image} />)})}
        </div>
        <div className='next' onClick={next}></div>
      </div>
    </div>
  )
}

export default Home;
