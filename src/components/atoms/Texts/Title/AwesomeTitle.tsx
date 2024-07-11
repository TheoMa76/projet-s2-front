import React from 'react';
import './awesometitle.css';
import MinecraftHN from './MinecraftHN';

interface MinecraftHNProps {
  className?: string;  
  children: React.ReactNode;
  imgSrc?: string;
}

const imgSrc = '/img/EasyMod.png';

const AwesomeTitle: React.FC<MinecraftHNProps> = ({ children }) => {
  return (
    <div className="relative w-2/4 h-1/4">
      <img src={imgSrc} alt="easymod" className="w-full h-auto" />
      <MinecraftHN as='h1' className="text-yellow-300 text-3xl absolute bottom-20 right-10 diagonal-text breath-animation">{children}</MinecraftHN>
    </div>
  );
}

export default AwesomeTitle;
