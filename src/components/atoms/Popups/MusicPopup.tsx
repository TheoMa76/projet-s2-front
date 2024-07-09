import MinecraftButton from '../Buttons/MinecraftButton';
import './popup.css';
import React, { useState } from 'react';

interface MusicPopupProps {
  onAccept: () => void;
  onDecline: () => void;
}

const MusicPopup: React.FC<MusicPopupProps> = ({ onAccept, onDecline }) => {
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

  return (
    <div className="popup-overlay py-2 px-3">
      <div className="popup-content py-2 px-3">
        <h2>Voulez-vous activer la musique de fond ?</h2>
        <MinecraftButton onClick={handleAccept} label='Oui'></MinecraftButton>
        <MinecraftButton onClick={handleDecline} label='Non'></MinecraftButton>
      </div>
    </div>
  );
};

export default MusicPopup;
