import MinecraftButton from '../Buttons/MinecraftButton';
import React, { useState } from 'react';
import MinecraftHN from '../Texts/Title/MinecraftHN';

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

  const handleAccept = () => {
    onAccept();
    setIsVisible(false);
  };

  const handleDecline = () => {
    onDecline();
    setIsVisible(false);
  };


  if (!isVisible) {
    return null;
  }

  const overlayClasses = `fixed overflow-hidden z-30 bg-center bg-repeat top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full 
  h-full z-50 bg-dirt `;
  const contentClasses = 'text-center flex flex-col items-center justify-center z-40 w-2/4 h-2/4 mx-auto my-2/4 bg-transparent py-2 px-3 text-center relative z-60 opacity-100';

  return (
    <>
    <div className={overlayClasses}></div>
      <div className={contentClasses}>
        <MinecraftHN as='h3'>Voulez-vous activer la musique ?</MinecraftHN>
        <MinecraftButton onClick={handleAccept} label='Oui' className='m-3 w-2/4'></MinecraftButton>
        <MinecraftButton onClick={handleDecline} label='Non' className='m-3 w-2/4'></MinecraftButton>
    </div>
    </>
  );
};


export default MusicPopup;
