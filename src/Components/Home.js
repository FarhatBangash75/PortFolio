import React, { useEffect, useState } from 'react';
import './Home.css';
import pics from './pics.jpeg';
import eng2 from './eng2.jpeg';

function Home() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false);
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Home-Main-dev'>
      <img src={pics} alt='description' className='pic' />
      <p className='Hello'>Hello, I am</p>
      <h2 className='Farhat-dev'>Farhat Irshad</h2>

      {showFirst ? (
        <h2 className='Full-stack fade-in'>Web Developer</h2>
      ) : (
        <h2 className='Full-stack fade-in green'>Full Stack Web Developer</h2>
      )}

      <p className='text'>I build exceptional and professional web experience with technology</p>
      <button className='View'>View Tasks</button>
      <button className='Submit'>Contact Me</button>

      <div className='Photo-dev'>
        <img src={eng2} alt='description' className='eng-pics' />
      </div>
    </div>
  );
}

export default Home;
