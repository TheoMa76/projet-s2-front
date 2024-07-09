import MinecraftButton from '../Buttons/MinecraftButton';
import './popup.css';
import React, { useState } from 'react';

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

  const combinedStyle = {
    ...style,
    backgroundImage: 'url(/img/dirt.jpeg)',
    overflow : 'hidden',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backdropFilter: 'color(0, 0, 0, 0.5)',
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
    <div className="popup-overlay fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-full z-50 opacity-70" style={combinedStyle}></div>
      <div className="popup-content w-2/4 mx-auto my-auto bg-transparent py-2 px-3 text-center relative z-60 opacity-100">
        <h2 className='text-2xl minecraftText'>Voulez-vous activer la musique de fond ?</h2>
        <MinecraftButton onClick={handleAccept} label='Oui' className='m-3 w-2/4'></MinecraftButton>
        <MinecraftButton onClick={handleDecline} label='Non' className='m-3 w-2/4'></MinecraftButton>
    </div>
    </>
  );
};


export default MusicPopup;
