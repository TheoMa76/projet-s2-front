import MinecraftButton from '../Buttons/MinecraftButton';
import React, { useState, useEffect } from 'react';
import MinecraftHN from '../Texts/Title/MinecraftHN';
import AwesomeTitle from '../Texts/Title/AwesomeTitle';

interface MusicPopupProps {
  onAccept: () => void;
  onDecline: () => void;
  style?: React.CSSProperties;
}

const MusicPopup: React.FC<MusicPopupProps> = ({ 
  onAccept, 
  onDecline,
  style = {} 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 400);

  const handleAccept = () => {
    onAccept();
    setIsVisible(false);
  };

  const handleDecline = () => {
    onDecline();
    setIsVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const overlayClasses = `fixed overflow-hidden z-30 bg-center bg-repeat top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full 
  h-full bg-dirt`;
  const contentClasses = 'text-center z-40 w-full h-full lg:w-2/4 lg:h-2/4 mx-auto my-2/4 bg-transparent py-2 px-3 text-center relative z-60 opacity-100';

  return (
    <>
    <div className='bg-white z-50 w-full h-full'>
      <div className={overlayClasses}></div>
        <div className={contentClasses}>
          <div className='flex justify-center items-center w-full'>
            {!isScreenSmall && <AwesomeTitle className='text-3xl mb-10'>Bienvenue sur EasyMod !</AwesomeTitle>}
          </div>
          <MinecraftHN as='h3'>Voulez-vous activer la musique ?</MinecraftHN>
          <MinecraftButton onClick={handleAccept} label='Oui' className='m-3 w-2/4'></MinecraftButton>
          <MinecraftButton onClick={handleDecline} label='Non' className='m-3 w-2/4'></MinecraftButton>
      </div>
    </div>
    </>
  );
};

export default MusicPopup;
